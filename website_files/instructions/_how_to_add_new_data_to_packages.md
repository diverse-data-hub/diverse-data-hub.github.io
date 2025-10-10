# How to Add New Data to The Packages

## R Package

**Author:** Siddarth Subrahmanian  
**Date:** June 9, 2025

Within the [R package repository](https://github.com/diverse-data-hub/diversedata):

### 1. Place the Cleaned data in the `data-clean` folder

Add the cleaned data file (.csv ) to:
`data-clean/new_data.csv`

### 2. Update the Processing Script

Add the below code to the `data-clean/prepare-data.R` file.

`newData <- read_csv(“data-clean/new_data.csv”)`

add the new data set to the use_data function

`use_data(newData)`

``` use_data(``newData,``bcindigenousbiz,wildfire,globalrights,hcmst,womensmarchmadness,genderassessment,overwrite = TRUE) ```

### 3. Document the new data set

Add a new R script for documentation: **R/newData.R**

Use @format, @source, and @description.

### 4. Build & Check

Build the Documentation:

`devtools::document()`

Check and Build the Package:

`devtools::check()`

`devtools::build()`

### 5. Test Access Confirm that the data set can be loaded via:

`data("newData")`

## Python Package

**Author:** Stephanie Ta  
**Date:** July 14, 2025

Within the [Python package repository](https://github.com/diverse-data-hub/diversedata-py):

1. Place the data set's `.csv` file in the `src/diversedata/data/` directory.
2. Place the data set's description in a `.txt` file in the `src/diversedata/data_descriptions/` directory.
3. Ensure both files have the same root filename (i.e., the part before the file extension). This name will be used to load the dataset and display its description when using the package.