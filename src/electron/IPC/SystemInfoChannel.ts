import { IpcChannelInterface } from "./IpcChannelInterface";
import { IpcMainEvent } from "electron";
import { IpcRequest } from "../../shared/IpcRequest";
import { execSync } from "child_process";

export class SystemInfoChannel implements IpcChannelInterface {
  getName(): string {
    return "system-info";
  }

  handle(event: IpcMainEvent, request: IpcRequest): Promise<any> {
    // if (!request.responseChannel) {
    //   request.responseChannel = `${this.getName()}_response`;
    // }
    return Promise.resolve({ kernel: execSync("uname -a").toString() });
  }
}
