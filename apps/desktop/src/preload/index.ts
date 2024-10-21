import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import os from 'os'

// Custom APIs for renderer
const api = {
  host: {
    // name: os.hostname(),
    memory: os.totalmem(),
    cpusLength: os.cpus().length
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
