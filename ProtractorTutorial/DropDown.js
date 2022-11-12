/**
 * 
 */

  
describe('Protractor Element Demo',function() {  
	function Calc(a,b,c)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		
		element.all(by.tagName("option")).each(function(item)
		{
			item.getAttribute("value").then(function(values)
			{
			if(values==c){
				item.click();
			}
			})

		})
		element(by.id("gobutton")).click();
	}

	it('Locators',function() {

		/*browser.waitForAngularEnabled(false);
		browser.get("http://google.com");//non angular apps*/
		browser.get('http://juliemr.github.io/protractor-demo/');


		Calc(5,2,"SUBTRACTION");
		Calc(5,2,"ADDITION");
		Calc(5,2,"MULTIPLICATION");

		// TagName

		element.all(by.repeater("result in memory")).each(function(item)
		{
			item.element(by.css("td:nth-child(3)")).getText().then(function(text)
			{

			console.log(text);
			})
		})
 
	})


})