/**
 * Handling child windows with Protractor
 * 
 * Move Or Switch to windown (Perent Child)
 * 
 * //moving the mouse into that textbox
//sendkeys
//keyboard arrow
//Keyboard enter
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

				

				browser.sleep(2000);
					


				
				
			});

		});


		



	})

	

})