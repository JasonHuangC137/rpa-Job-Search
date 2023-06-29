const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const earthquake = function () {
  request({
    url: "https://tw.indeed.com/jobs?q=rpa&l=&from=searchOnHP&vjk=4def5fcf42660ec0", // 中央氣象局網頁
    method: "GET"
  }, function (error, response, body) {
    if (error || !body) {
      return;
    }
    else {
        //console.log(body)
         var $ = cheerio.load(body);
        var target = $("jobTitle-06cfc143ede5a8ef");
        console.log(target);
    }})}
earthquake()


