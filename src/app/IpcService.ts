import { IpcRenderer } from "electron";
import { IpcRequest } from "../shared/IpcRequest";

export class IpcService {
  private ipcRenderer?: IpcRenderer;

  public send<T>(channel: string, request: IpcRequest = {}): Promise<T> {
    // If the ipcRenderer is not available try to initialize it
    if (!this.ipcRenderer) {
      this.initializeIpcRenderer();
    }

    const ipcRenderer = this.ipcRenderer;
    return ipcRenderer.invoke(channel, request);
  }

  private initializeIpcRenderer() {
    if (!window || !window.process || !window.require) {
      throw new Error(`Unable to require renderer process`);
    }
    this.ipcRenderer = window.require("electron").ipcRenderer;
  }
}
