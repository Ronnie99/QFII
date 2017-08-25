require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
let fs = require('fs');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://114.141.166.21:18003/qfii/KJAF2/html/frame/login.htm');
driver.manage().window().maximize();
driver.findElement(By.id('form1_user')).sendKeys('8888');
driver.findElement(By.id('form1_textPassword')).click();
driver.findElement(By.id('form1_password')).sendKeys('1');
driver.findElement(By.id('form1_ok')).click();
driver.sleep(3000);
driver.findElement(By.className('kui-navkjax-sideTab kui-navkjax-sideTab-current')).click();
driver.findElement(By.id('kui-17_tree_10_span')).click();//证券参数
driver.findElement(By.id('kui-17_tree_11_span')).click();//证券信息设置
driver.sleep(2000);
driver.switchTo().frame('ui-frame-main-frameTab_tabContent_0').then(function(){
    driver.findElement(By.css('#kui-2 > div.kui-button-text')).click();
    driver.findElement(By.id('kui-17_btn')).click();
    driver.findElement(By.xpath('//*[@id="kui-17_list"]/ul/li[2]/input')).click();
    driver.sleep(5000);
    driver.findElement(By.id('kui-23')).click();
    driver.takeScreenshot().then(function(imagedata){
        fs.writeFileSync(imagedir+'/zhengquanxinxi',imagedata,'base64')
    })
})

