'use strict'

function calcStringFraction(str) {
  var frac = str.split('/')
  return parseInt(frac[0], 10) / parseInt(frac[1], 10)
}

function exifCoordinateToDecimal(exifCoordinate) {
  var dms = exifCoordinate.split(',').map(calcStringFraction)
  return dms[0] + dms[1] / 60 + dms[2] / 3600
}

function cleanExifLocationData(data) {
  return {
    lat: (data.GPSLatitudeRef === 'S' ? -1 : 1) * exifCoordinateToDecimal(data.GPSLatitude),
    lon: (data.GPSLongitudeRef === 'W' ? -1 : 1) * exifCoordinateToDecimal(data.GPSLongitude)
  }
}

// -----------------------------------------------------------------------------

var getExifFieldsFromFile = require('./lib/getExifFieldsFromFile.js')

function getImageCoordinates(imageFile) {
  return getExifFieldsFromFile(['GPSLatitude', 'GPSLatitudeRef', 'GPSLongitude', 'GPSLongitudeRef'], imageFile)
    .then(cleanExifLocationData)
}

module.exports = {
  getExifFieldsFromFile: getExifFieldsFromFile,
  getImageCoordinates: getImageCoordinates
}
