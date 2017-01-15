var Casper = require('casper').create();

casper.test.begin('testing jamesjara website', function(){
	casper.start('http://www.jamesjara.com');
	
	casper.then(function(){
		test.assertTitle('James Jara', 'jamesjara website has the right title');
	});
	
	casper.run(function(){
		test.done();
	});
});

// $ casperjs test casper-assertTitlte.js