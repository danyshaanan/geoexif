"use strict";

var ExifImage = require('exif').ExifImage;
var rek = require('rekuire');





module.exports = {
    getImageCoordinates: getImageCoordinates
};


function getImageCoordinates(image, cb) {
  try {
    new ExifImage({ image : image }, function (error, exifData) {
      if (error) {
        cb(error);
      } else {
        cb(null, processExif(exifData));
      }
    });
  } catch (error) {
    cb(error);
  }
}


function processExif(exifData) {
  var lat = exifData.gps.GPSLatitude.map(function(v, i) {
    return v/Math.pow(60,i);
  }).reduce(function(a, b) { return a + b });

  var long = exifData.gps.GPSLongitude.map(function(v, i) {
    return v/Math.pow(60,i);
  }).reduce(function(a, b) { return a + b });

  return [lat, long];

}