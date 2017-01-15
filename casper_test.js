var Casper = require('casper').create();

casper.start('http://www.jamesjara.com', function(){
	this.echo(this.getTitle(), 'INFO');
});

casper.run();