declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

interface ImportMetaEnv {
  readonly VITE_URL_CENTER?: string
  readonly VITE_URL_MONTHLY?: string
  readonly VITE_URL_AUCTION?: string
  readonly VITE_URL_KIM?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
