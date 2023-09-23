import unittest
from bs4 import BeautifulSoup
import requests
import re
from fee_scraper import extract_fees

class TestFeeScraper(unittest.TestCase):   

    def test_fee_extraction(self):
        url = "https://www.lancasterdeeds.com/recording-information/fee-schedule"
        fee_list = extract_fees(url)

        expected_fees = ['$49.00', '$37.50', '$58.75', '$18.50', '$2.00']

        self.assertEqual(fee_list, expected_fees)

if __name__ == "__main__":
    unittest.main()