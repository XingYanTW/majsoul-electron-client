const { app, BrowserWindow } = require('electron')

let mainWindow = null

app.whenReady().then(() => {
  // We cannot require the screen module until the app is ready.
  const { screen } = require('electron')

  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  mainWindow = new BrowserWindow({ 
    width,
    height,
    frame: false,
    fullscreen: true,
	icon: 'favicon.ico'
  })
  mainWindow.loadURL('https://game.mahjongsoul.com/index.html')
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})