const constant = {
	DEFAULT_URL: "https://www.samsung.com/",
	CART: {
		LOGIN: {
			URL: "https://nid.naver.com/nidlogin.login",
			INPUT: {
				ID: 'input#id',
				PW: 'input#pw',
				SUBMIT_BTN: "button[type='submit']"
			}
		},
		WRITE: {
			INPUT: {
				TO_HTML_BTN: '.se2_to_html',
				TO_TEXT_BTN: '.se2_to_text',
				BODY: '.se2_input_syntax.se2_input_text',
				CHECKBOX_TAG_AUTO: '#tagAutoInsertChk'
			}
		}
	},
	clickByNation: function (nation) {
		let result;
		switch (nation) {
			case "au":
				result = 'input#subject';
				break;
			case "bd":
				result = 'textarea.se_editable.se_textarea';
				break;
			case "be":
				result = "textarea.textarea_tit";
				break;
		}
		return result;
	},
	getInputIdByType: function (blogType) {
		let result;
		switch (blogType) {
			case "naver":
				result = this.NAVER.LOGIN.INPUT.ID;
				break;
			case "naverPost":
				result = this.NAVER_POST.LOGIN.INPUT.ID;
				break;
			case "tistory":
				result = this.TISTORY.LOGIN.INPUT.ID;
				break;
		}
		return result;
	},
	getInputPwByType: function (blogType) {
		let result;
		switch (blogType) {
			case "naver":
				result = this.NAVER.LOGIN.INPUT.PW;
				break;
			case "naverPost":
				result = this.NAVER_POST.LOGIN.INPUT.PW;
				break;
			case "tistory":
				result = this.TISTORY.LOGIN.INPUT.PW;
				break;
		}
		return result
	},
	getLoginBtnByType: function (blogType) {
		let result;
		switch (blogType) {
			case "naver":
				result = this.NAVER.LOGIN.INPUT.SUBMIT_BTN;
				break;
			case "naverPost":
				result = this.NAVER_POST.LOGIN.INPUT.SUBMIT_BTN;
				break;
			case "tistory":
				result = this.TISTORY.LOGIN.INPUT.SUBMIT_BTN;
				break;
		}
		return result;
	}
};

module.exports = constant;
