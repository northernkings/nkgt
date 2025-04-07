/* eslint-disable no-console */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// List of Node.js built-in modules to check for
const NODE_BUILTINS: readonly string[] = [
  "assert",
  "buffer",
  "child_process",
  "cluster",
  "crypto",
  "dgram",
  "dns",
  "events",
  "fs",
  "http",
  "https",
  "net",
  "os",
  "path",
  "querystring",
  "readline",
  "stream",
  "string_decoder",
  "tls",
  "url",
  "util",
  "v8",
  "vm",
  "zlib",
] as const;

// Modified regex to capture the full import statement
const importRegex = new RegExp(
  `((?:require\\s*\\(['"]|import.*?from\\s+['"])(?!node:))(${NODE_BUILTINS.join("|")})(['"])`,
  "g"
);

interface ImportMatch {
  filePath: string;
  module: string;
  line: number;
  column: number;
  fullMatch: string;
  replacement: string;
}

function scanAndFixFile(filePath: string): ImportMatch[] {
  try {
    let content = readFileSync(filePath, "utf8");
    const matches: ImportMatch[] = [];

    let match: RegExpExecArray | null;
    match = importRegex.exec(content);
    while (match !== null) {
      const upToMatch = content.slice(0, match.index);
      const lineNumber = upToMatch.split("\n").length;
      const lastNewline = upToMatch.lastIndexOf("\n");
      const column = match.index - (lastNewline + 1);

      const fullMatch = match[0];
      const importStart = match[1];
      const moduleName = match[2];
      const quote = match[3];
      const replacement = `${importStart}node:${moduleName}${quote}`;

      matches.push({
        filePath,
        module: moduleName,
        line: lineNumber,
        column,
        fullMatch,
        replacement,
      });

      match = importRegex.exec(content);
    }

    if (matches.length > 0) {
      console.log(`\nFile: ${filePath}`);
      // Apply all replacements
      for (const { fullMatch, replacement, module, line, column } of matches) {
        content = content.replace(fullMatch, replacement);
        console.log(
          `- Added 'node:' prefix to '${module}' module at line ${line}, column ${column}`
        );
      }
      // Write the modified content back to the file
      writeFileSync(filePath, content, "utf8");
    }

    return matches;
  } catch (error) {
    console.error(
      `Error processing file ${filePath}:`,
      error instanceof Error ? error.message : String(error)
    );
    return [];
  }
}

function traverseDirectory(dir: string): ImportMatch[] {
  const allMatches: ImportMatch[] = [];

  try {
    const files = readdirSync(dir);

    for (const file of files) {
      const fullPath = join(dir, file);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules and hidden directories
        if (
          file !== "node_modules" &&
          !file.startsWith(".") &&
          file !== "dist" &&
          file !== "bin" &&
          file !== "reports" &&
          file !== "coverage"
        ) {
          allMatches.push(...traverseDirectory(fullPath));
        }
      } else if (/\.(js|ts|mjs|tsx|jsx)$/.test(file)) {
        allMatches.push(...scanAndFixFile(fullPath));
      }
    }
  } catch (error) {
    console.error(
      `Error traversing directory ${dir}:`,
      error instanceof Error ? error.message : String(error)
    );
  }

  return allMatches;
}

export function prefixNodeImports() {
  const startDir = process.argv[2] || ".";
  console.log(`Scanning and fixing directory: ${startDir}`);

  const matches = traverseDirectory(startDir);

  if (matches.length === 0) {
    console.log("\nNo unprefixed Node.js internal imports found.");
  } else {
    console.log(
      `\nFixed ${matches.length} Node.js internal import${
        matches.length === 1 ? "" : "s"
      } by adding 'node:' prefix.`
    );
  }
}

// Only run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  prefixNodeImports();
}
