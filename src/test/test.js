'use strict'

var test = require('tape')
var main = require(process.cwd() + '/package.json').main
var geoexif = require(process.cwd() + '/' + main)

var files = {
  haifa: [32.78458055555556, 34.98685555555556],
  nyc: [40.75675833333333, -73.98603888888888],
  paris: [48.86031666666667, 2.3617194444444447],
  tlv: [32.055816666666665, 34.78420277777778]
}

Object.keys(files).forEach(function(key) {
  test('geoexif.getImageCoordinates for image ' + key, function(t) {
    geoexif.getImageCoordinates('./src/test/images/' + key + '.jpg')
      .then(function(res) {
        t.equal(JSON.stringify(res), JSON.stringify(files[key]))
        t.end()
      })
  })
})

test('getExifFieldsFromFile on haifa.jpg', function(t) {
  var expected = {
    GPSLatitude: '32/1, 47/1, 449/100',
    GPSLatitudeRef: 'N'
  }

  geoexif.getExifFieldsFromFile(Object.keys(expected), './src/test/images/haifa.jpg')
    .then(function(res) {
      t.equal(JSON.stringify(res), JSON.stringify(expected))
      t.end()
    })
})
