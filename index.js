const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = require('selenium-webdriver/chrome');
const ExcelJS = require('exceljs');

(async function example() {
  // Chrome 옵션 생성
  const options = new Options();

  // Chrome 웹 드라이버로 웹 브라우저 열기
  const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    // 웹사이트 열기
    await driver.get('https://samsung.com/in/smartphones'); // 적절한 웹사이트 주소로 변경해주세요.

    await driver.sleep(2000);
    // 셀레니움을 사용하여 웹 브라우저에서 Mobile 버튼 호버액션 수행
    const mobielButton = await driver.findElement(By.className('nv00-gnb__l0-menu-btn')[1]); // 각 나라의 적절한 class명을 입력해주세요
    await driver.actions().move({origin: mobielButton}).perform();

    // Smartphones 버튼 클릭
    const smartphonesButton = await driver.findElement(By.xpath("//a[contains(text(), 'mart')]")); // Smartphones 에서 mart
    await smartphonesButton.click();
    // 크롬 개발자 도구 열기
    function openDevTools() {
      return new Promise((resolve) => {
        // 개발자 도구를 열기 위해 F12 키 입력 (키 입력은 시각적으로 표시되지 않습니다)
        window.addEventListener('keydown', function f12Listener(event) {
          if (event.keyCode === 123) {
            window.removeEventListener('keydown', f12Listener);
            resolve();
          }
        });
        const event = new Event('keydown');
        event.keyCode = 123; // F12 키의 keyCode는 123입니다.
        window.dispatchEvent(event);
      });
    }

    // 크롬 개발자 도구의 Network 탭에서 요청 정보 가져오기
    function getNetworkRequests() {
      const requests = [];

      // 모든 네트워크 요청 정보 가져오기
      const entries = window.performance.getEntriesByType('resource');

      // 각 요청 정보를 객체로 변환하여 배열에 추가
      entries.forEach((entry) => {
        const request = {
          url: entry.name,
          method: entry.initiatorType,
          status: entry.decodedBodySize,
          startTime: entry.startTime,
          endTime: entry.responseEnd,
        };
        requests.push(request);
      });

      return requests;
    }

    // 예제 실행 함수
    async function runExample() {
      await openDevTools();
      const networkRequests = getNetworkRequests();
      console.log(networkRequests);
    }

    // 예제 실행
    runExample();

    
    /**
     * omnibug 탭 열어서 글자 복사
     */
    // const copiedData = await driver.findElement(By.id('')).getText(); // 적절한 테이블의 id 선택자를 사용해주세요.

    // // exceljs 라이브러리를 사용하여 엑셀 파일 열기
    // const workbook = new ExcelJS.Workbook();
    // await workbook.xlsx.readFile('./address.xlsx'); // 적절한 엑셀 파일의 경로로 변경해주세요.

    // // 특정 시트 선택
    // const worksheet = workbook.getWorksheet('Sheet1'); // 적절한 시트 이름으로 변경해주세요.

    // // 엑셀 파일에 데이터 붙여넣기
    // worksheet.getCell('A1').value = copiedData;

    // // VLOOKUP 함수 실행
    // worksheet.eachRow({ includeEmpty: false }, (row) => {
    //   const lookupValue = row.getCell('A').value; // VLOOKUP의 검색 대상이 되는 값
    //   const resultCell = row.getCell('B'); // VLOOKUP의 결과가 나타날 셀

    //   // VLOOKUP 함수 실행
    //   // 예시: VLOOKUP(검색 대상 값, 범위, 결과가 나타날 열의 인덱스, 정확한 매치 여부)
    //   resultCell.formula = `VLOOKUP(${lookupValue}, $D$1:$E$100, 2, FALSE)`; // 적절한 범위와 인덱스를 지정해주세요.
    // });

    // // 엑셀 파일 저장
    // await workbook.xlsx.writeFile('path/to/saved/excel-file.xlsx'); // 적절한 저장 경로로 변경해주세요.

    // 웹 브라우저 닫기
    // await driver.quit();
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
