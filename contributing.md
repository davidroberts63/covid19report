## How can others help?

First, please, distance yourself from others. Read over the OSDH's [fact or fiction](https://coronavirus.health.ok.gov/fact-or-fiction-%E2%80%93-covid-19) about COVID-19.

Next, you can help by checking the [executive order reports](https://coronavirus.health.ok.gov/executive-order-reports) in the afternoon. If you want to update the data here, I highly welcome it. Please do it as so:
1. Fork this repository.
1. Edit the [ok.json]() file by adding another JSON object with the updated numbers to that existing file. Use the sample below as a copy and paste to then update the numbers:
```
  {
    "date": "YYYY-MM-DD",
    "osdhReportUrl": "https://.....",
    "hospitalReportingCompliance": 0,
    "icuBeds": 0,
    "medicalSurgeryBeds": 0,
    "operatingRoomBeds": 0,
    "pediatricBeds": 0,
    "picuBeds": 0,
    "venilators": 0,
    "negativeFlowRooms": 0,
    "overallHospitalOccupancyStatus": 0,

    "facilityFaceShieldsAvailable": 0,
    "facility95MasksAvailable": 0,
    "facilitySurgicalMasksAvailable": 0,
    "facilityGownsAvailable": 0,
    "facilityGlovesAvailable": 0,

    "osdhFaceShieldsAvailable": 0,
    "osdh95MasksAvailable": 0,
    "osdhSurgicalMasksAvailable": 0,
    "osdhGownsAvailable": 0,
    "osdhGlovesAvailable": 0,

    "positivePatients": 0,
    "personsUnderInvestigationInHospital": 0,
    "personsInSelfQuarantine": 0,
    "covid19TestingSuppliesAvailability": 0
  }
```
3. Do **not** change the property names. Be sure to add a comma after the prior JSON object. This data is in a JSON array.
3. Submit your change as a pull request to the `master` branch. I'll review it and verify the data is correct and then I'll merge it.

You can do all the above steps from the Github website. Hopefully that makes it easier.

## Are there any graph charts?

Not at the moment, but if anyone has a recommendation on a website that that they are willing to run this data through, let me know and I'll happily link to it here.