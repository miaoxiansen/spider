var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var superagent = require('superagent'); 
var targetUrl = 'https://team.oschina.net/lyncon';

/*app.get('/', function(req, res) {
	  request(targetUrl, function(error, response, body) {
	    if (!error && response.statusCode == 200) {
	      $ = cheerio.load(body);
	      $('span').each(function() {
	      	console.log($(this).text());
	     });
	    }
	  });

	  console.log('正在解析URL中....');
	});

var server = app.listen(3000, function() {
  console.log('listening at 3000');
});*/

/*
 * 启动应用10秒后，开始自动解析URL，抓取数据.
 */
(function() {
	setTimeout(function() {
		request(targetUrl, function(error, response, body) {
	    if (!error && response.statusCode == 200) {
	      $ = cheerio.load(body);
	      
	      $('#my_team_tweet_list li').each(function() {
	      	console.log($(this).text());
	     });
	    }
	  });

	  console.log('正在解析URL中....');
	}, 10000);
})();
