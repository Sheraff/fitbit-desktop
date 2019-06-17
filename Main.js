const Menubar = require('menubar')

const mb = Menubar.menubar({
    index: `file://${__dirname}/front/build/index.html`,
    icon: `file://${__dirname}/res/icon.png`, //must be 20x20px (provide a 40x40 icon@2x.png file for retina screens)
    preloadWindow: true
});

mb.on('ready', () => {
  console.log('app is ready')
  // your app code here
});

mb.on('create-window', () => {}) // will open window

mb.on('after-create-window', () => {
    mb.showWindow()
    mb.window.openDevTools()
})

/*
 *
 * Promise.all(getToken, startElectron)
 * startElectron => on('ready') {resolve()}
 * 
 * refresh every x minutes (decreasing over time of inactivity, restored to initial on mb.on('show'))
 * 
 * 
 */