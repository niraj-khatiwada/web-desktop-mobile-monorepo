import { contextBridge } from "electron";
import os from "os";

contextBridge.exposeInMainWorld("__platform__", {
  memory: os.totalmem(),
  hostname: os.hostname(),
  cpus: os.cpus(),
});
