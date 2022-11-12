/**
 *  Handling synchronization with Protractor for not angular Site (Wait ..... )
 */

describe('Protractor Synchronization steps', function() {

	// 1: testcase
	it('Open NonAngular js website', function() {


		browser.waitForAngularEnabled(false);
		browser.get('https:/www.itgeared.com/demo/1506-ajax-loading.html');
		
		element(by.css("a[href*=loadAjax]")).click();

		// handling the Problem
		var EC = protractor.ExpectedConditions;

		browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000); // dies Methode ermöglicht zu wartem

		element(by.id("results")),getText().then(function(text){

			console.log(text)

		})

		

		

	})

})