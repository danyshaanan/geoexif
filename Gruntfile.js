'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: ['src/geoexif', 'src/geoexif.js']
    },
    tape: {
      files: ['src/test.js']
    }
  })

  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks('grunt-tape')

  grunt.registerTask('default', ['eslint', 'tape'])
};
