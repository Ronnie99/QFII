require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
let fs = require('fs');
let path =require('path');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://114.141.166.21:18003/qfii/KJAF2/html/frame/login.htm');
driver.manage().window().maximize();
driver.findElement(By.id('form1_user')).sendKeys('8888');
driver.findElement(By.id('form1_textPassword')).click();
driver.findElement(By.id('form1_password')).sendKeys('1');
driver.findElement(By.id('form1_ok')).click();
driver.sleep(6000);
driver.findElement(By.xpath('//*[@id="kui-11"]/div[2]/table/tbody/tr/td[1]/div/div[3]/div[2]')).click();
driver.findElement(By.id('kui-17_tree_11_span')).click();//证券信息设置
driver.sleep(3000);
driver.switchTo().frame('ui-frame-main-frameTab_tabContent_1').then(function(){
    driver.sleep(3000);
    driver.findElement(By.xpath('//*[@id="kui-2"]')).click();
    driver.findElement(By.id('kui-17_btn')).click();
    driver.findElement(By.xpath('//*[@id="kui-17_list"]/ul/li[2]/input')).click();
    driver.findElement(By.id('kui-23')).click();
    driver.sleep(5000)
    driver.takeScreenshot().then(function(imagedata){    // 截图
        fs.writeFileSync('xinxi.png',imagedata,'base64')
    })
})


