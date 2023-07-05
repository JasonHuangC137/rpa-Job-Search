// this file is for testing purposes, to see the results of the parsed results, without calling the html results.
const request = require('request');
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
// var data=() =>{fs.readFile("./rpa.html", 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   const htmlContent = data;
//   return htmlContent.toString()
// });
// }
// rap = fs.readFileSync("./rpa.html")





// initialize the json object of rthe DB
dataMap =[]


// console.log($("card-title title_6"))
// //featuredArticles = $(".card-title ").text()
// featuredArticles = $(".job_item_company ").text()
// //let postTitleWrapper = $(featuredArticles).find(".jtitle_6y")    
//   $(".job_item_company ").each((i,e)=>{
//   let row  = $(e).text()//.replace(/(\s+)/g, ' ');
//   console.log(`${i},${row}`);
// })



// this is the old Parser 
// function jobPaser(jobData){
//   var $ = cheerio.load(jobData)
//   $(".card-title").each((i,e)=>{
//     if (dataMap[i]== undefined){
//       dataMap[i] = []
//     }
//     dataMap[i].push($(e).text())})
//   $(".job_item_company").each((i,e)=>{
//     if (dataMap[i]== undefined){
//       dataMap[i] = []
//     }
//     dataMap[i].push($(e).text())})

//   $(".job_item_detail_salary").each((i,e)=>{
//     if (dataMap[i]== undefined){
//       dataMap[i] = []
//     }
//     dataMap[i].push($(e).text())})
//   $(".card-text").each((i,e)=>{
//     if (dataMap[i]== undefined){
//       dataMap[i] = []
//     }
//     dataMap[i].push($(e).text())})
// }



//jobPaser(rap)
// fs.writeFileSync("./rpaScrap.json",JSON.stringify(dataMap,null,4))


const list2 =[
"1.html",
"2.html",
"3.html",
"4.html",
"5.html",
"6.html",
"7.html"

]

const main = async function (page,url) {
  request({
    url: url  ,
    method: "GET"
  }, function (error, response, body) {
    if (error || !body) {
      console.log(error);
      return;
    }
    else {
      fs.writeFileSync("./indeed/"+page.toString()+".html",body)
    }})}

function jobPaser(jobData){
  console.log("Cheerio Engaged")
  var $ = cheerio.load(jobData)
  $(".slider_item ").each((i,e)=>{
    newItem= {}
    
    // if (dataMap[i]== undefined){
    //   dataMap[i] = []
    // }
    newItem["jobTitle"]=( $(e).find(".jcs-JobTitle").text())
    newItem["salary"]=( $(e).find(".attribute_snippet").text())
    newItem["company"]=($(e).find(".companyName").text())
    dataMap.push(newItem)
    })
    // fs.writeFileSync("./inNeedScrap.json",JSON.stringify(dataMap,null,4))
  }

list2.forEach(element => {
  //console.log(fs.readFileSync("./indeed/"+element))
  jobPaser(fs.readFileSync("./indeed/"+element))
  console.log(dataMap)
});
fs.writeFileSync("./inNeedScrap.json",JSON.stringify(dataMap,null,4))
