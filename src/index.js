'use strict';

const { app, BrowserWindow }= require("electron");

console.dir(app);

app.on("before-quit", () => {
    console.log("Saliendo");
})

app.on("ready", () => {
    let win= new BrowserWindow({
        width: 1000,
        height: 900,
        title: "Jelou",
        center: true,
        maximizable: true, 
        show: false
    });

    win.on("closed", ()=> {
        app.quit();
        win= null;
    });

    win.on("move", () => {
        const position= win.getPosition();
        console.log(`La posicion es : ${position}`);
    });

    win.once("ready-to-show", () => {
        win.show()
    })

    win.loadURL("https://devdocs.io/")
    win.loadURL(`file://${__dirname}/renderer/index.html`)
})