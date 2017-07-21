var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var superagent = require('superagent'); 

var targetUrl = 'https://www.oschina.net/';
app.get('/', function(req, res) {
	  request(targetUrl, function(error, response, body) {
	    if (!error && response.statusCode == 200) {
	      $ = cheerio.load(body);
	      $('span').each(function(){
	           console.log($(this).text());
	     });
	    }
	  });
	});

var server = app.listen(3000, function() {
  console.log('listening at 3000');
});
