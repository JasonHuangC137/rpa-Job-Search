// this file is for testing purposes, to see the results of the parsed results, without calling the html results.

const fs = require('fs'); 
const cheerio = require("cheerio");
const { type } = require('os');
// const html = fs.readFile('./rpa.html', 'utf8', function(err, data){
//     if (err){
//         return err}
//     else{
//         return data.toString()
//     }    
// })
// console.log(html)

// Read the file
var data=() =>{fs.readFile("./rpa.html", 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const htmlContent = data;
  return htmlContent.toString()
});
}
rap = fs.readFileSync("./rpa.html")


var $  = cheerio.load(rap)


// initialize the json object of rthe DB
dataMap = {}


// console.log($("card-title title_6"))
//featuredArticles = $(".card-title ").text()
featuredArticles = $(".job_item_company ").text()
//let postTitleWrapper = $(featuredArticles).find(".jtitle_6y")    
  $(".job_item_company ").each((i,e)=>{
  let row  = $(e).text()//.replace(/(\s+)/g, ' ');
  console.log(`${i},${row}`);
})

var salary = "job_item_detail_salary ml-3 font-weight-style digit_6"

function jobPaser(jobData){
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
console.log("compelte!")