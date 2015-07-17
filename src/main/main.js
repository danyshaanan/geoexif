'use strict'

var getExifFieldsFromFile = require('./lib/getExifFieldsFromFile.js')

function directionMultiplier(dir) {
  return (dir === 'W' || dir === 'S') ? -1 : 1
}

function amsToFloat(AMS) {
  return AMS.split(',').reverse().reduce(function(prev, v) {
    var frac = v.split('/').map(function(s){ return parseInt(s, 10) })
    return prev / 60 + (frac[0] / frac[1])
  }, 0)
}

function cleanExifLocationData(data) {
  return [
    directionMultiplier(data.GPSLatitudeRef) * amsToFloat(data.GPSLatitude),
    directionMultiplier(data.GPSLongitudeRef) * amsToFloat(data.GPSLongitude)
  ]
}

//////////////////////////////////////////////////

function getImageCoordinates(imageFile) {
  return getExifFieldsFromFile(['GPSLatitude', 'GPSLatitudeRef', 'GPSLongitude', 'GPSLongitudeRef'], imageFile)
    .then(cleanExifLocationData)
}

module.exports = {
  getExifFieldsFromFile: getExifFieldsFromFile,
  getImageCoordinates: getImageCoordinates
}
