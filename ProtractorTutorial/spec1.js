describe('Protractor bay steps', function() {

	// 1: testcase
	it('Open Anglar js website', function() {

		browser.get('https://angularjs.org');
		// browser,get() will hit url on the browserr
		// write your raw protractor codes

		// Each it block will be called as a spec

		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
			console.log("I am last step to execute")
		});

		

		console.log("I am last step to execute s")

	})

	// 2: testcase
	it('close brwoser', function() {
		// code to close browser
	})

})