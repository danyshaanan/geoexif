'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: ['src/geoexif', 'src/geoexif.js']
    },
    bump: {
      options: {
        files: ['package.json', 'npm-shrinkwrap.json'],
        commitFiles: ['package.json', 'npm-shrinkwrap.json'],
        tagName: '%VERSION%',
        push: false
      }
    },
    tape: {
      files: ['src/test.js']
    }
  })

  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks('grunt-tape')
  grunt.loadNpmTasks('grunt-bump')

  grunt.registerTask('default', ['eslint', 'tape'])
};
