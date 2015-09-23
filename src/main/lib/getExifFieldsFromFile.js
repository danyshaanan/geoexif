
'use strict'

// Promises:

function promiseExec(command, rejectValue, resolveValue) {
  return new Promise(function(resolve, reject) {
    require('child_process').exec(command, function(error, stdout, stderr) {
      if (error || stderr) {
        reject(rejectValue || error || stderr)
      } else {
        resolve(resolveValue || stdout)
      }
    })
  })
}

function checkBrewBinExists(name, installName) {
  return promiseExec('which ' + name, 'please install ' + (installName || name))
}

// Not Promises:

function parseCommand(file, fields) {
  return 'identify -format "' + fields.map(function(field) { return '%[EXIF:' + field + ']' }).join('|') + '" "' + file + '"'
}

// ////////////////////////////////////////////////

function getExifFieldsFromFile(fields, file) {
  return checkBrewBinExists('identify', 'imagemagick')
    .then(promiseExec.bind(null, parseCommand(file, fields)))
    .then(function(res) {
      var results = res.split('|')
      var obj = {}
      fields.forEach(function(field, index) {
        obj[field] = results[index].replace(/\n/, '')
      })
      return obj
    })
}

module.exports = getExifFieldsFromFile

//
