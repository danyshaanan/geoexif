'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: ['src/**']
    },
    tape: {
      files: ['src/test.js']
    }
  })

  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks('grunt-tape')

  grunt.registerTask('default', ['eslint', 'tape'])
};
