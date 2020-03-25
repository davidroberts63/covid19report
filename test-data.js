var exitCode = 0;

var data = require('./ok.json');

if(!data) {
  process.exit(1);
}

console.log('File is properly formatted.');

var expectedNumberProperties = [
  'icuBeds',
  'medicalSurgeryBeds',
  'operatingRoomBeds',
  'pediatricBeds',
  'picuBeds',
  'ventilators',
  'negativeFlowRooms',
  'overallHospitalOccupancyStatus',
  'facilityFaceShieldsAvailable',
  'facility95MasksAvailable',
  'facilitySurgicalMasksAvailable',
  'facilityGownsAvailable',
  'facilityGlovesAvailable',
  'osdhFaceShieldsAvailable',
  'osdh95MasksAvailable',
  'osdhSurgicalMasksAvailable',
  'osdhGownsAvailable',
  'osdhGlovesAvailable',
  'positivePatients',
  'personsUnderInvestigationInHospital',
  'personsInSelfQuarantine',
  'covid19TestingSuppliesAvailability' 
];

data.forEach((item, index) => {  
  // Verifying a valid date.
  var date = new Date(item['date']);
  if(date == 'Invalid Date') {
    console.error(`Item at index ${index} has an invalid date value of '${item['date']}'`)
    exitCode = 2;
  }

  // Verifying URL is reachable.
  var https = require('https');
  var result = https.get(item['osdhReportUrl'])
  if(!result.hasOwnProperty('res') || result.res == null || !result.res.hasOwnProperty('statusCode') || result.res.statusCode != 200) {
    console.error(`Item at index ${index} has an invalid report url of '${item['osdhReportUrl']}'`)
    console.log(result);
    exitCode = 2;
  }

  // Checking all the numbers.
  if(!Number.isFinite(item['hospitalReportingCompliance'])) {
    console.error(`Item at index ${index} has an invalid reporting compliance value of '${item['hospitalReportingCompliance']}'`)
    exitCode = 2;
  }

  expectedNumberProperties.forEach(propertyName => {
    if(!Number.isInteger(item[propertyName])) {
      console.error(`Item at index ${index} has an invalid ${propertyName} value of '${item[propertyName]}'`)
      exitCode = 2;
    }
  });
});

console.log('Done verifying, check for errors above');
process.exit(exitCode);