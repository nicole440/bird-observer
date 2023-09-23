from bs4 import BeautifulSoup
import requests
import re

import time
delay_between_requests = 5
time.sleep(delay_between_requests)

def extract_fees():

    url = "https://www.lancasterdeeds.com/recording-information/fee-schedule"

    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'}
    page = requests.get(url, headers=headers)

    try:
        page = requests.get(url)
        page.raise_for_status()
        pagecontent = page.content

        soup = BeautifulSoup(pagecontent, 'html.parser')
        html = soup.find_all("div", class_="grid-4 the__content")

        print("HTML Content:\n")
        print(html)
    
        dollar_amount = r'\$\d+\.\d{2}'
        fee_list = []

        for text in soup.find_all(text=True):
            fees = re.findall(dollar_amount, text)
            if fees:
                for fee in fees:
                    fee_list.append(fee)

        fee_list = fee_list[0:5]

        print(fee_list)
        return fee_list

    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return []

if __name__ == "__main__":
    extract_fees()