export interface PageProps {}
// The `pageContext` that are available in both on the server-side and browser-side
export interface PageContext {
  Page: any;
  pageProps?: PageProps;
  documentProps?: DocumentProps;
}

export interface DocumentProps {
  title?: string;
  description?: string;
  meta?: any[];
}
