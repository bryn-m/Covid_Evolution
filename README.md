# Covid_Evolution

# Abstract
The COVID-19 pandemic is unique because of the modern capabilities to collect and disseminate information and data at rapid rates. As a result, the public is interested in analyzing the data and doing their own research. Many of the visuals that have been created throughout the pandemic to represent this data have created confusion because they are misleading or too technical for the general public. Our project created a visual representation of the most prominent SARS-CoV-2 variants that both scientists and the public can understand in order to increase public acknowledgement of the virus’ rapid mutation rates.

# Get data and create maps
1. Clone the following github.
https://github.com/bryn-m/Covid_Evolution 
2. If you want to update the data, download data from:/
Variant data: https://www.ecdc.europa.eu/en/publications-data/data-virus-variants-covid-19-eueea /
Vaccination data: https://www.ecdc.europa.eu/en/publications-data/data-covid-19-vaccination-eu-eea /
Download the files as a csv./
Update the vaccinations.csv file and the variant_cases.csv file which are located in the Input_data folder. Make sure they remain in that folder./
3. Run the 1_load_data.ipynb notebook.
4. Run the 2_create_maps.ipynb notebook.
In order to run this script and update the maps, you will need to delete all of the files in png_files so that it is an empty directory./
Make sure to install plotly, kaleido, and the topojson github if you don’t have those. The commands you will need to install these packages are included in the first cell of the script, but are commented out in case you don’t need to install them./
5. Running steps 3 and 4 will populate the empty png_files folder with all the map images./
Replace the .png files in web-setup/front-end/public/png_files/ with the newly created .png files./
Check the files in png_files with the ones in “Check png files”. They should be the same./
6. Run the make_figure_2.ipynb notebook to make figure 2. 
Figure 2.png will be placed in the png_files folder./
Figure 3 was created by pulling the following png files and placing them together:
2021-22.png
2021-26.png
2021-49.png
2021-52.png
Run the 3_make_gif.ipynb notebook to compile all the image files into a gif which will be used on the website. It will save that gif at “/web-setup/front-end/public/map1.gif” if you would like to view the gif before creating the website. 

Use node.js to run the website
From the command line, change your directory to be in the directory /web-setup/front-end
Install node on your machine if you do not have it installed already
https://nodejs.dev/learn/how-to-install-nodejs 
From the command line, run npm install to install node.js on your machine. Make sure you are in the web-setup/front-end directory.
If you want to run a development server which will run on your local computer (preferred for reproducibility):
Run npm run serve in the command line
To view the website, copy http://localhost:8080 into your web browser
If you want to create a production build which will need a domain:
Run npm run build in the command line
Copy the “dist” folder into the destination directory where you want to store your website files while you run it
