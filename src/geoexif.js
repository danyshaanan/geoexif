'use strict'

var ExifImage = require('exif').ExifImage

module.exports = {
  getImageCoordinates: getImageCoordinates,
  parseGoogleURL: parseGoogleURL,
  processExif: processExif
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

  if (exifData.gps.GPSLongitudeRef === 'W') {
    long *= -1
  }
  if (exifData.gps.GPSLatitudeRef === 'S') {
    lat *= -1
  }

  return [lat, long]
}

function amsToFloat(AMS) {
  return AMS.map(function(v, i) {
    return v / Math.pow(60, i)
  }).reduce(function(a, b) { return a + b })
}
