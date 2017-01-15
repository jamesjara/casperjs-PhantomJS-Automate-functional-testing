var Casper = require('casper').create();

casper.test.begin('testing jamesjara website', function(){
	casper.start('http://www.jamesjara.com');
	
	casper.wait(1000, function(){
	    this.fill('form#searchForm', {
	        'query' : 'javascript'
	    }, false);
	});
	
	casper.then(function(){
	    this.click("#submit-search");
	});
	
	casper.wait(1000, function(){
	    test.assertUrlMatch(this.getCurrentUrl(), 'http://www.jamesjara.com/#search/javascript');
	});
	
	casper.run(function(){
		test.done();
	});
});

// $ casperjs test casper-assertTitlte.js