const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 750,
    icon: path.join(__dirname, 'images/icon.png'),
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  
  // Charge ton interface avec backend Render
  win.loadFile('index.html');
  
  // Splash screen avec ton image ronde
  win.setTitle("Israël_AI - Septembre 2026");
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
