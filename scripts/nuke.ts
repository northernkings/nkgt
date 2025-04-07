/* eslint-disable no-console */
import { execSync } from "node:child_process";
import { promises as fs } from "node:fs";
import { join } from "node:path";

interface NukeOptions {
  lock?: boolean;
  dependencies?: boolean;
  astro?: boolean;
  netlify?: boolean;
  turbo?: boolean;
  dist?: boolean;
  coverage?: boolean;
  vite?: boolean;
  all?: boolean;
}

const DIRECTORY_PATTERNS = {
  dist: "dist",
  coverage: "coverage",
  astro: ".astro",
  netlify: ".netlify",
  vite: ".vite",
};

const FLAGS = new Set([
  "--all",
  "--astro",
  "--coverage",
  "--dependencies",
  "--dist",
  "--lock",
  "--netlify",
  "--turbo",
  "--vite",
]);

async function findDirectories(pattern: string, ignoreDirs = ["node_modules"]): Promise<string[]> {
  const dirs: string[] = [];

  async function scan(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        if (ignoreDirs.includes(entry.name)) continue;
        if (entry.name === pattern) {
          dirs.push(fullPath);
        }
        await scan(fullPath);
      }
    }
  }

  await scan(process.cwd());
  return dirs;
}

export async function nuke(options: NukeOptions): Promise<void> {
  const tasks: Array<{ name: string; action: () => Promise<void> }> = [];

  console.log("💣 Preparing to Nuke...");

  if (options.lock || options.all) {
    tasks.push({
      name: "Removing pnpm-lock.yaml",
      action: async () => {
        try {
          await fs.unlink("pnpm-lock.yaml");
        } catch (error) {
          if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
        }
      },
    });
  }

  if (options.dependencies || options.all) {
    tasks.push({
      name: "Removing node_modules directories",
      action: async () => {
        const command =
          process.platform === "win32"
            ? "where /r . node_modules"
            : 'find . -name "node_modules" -type d';

        const dirs = execSync(command, { encoding: "utf8" }).split("\n").filter(Boolean);

        await Promise.all(dirs.map((dir) => fs.rm(dir, { recursive: true, force: true })));
      },
    });
  }

  // Add tasks for directory-based cleanups
  for (const [key, pattern] of Object.entries(DIRECTORY_PATTERNS)) {
    if (options[key as keyof NukeOptions] || options.all) {
      tasks.push({
        name: `Removing ${pattern} directories`,
        action: async () => {
          const dirs = await findDirectories(pattern);
          await Promise.all(dirs.map((dir) => fs.rm(dir, { recursive: true, force: true })));
        },
      });
    }
  }

  // Execute all tasks
  for (const task of tasks) {
    console.log(`💥 ${task.name}...`);
    try {
      await task.action();
      console.log(`✅ ${task.name} completed`);
    } catch (error) {
      console.error(`❌ ${task.name} failed:`, error);
      process.exit(1);
    }
  }

  console.log("✨ Nuke completed successfully\n");
}

// Parse command line arguments
const args = process.argv.slice(2);
const options: NukeOptions = {};

for (const arg of args) {
  if (!FLAGS.has(arg)) {
    console.error(`Invalid flag: ${arg}`);
    console.log("Valid flags are:", Array.from(FLAGS).join(", "));
    process.exit(1);
  }
  options[arg.slice(2) as keyof NukeOptions] = true;
}

// If no flags provided, show help
if (args.length === 0) {
  console.log("Usage: pnpm nuke [flags]");
  console.log("\nAvailable flags:");
  console.log("  --all           Remove everything");
  console.log("  --lock          Remove pnpm-lock.yaml");
  console.log("  --dependencies  Remove node_modules directories");
  console.log("  --astro         Remove .astro directories");
  console.log("  --netlify       Remove .netlify directories");
  console.log("  --turbo         Remove .turbo directories");
  console.log("  --dist          Remove dist directories");
  console.log("  --coverage      Remove coverage directories");
  console.log("  --vite          Remove .vite directories");
  process.exit(0);
}

nuke(options).catch((error) => {
  console.error("Failed to complete cleanup:", error);
  process.exit(1);
});
