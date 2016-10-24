var randomstring = require("randomstring");

const full_name = randomstring.generate();

const password = randomstring.generate();
const SELENIUM_HOST = process.env.SELENIUM_HOST

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer(`http://${SELENIUM_HOST}:4444/wd/hub`)
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.takeScreenshot().then(
function(image, err) {
    require('fs').writeFile('out.png', image, 'base64', function(err) {
        console.log(err);
        driver.quit();
    });
}
);
