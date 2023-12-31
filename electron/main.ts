// main.js

// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow } = require('electron')
const path = require('path')
const { Menu } = require('electron')
Menu.setApplicationMenu(null)

const NODE_ENV = process.env.NODE_ENV //新增

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    menubar: false,
    icon: path.join(__dirname, '../public/favicon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  })

  // 加载 index.html
  // mainWindow.loadFile('dist/index.html') // 此处跟electron官网路径不同，需要注意
  // mainWindow.loadURL("http://localhost:5173") //这里改成自己的项目启动端口
  mainWindow.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:8013'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  ) // 新增
  // 打开开发工具
  if (NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools()
  } // 新增
}

// 这段程序将会在 Electron 结束初始化和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  // process是node的全局模块，作用比较直观。可以通过它来获得node进程相关的信息，比如运行node程序时的命令行参数。或者设置进程相关信息，比如设置环境变量
  if (process.platform !== 'darwin') app.quit()
})

// 在这个文件中，你可以包含应用程序剩余的所有部分的代码，
// 也可以拆分成几个文件，然后用 require 导入。
