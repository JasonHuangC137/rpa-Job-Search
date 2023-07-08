from selenium import webdriver
from selenium.webdriver.common .by import By
from selenium.webdriver.chrome.options import Options
import time
from bs4 import BeautifulSoup
import time
import json
import requests
url = "https://www.104.com.tw/jobs/search/?ro=0&kwop=7&keyword=rpa&expansionType=area%2Cspec%2Ccom%2Cjob%2Cwf%2Cwktm&order=14&asc=0&page=6&mode=s&jobsource=2018indexpoc&langFlag=0&langStatus=0&recommendJob=1&hotJob=1"

with open('./indeed/104.html') as f:
    lines = f.read()

#parse the html file 
soup = BeautifulSoup(lines, 'html.parser')

a_tag = soup.find_all(".b-block__left")
b_tag =  soup.select("article",class_="b-block__left")
#print(a_tag.text())
v = 1
# for i in b_tag:
#     print(v)
#     #print (i.text)
#     v+=1
#     print (i.get("data-job-name"))
#     print (i.get("data-cust-name"))
# #ss= soup.find_all(class_ 
# =".b-tag--default") #id="js-job-content",

ss= soup.find_all(class_ ="b-block__left") #id="js-job-content",


scrape = []

for a in ss:
    i=a.text.split("\n")
    v+=1
    newobj = {
        "jobTitle":i[3],
        "company":i[8],
        "salary":i.pop(-2),
        "description": ",".join(i[13::]),

    }
    scrape.append(newobj)
    

    

 

# Serializing json




#json_object = json.dumps(scrape, indent=4,ensure_ascii=False).encode('utf8')
json_object = json.dumps(scrape, indent=4,ensure_ascii=False)
# Writing to sample.json
with open("./ScrapedData/104scrap.json", "w") as outfile:
    outfile.write(json_object)

