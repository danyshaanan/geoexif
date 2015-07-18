'use strict'

var test = require('tape')
var main = require(process.cwd() + '/package.json').main
var geoexif = require(process.cwd() + '/' + main)

var files = {
  aus: { lat: -27.479999999999997, lon: 153.00416666666666 },
  nyc: { lat: 40.75675833333333, lon: -73.98603888888888 },
  tlv: { lat: 32.055816666666665, lon: 34.78420277777778 }
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

test('getExifFieldsFromFile on tlv.jpg', function(t) {
  var expected = {
    GPSLatitude: '32/1, 3/1, 1047/50',
    GPSLatitudeRef: 'N'
  }

  geoexif.getExifFieldsFromFile(Object.keys(expected), './src/test/images/tlv.jpg')
    .then(function(res) {
      t.equal(JSON.stringify(res), JSON.stringify(expected))
      t.end()
    })
})
