require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
var By = webdriver.By;
driver.get('http://114.141.166.21:18003/qfii/KJAF2/html/frame/login.htm') ;
driver.findElement(By.id('form1_user')).sendKeys('8888');
driver.findElement(By.id('form1_textPassword')).click();
driver.findElement(By.id('form1_password')).sendKeys('1');
driver.findElement(By.id('form1_ok')).click();
driver.manage().window().maximize();
driver.sleep(5000);
driver.findElement(By.xpath('//*[@id="kui-11"]/div[2]/table/tbody/tr/td[1]/div/div[3]/div[7]')).click();//点击财务按钮
driver.findElement(By.id('kui-17_tree_1_span')).click();
driver.sleep(3000);
driver.switchTo().frame('ui-frame-main-frameTab_tabContent_1').then(function(){
    driver.sleep(3000);
    driver.findElement(By.id('kui-7_btn')).click();
    driver.findElement(By.xpath('//*[@id="kui-7_list"]/ul/li[8]')).click();
    //driver.findElement(By.xpath('//*[@id="kui-1_bottombar"]/div[2]/div/button[1]/div[2]')).click();//点击调整资金
    //driver.findElement(By.id('kui-17_btn')).click();
    //driver.findElement(By.xpath('//*[@id="kui-17_list"]/ul/li[8]')).click();//产品编号
    //driver.findElement(By.xpath('//*[@id="kui-19_text"]/div')).click();
    //driver.findElement(By.xpath('//*[@id="kui-19_list"]/ul/li[12]')).click();//业务类型
    //driver.findElement(By.id('kui-18_btn')).click();
    //driver.findElement(By.xpath('//*[@id="kui-18_list"]/ul/li[2]')).click();
    //driver.findElement(By.css('#kui-22[number=true]')).sendKeys('80000');
    //driver.findElement(By.css('#kui-14_btn>button#kui-28> div.kui-button-text')).click();
})