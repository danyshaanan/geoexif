'use strict'

var ExifImage = require('exif').ExifImage

module.exports = {
  getImageCoordinates: getImageCoordinates,
  parseGoogleURL: parseGoogleURL
}


function getImageCoordinates(image, cb) {
  try {
    return new ExifImage({ image : image }, function (error, exifData) {
      if (error) {
        cb(error)
      } else {
        cb(null, processExif(exifData))
      }
    })
  } catch (error) {
    cb(error)
  }
}

function parseGoogleURL(coordinates) {
  return 'https://maps.google.com/?q=' + coordinates.join()
}

////////////////////////////////////////////////////////////////////////////////

function processExif(exifData) {
  var lat = amsToFloat(exifData.gps.GPSLatitude)
  var long = amsToFloat(exifData.gps.GPSLongitude)
  return [lat, long]
}

function amsToFloat(AMS) {
  return AMS.map(function(v, i) {
    return v / Math.pow(60, i)
  }).reduce(function(a, b) { return a + b })
}
