# Oklahoma COVID 19 Inventory Reports
# UNOFFICIAL DATA

**IMORTANT**
This data is entered **manually**, by hand from community members. Do **NOT** under **ANY** circumstances rely on this information for anything health related. It is to help inform the general community only of what hospitals are experincing from an inventory standpoint. It is **NOT** official in any manner whatsoever and **NOT** intended to be regarded as such.

## Did you read the warning above?
Okay good. In that case, since you know that and consider this data for viewing only and not decision making we can continue.

# What is this?

This is the daily data from the Oklahoma State Department of Health ("OSDH") concerning the 'critical data'; as stated in Governor J. Kevin Stitt's executive order [2020-07 (fourth ammended)](https://www.sos.ok.gov/documents/executive/1919.pdf) on the 24th of March 2020.

The OSDH publishes the [executive order reports](https://coronavirus.health.ok.gov/executive-order-reports) in PDF documents. This repository is a **manual** entry of that data into JSON format for machine consumption.

## Where is the data?

[Raw data link](https://raw.githubusercontent.com/davidroberts63/covid19report/master/ok.json)

The data is in the [ok.json](ok.json) data file inside this repository. I named it that in the extreme low chance that other state's equivalent information could be incorporated into this repository. But I doubt that will happen.

The data is supposed to be submitted to OSDH by noon every day. Then OSDH is then to aggregate that data and provide it to the Governor by 3:00 p.m.

The data here will get updated sometime after that. Depending on when OSDH publishes it online and when I, or other community members notice it and update the data here.

## How is the data formatted?

The data is in a JSON array of objects. Each property corresponds to an equivalent line item in the OSDH [executive order reports](https://coronavirus.health.ok.gov/executive-order-reports).

There is some additional data with the numbers in the EO:
* Date of the report
* URL to the report the data came from

## What are the reports

#### EO COVID-19 Report

That report is where the data in this repository is manually entered from. You can see the first one for [24th of March](https://coronavirus.health.ok.gov/sites/g/files/gmc786/f/eo_-_covid-19_report_-_3-24-20.pdf).

#### Strategic National Stockpile Inventory

I'm not intending to put the data in that report into a data file here. As it is a breakdown of the above. If you need the breakdown of size of gloves, gowns, etc I direct you to OSDH directly. The link for the [executive order reports](https://coronavirus.health.ok.gov/executive-order-reports) has it at least at this time.

## How can others help?

Read the [contributing](contributing.md) document in this repository.