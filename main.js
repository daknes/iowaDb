'use strict';

const electron = require('electron');
var path = require('path');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  
    

    mainWindow = new BrowserWindow({width: 1200 ,height:900, 'web-preferences': {
      'plugins': true
    }});

mainWindow.openDevTools({detach:true});
    mainWindow.loadURL('file://' + __dirname + '/index2.html');
    //myswag();
      // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});


function myswag (){
        var MongoClient = require('mongodb').Mongoclient;
        var assert = require('assert');
        var url = 'mongodb://localhost:27017/mydb';
        MongoClient.connect(url, function(err, db){
           assert.equal(null, err);
           console.log("connected");
           db.close(); 
        }); 
}