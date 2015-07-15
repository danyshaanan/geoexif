'use strict';

var test = require('tape')
var geoexif = require('./geoexif.js')

var data = {
  gps: {
     GPSLatitudeRef: 'S',
     GPSLatitude: [ 40, 45, 24.33 ],
     GPSLongitudeRef: 'W',
     GPSLongitude: [ 73, 59, 9.74 ]
   }
}

test('?', function(t) {
  var result = geoexif.processExif(data)
  t.equal(result[0], -40.75675833333333)
  t.equal(result[1], -73.98603888888888)
  t.end()
})
