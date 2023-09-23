import unittest
from bs4 import BeautifulSoup
import requests
import re

class TestFeeScraper(unittest.TestCase):

    def setUp(self):
        url = "https://www.lancasterdeeds.com/recording-information/fee-schedule"
        page = requests.get(url)
        self.pagecontent = page.content
        self.soup = BeautifulSoup(self.pagecontent, 'html.parser')
        self.html = self.soup.find_all("div", class_="grid-4 the__content")

    def test_fee_extraction(self):
        dollar_amount = r'\$\d+\.\d{2}'
        fee_list = []

        for text in self.soup.find_all(text=True):
            fees = re.findall(dollar_amount, text)
            if fees:
                for fee in fees:
                    fee_list.append(fee)

        fee_list = fee_list[0:5]

        expected_fees = ['$49.00', '$37.50', '$58.75', '$18.50', '$2.00']

        self.assertEqual(fee_list, expected_fees)

if __name__ == "__main__":
    unittest.main()
