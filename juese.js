require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
var By = webdriver.By;
var until = webdriver.until;
driver.get('http://114.141.166.21:18003/qfii/KJAF2/html/frame/login.htm');
driver.manage().window().maximize()
driver.findElement(By.id('form1_user')).sendKeys('8888');
driver.findElement(By.id('form1_textPassword')).click();
driver.findElement(By.id('form1_password')).sendKeys('1');
driver.findElement(By.id('form1_ok')).click();
driver.sleep(5000);
driver.findElement(By.css('#kui-3 > ul > li:nth-child(3)')).click();//系统
driver.sleep(2000);
driver.findElement(By.className('kui-navkjax-sideTab kui-navkjax-sideTab-current')).click();//用户管理
driver.findElement(By.id('kui-18_tree_2_a')).click();//角色管理
driver.switchTo().frame('ui-frame-main-frameTab_tabContent_1').then(function(){
    driver.sleep(2000);
    driver.findElement(By.id('role_tree_tree_14_a')).click();
    driver.sleep(2000);
    driver.findElement(By.xpath('//*[@id="role_modify"]/div[2]')).click();
    driver.findElement(By.id('kui-21')).clear();
    driver.findElement(By.id('kui-21')).sendKeys('222');
    driver.findElement(By.id('kui-23')).click();
})