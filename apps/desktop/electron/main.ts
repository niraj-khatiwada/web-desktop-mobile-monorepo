import path from "path";
import { app, BrowserWindow } from "electron";
import serve from "electron-serve";

if (app.isPackaged) {
  serve({ directory: path.join(__dirname, "..", "dist") });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (app.isPackaged) {
    mainWindow.loadURL("app://.");
  } else {
    mainWindow.loadURL("http://localhost:3000");
  }
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
