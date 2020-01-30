# GOAL OF THIS SOFTWARE: print Bundle name & image URL info in Terminal, then download each image item into a png
## please install PYTHON3, CHROMEDRIVER, SELENIUM, REQUESTS, then proceed
### then enter in Terminal ```pip install -r setup.py```
#### NOW, you can run this script in Terminal with ```python3 scrape_mobs_ffa.py```
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
browser.get('http://shrines.rpgclassics.com/snes/som/enemiesf.shtml')


###
##
# internet lag timeout (error handling)
timeout = 30
try:
	# checking below for element on page, to test connection
	# <font face="Courier New" size="5" color="#FFFF00"><u><b>Enemies</b></u></font>
	WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, "//font[@face='Courier New']")))
except TimeoutException:
	print("This page takes too long to load-- try again?")
	browser.quit()
#
##
###


### scraping Bundle info; 2 metadata elements: name & image alt

# scraping bundle images
results = browser.find_elements_by_xpath('//img')
# parsing returned objects into desired items ('list comprehension')
mob_name = [x.get_attribute('src') for x in results]
image_URL = [x.get_attribute('src') for x in results]

### display scraping results in Terminal
print('Mobs of Final Fantasy Adventure (Squaresoft©1991):')
## zip() matches the scraped elements to each other
for mob_name, image_URL in zip(mob_name, image_URL):
	gif_name = image_URL.split('/')[-1]
#	test of variables
	print(mob_name + ": Let's use filename " + gif_name + " when we save this resource ==> " + image_URL + '\n')
### next step is to save each image to a local file
#	download image
	rawImgData = requests.get(image_URL, stream=True)
#	create a file & save (write) the raw (binary) image data (ergo 'wb')
	with open(gif_name, 'wb') as fd:
		for chunk in rawImgData.iter_content(chunk_size=1024):
			fd.write(chunk)
