
require('chromedriver');
var webdriver=require('selenium-webdriver');
let fs = require('fs');
let path =require('path')
var driver=new webdriver.Builder().forBrowser('chrome').build();
let By = webdriver.By;
driver.get('https://www.baidu.com/');
driver.manage().window().maximize();
var gengduo=driver.findElement({name:'tj_briicon'});
driver.actions().mouseMove(gengduo).perform();
driver.takeScreenshot().then(function(imagedata){    // 截图
    fs.writeFileSync('baid.png',imagedata,'base64')
})
