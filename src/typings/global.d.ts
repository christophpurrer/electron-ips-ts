export {};
declare global {
  interface Window {
    bridge: {
      ipcRenderer: any;
    };
  }
}
