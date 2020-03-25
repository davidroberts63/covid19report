var data = require('./ok.json');

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
  }

  // Verifying URL is reachable.
  var https = require('https');
  var result = https.get(item['osdhReportUrl'])
  if(!result.hasOwnProperty('res') || result.res == null || !result.res.hasOwnProperty('statusCode') || result.res.statusCode != 200) {
    console.error(`Item at index ${index} has an invalid report url of '${item['osdhReportUrl']}'`)
    console.log(result);
  }

  // Checking all the numbers.
  if(!Number.isFinite(item['hospitalReportingCompliance'])) {
    console.error(`Item at index ${index} has an invalid reporting compliance value of '${item['hospitalReportingCompliance']}'`)
  }

  expectedNumberProperties.forEach(propertyName => {
    if(!Number.isInteger(item[propertyName])) {
      console.error(`Item at index ${index} has an invalid ${propertyName} value of '${item[propertyName]}'`)
    }
  });
});

console.log('Done verifying, check for errors above');