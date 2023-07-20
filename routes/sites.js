const Site = require('./Site');
const webdriver = require('selenium-webdriver');
const {By} = webdriver; // 드라이버 빌드
const fs = require('fs');

/**
 * 구조화된 사이트 이용하여 sites 선언.
 * @type {Site[]}
 */
const SITES = [
	new Site("in", "https://www.samsung.com/", 'https://www.samsung.com/${index}',
		'in', true, false, true,
		{
			selector: '.post-title',
			manualFn: null
		}, '.post-content', 'ul.related_post > li > a'),

]

module.exports = SITES;
