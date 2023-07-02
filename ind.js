const fs = require('fs'); 
const cheerio = require("cheerio");
const { type } = require('os');

urllist = ["https://tw.indeed.com/jobs?q=rpa&start=10&vjk=0a701644baf05445",
"https://tw.indeed.com/jobs?q=rpa&start=20&vjk=0a701644baf05445",
"https://tw.indeed.com/jobs?q=rpa&start=30&vjk=0a701644baf05445",
"https://tw.indeed.com/jobs?q=rpa&start=40&vjk=0a701644baf05445",
"https://tw.indeed.com/jobs?q=rpa&start=50&vjk=0a701644baf05445 ",
"https://tw.indeed.com/jobs?q=rpa&start=60&vjk=0a701644baf05445"]

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
  $(".jcs-JobTitle").each((i,e)=>{
    if (dataMap[i]== undefined){
      dataMap[i] = []
    }
    dataMap[i].push($(e).text())})
  $(".companyName").each((i,e)=>{
    if (dataMap[i]== undefined){
      dataMap[i] = []
    }
    dataMap[i].push($(e).text())})
  $(".").each((i,e)=>{
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


var $ = cheerio.load(rap)
count  = 0
$(".attribute_snippet").each((i,e)=>{
  console.log($(e).text())
  count ++ 
  console.log(count)
  })

//fs.writeFileSync("./inNeedScrap.json",JSON.stringify(dataMap,null,4))