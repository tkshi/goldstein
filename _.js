var randomstring = require("randomstring");

full_name = randomstring.generate();

password = randomstring.generate();
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://13.78.94.40:4444/wd/hub')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.id('full-name')).sendKeys('webdriver');
driver.findElement(By.id('email')).sendKeys('webdriver');
driver.findElement(By.id('password')).sendKeys('webdriver');
driver.findElement(By.name('submit_button')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('out.png', image, 'base64', function(err) {
            console.log(err);
        });
    }
);
