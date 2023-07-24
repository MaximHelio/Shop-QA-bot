const { WebDriver } = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

// 웹 드라이버 생성 (Chrome 또는 Firefox 드라이버 다운로드 필요)
const driver = new Builder().forBrowser('chrome').build();
const maxWait = 100
let cursor

async function main() {
  try {
    // 웹 페이지 접속
    await driver.get('https://www.samsung.com/ie/smartphones/galaxy-z-fold4/buy');

    // 쿠키 버튼 뜨면, 클릭
    await driver.sleep(500);
    // await driver.findElement(By.id('onetrust-accept-btn-handler')).click();
    cursor = await driver.wait(until.elementLocated(By.id('onetrust-accept-btn-handler')),maxWait);
    await cursor.click();
    
    // class="c_btn_area"인 요소 클릭
    // await driver.findElement(By.className('add-to-cart')).click();
    cursor = await driver.wait(until.elementLocated(By.className('add-to-cart')),maxWait);
    await cursor.click();
    
    // // class="cta cta--contained cta--emphasis price-bar-cart-btn"인 요소 클릭
    // await driver.findElement(By.className('cta--contained')).click();
    cursor = await driver.wait(until.elementLocated(By.css('#product-buttons .btn-2')),maxWait);
    await cursor.click();

    

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // 웹 브라우저 닫기
    await driver.quit();
  }
}

main();
