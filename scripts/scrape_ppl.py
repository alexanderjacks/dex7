# GOAL OF THIS SOFTWARE: print Bundle name & image URL info in Terminal, then download each image item into a png
## please install PYTHON3, CHROMEDRIVER, SELENIUM, REQUESTS, then proceed
### then enter in Terminal ```pip3 install -r setup.py```
#### NOW, you can run this script in Terminal with ```python3 scrape_bundles.py```
##### reuse & recycle & have a nice day

# headless browser
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
# raw file data tool
import requests

# make sure you also add CHROMEDRIVER to system path (I enclosed the program in this folder so your device might find it ;)
driver = webdriver.Chrome('./chromedriver')
# read here if your device has problems w CHROMEDRIVER PATH stuff:
# https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver

# surfs Incognito => scrapes better ^_^
option = webdriver.ChromeOptions()
option.add_argument("--incognito")

# launches Chrome
browser = webdriver.Chrome(executable_path='./chromedriver', options=option)

# surfs to this URL
browser.get("https://stardewvalleywiki.com/Maru")

###
##
# internet lag timeout (error handling)
timeout = 30
try:
	# checking for default element on page, to test connection (the only <li> with id='pt-createaccount' )
	WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, "//li[@id='pt-createaccount']")))
except TimeoutException:
	print("This page takes too long to load-- try again?")
	browser.quit()
#
##
###

### scraping Likes/Dislikes info, testing w only 2nd row from certain tables


#1 results = browser.find_elements_by_xpath("//table[@class='wikitable' and @id='roundedborder']")
#2 results = browser.find_elements_by_xpath("//a[@title]")
results = browser.find_elements_by_xpath("//a[@class='image']")

result_s = [x.get_attribute('href') for x in results]

for result_s in zip(result_s):
    print(result_s)
