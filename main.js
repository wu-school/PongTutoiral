const { app, BrowserWindow } = require('electron')

var win;
const createWindow = () => {
    win = new BrowserWindow({
        width: 450,
        height: 800
    })

    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
