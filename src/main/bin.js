#!/usr/bin/env node

'use strict'

var openLib = require('open')
var packageJson = require('../../package.json')
var geoexif = require('../../' + packageJson.main)
var cli = require('./lib/cli.js')(['map'])

if (!cli.target) {
  console.log('geoexif v' + packageJson.version)
  console.log('Usage: geoexif filename.jpg [map]')
} else {
  geoexif.getImageCoordinates(cli.target)
    .then(function(loc) {
      var commaSeparated = loc.join()
      var url = 'https://www.google.com/maps?q=' + commaSeparated

      console.log(commaSeparated)
      console.log(url)
      if (cli.map) {
        openLib(url)
      }
    })
    .catch(function(error) { console.log('Error!', error, error.stack ? error.stack : '') })
}
