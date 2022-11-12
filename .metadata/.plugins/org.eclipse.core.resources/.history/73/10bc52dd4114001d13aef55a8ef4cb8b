/**
 * 
 */

 describe('Protractor Element Demo', function() {

	// 1: testcase
	it('Locators', function() {

		browser.waitForAngularEnabled(false);
		browser.get('http://google.com'); // non Angular Apps



		browser.waitForAngularEnabled(true);
		
		browser.get('http://juliemr.github.io/protractor-demo/');
    	element(by.model('first')).sendKeys(1);
    	element(by.model('second')).sendKeys(2);

		element(by.id('gobutton')).click();
		
		// Alaternative
		
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).
        	toEqual('5');
		

		expect(element(by.css("h2[class='ng-binding']")).getText()).
        	toBe("5");
		

    	expect(element(by.binding('latest')).getText()).
		toEqual('3'); // This is wrong!
		
	// print the result
	element(by.css("h2[class='ng-binding']")).getText().then(function(text){
		console.log(text);

		
	})
	})


})