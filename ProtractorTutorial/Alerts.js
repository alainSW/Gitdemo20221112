/**
 * Alerts
 * 
 */

 describe('Protractor  Alerts steps', function() {

	// 1: testcase
	it('Open NonAngula js website', function() {

		browser.waitForAngularEnabled(false);
		browser.get('https://qaclickacademy.com/practice.php');

		Element(by.id(confirmbtn)).click();

		// Alert OK
		browser.switchTo().alert().accept().then(function(){
			browser.sleep(2000);
		});


		// Alert Cancel
		//browser.switchTo().alert().cancel(); 

		// Alert dismmiss()
		//browser.switchTo().alert().dismmiss(); 


		

		

	})

	

})