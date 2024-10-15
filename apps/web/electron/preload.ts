import { contextBridge } from "electron";
import os from "os";

contextBridge.exposeInMainWorld("__platform__", {
  hostname: os.hostname(),
  memory: os.totalmem(),
  cpus: os.cpus(),
});
