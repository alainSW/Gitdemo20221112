/**
 * Handling child windows with Protractor
 * 
 * Move Or Switch to windown (Perent Child)
 * 
 */


describe('Protractor bay steps', function() {

	// 1: testcase
	it('Open Posse js website', function() {

		

		browser.get('https://posse.com/'); //Diee Webseite functioniert nicht. Aber alle Code Informationenen sind richtig

		Element(by.model("userInputQuery")).senKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).senKeys("London")).perform();

		browser.actions().senKeys(protractor.Key.ARROW_DOWN).perform();

		browser.actions().senKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(5000);

			expect(element.all(by.css("div[ng-mouveover='onSearchResultOver(searchResultOver)']")).count()).toEqual(7);

			by.css("div[ng-mouveover='onSearchResultOver(searchResultOver)']").get(0).click();

			element(by.css("a[ng-href*='London/River Island']")).click().then(function(){

				browser.getTitle().then(function(title){
						console.log(title+ " title of the page before switching");

					})
				
				browser.getAllWindownHandles().then(function(handles){



					// Move to Child Windown
					browser.switchTo().windown(handles[1]);

					browser.getTitle().then(function(title){
						console.log(title+ " title of the page after switching");

						// code bzz. step hinzufüngen

						browser.close();

						// Move to Parent Page 
						browser.switchTo().windown(handles[0]);

					})


				})
				
			});

		});


		



	})

	

})