'use strict'

var getExifFieldsFromFile = require('./lib/getExifFieldsFromFile.js')

function directionMultiplier(dir) {
  return (dir === 'W' || dir === 'S') ? -1 : 1
}

function amsToFloat(AMS) {
  return !AMS ? 0 : AMS.split(',').map(function(v, i) {
    var frac = v.split('/').map(function(s){ return parseInt(s, 10) })
    return frac[0] / frac[1] / Math.pow(60, i)
  }).reduce(function(a, b) { return a + b })
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
