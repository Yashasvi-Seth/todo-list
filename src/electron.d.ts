// electron.d.ts (or src/electron.d.ts)

/// <reference types="vite/client" />

interface IElectronAPI {
  minimize: () => void;
  toggleMaximize: () => void;
  close: () => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }

  // This part adds import.meta.env support (for import.meta.env.DEV etc.)
  interface ImportMetaEnv {
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly MODE: string;
    // Add any custom VITE_ variables here if you use them, e.g.:
    // readonly VITE_APP_TITLE: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};