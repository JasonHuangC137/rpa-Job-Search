const fs = require('fs'); 
const cheerio = require("cheerio");
const { type } = require('os');

urllist = []

dataMap = {}
const main = function () {
  request({
    url: "https://www.1111.com.tw/search/job?ks=rpa",  
    method: "GET"
  }, function (error, response, body) {
    if (error || !body) {
      console.log(error);
      return;
    }
    else {
      jobPaser(body)
      fs.writeFileSync("./rpaScrap.json",JSON.stringify(dataMap,null,4))
    }})}


rap = fs.readFileSync("./ind.html")


function jobPaser(jobData){
  console.log("Cheerio Engaged")
  var $ = cheerio.load(jobData)
  $(".slider_item ").each((i,e)=>{
    if (dataMap[i]== undefined){
      dataMap[i] = []
    }
    dataMap[i].push( $(e).find(".jcs-JobTitle").text())
    console.log(dataMap[i])
    dataMap[i].push( $(e).find(".attribute_snippet").text())
    dataMap[i].push( $(e).find(".companyName").text())
    console.log(dataMap[i])
    })
    fs.writeFileSync("./inNeedScrap.json",JSON.stringify(dataMap,null,4))
  // $(".jcs-JobTitle").each((i,e)=>{
  //   if (dataMap[i]== undefined){
  //     dataMap[i] = []
  //   }
  //   dataMap[i].push($(e).text())})
  // $(".companyName").each((i,e)=>{
  //   if (dataMap[i]== undefined){
  //     dataMap[i] = []
  //   }
  //   dataMap[i].push($(e).text())})
  // $(".").each((i,e)=>{
  //   if (dataMap[i]== undefined){
  //     dataMap[i] = []
  //   }
  //   dataMap[i].push($(e).text())})
  // $(".card-text").each((i,e)=>{
  //   if (dataMap[i]== undefined){
  //     dataMap[i] = []
  //   }
  //   dataMap[i].push($(e).text())})
}


// var $ = cheerio.load(rap)
// count  = 0
// $(".slider_item ").each((i,e)=>{
//   //console.log($(e).text())
//   console.log($(e).find(".jcs-JobTitle").text())
//   console.log($(e).find(".attribute_snippet").text())
//   console.log($(e).find(".companyName").text())
//   count ++ 
//   console.log(count)
//   })


jobPaser(rap)


