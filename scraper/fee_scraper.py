from bs4 import BeautifulSoup
import requests
import re

url = "https://www.lancasterdeeds.com/recording-information/fee-schedule"

def extract_fees(url):
    page = requests.get(url)
    pagecontent = page.content

    soup = BeautifulSoup(pagecontent, 'html.parser')
    html = soup.find_all("div", class_="grid-4 the__content")
    
    dollar_amount = r'\$\d+\.\d{2}'
    fee_list = []

    for text in soup.find_all(text=True):
        fees = re.findall(dollar_amount, text)
        if fees:
            for fee in fees:
                fee_list.append(fee)

    fee_list = fee_list[0:5]

    return fee_list

