const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const { randomBytes } = require("crypto");

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

    main()

function jobPaser(jobData){
  console.log("Start Cheerio")
  var $ = cheerio.load(jobData)
  $(".card-title").each((i,e)=>{
    if (dataMap[i]== undefined){
      dataMap[i] = []
    }
    dataMap[i].push($(e).text())})
  $(".job_item_company").each((i,e)=>{
    if (dataMap[i]== undefined){
      dataMap[i] = []
    }
    dataMap[i].push($(e).text())})
  $(".job_item_detail_salary").each((i,e)=>{
    if (dataMap[i]== undefined){
      dataMap[i] = []
    }
    dataMap[i].push($(e).text())})
  $(".card-text").each((i,e)=>{
    if (dataMap[i]== undefined){
      dataMap[i] = []
    }
    dataMap[i].push($(e).text())})
}
jobPaser(rap)
fs.writeFileSync("./rpaScrap.json",JSON.stringify(dataMap,null,4))



