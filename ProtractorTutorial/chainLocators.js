/**
 * 
 */


describe('Cahin locators demo', function() {

	// 1: testcase
	it('Open Anglar js website', function() {

		

		browser.get('http://juliemr.github.io/protractor-demo/');

		// repeater , chain locator, And css for identical tags

		element(by.model('first')).sendKeys(1);
    	element(by.model('second')).sendKeys(2);

		element(by.id('gobutton')).click();

		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text);
		})

	})



})