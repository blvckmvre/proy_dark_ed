const {app, BrowserWindow} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 800,
        minHeight: 800,
        minWidth: 600
    });
    win.loadURL(isDev ?
        'http://localhost:3000' :
        `file://${path.join(__dirname, "../build/index.html")}`);
}
app.whenReady().then(()=>{
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });