# geoexif

[![Build Status](https://travis-ci.org/danyshaanan/geoexif.png)](https://travis-ci.org/danyshaanan/geoexif)
[![NPM Version](https://img.shields.io/npm/v/geoexif.svg?style=flat)](https://npmjs.org/package/geoexif)
[![License](http://img.shields.io/npm/l/geoexif.svg?style=flat)](LICENSE)
[![Dependency Status](https://david-dm.org/danyshaanan/geoexif.svg)](https://david-dm.org/danyshaanan/geoexif)
[![devDependency Status](https://david-dm.org/danyshaanan/geoexif/dev-status.svg)](https://david-dm.org/danyshaanan/geoexif#info=devDependencies)

A nodejs tool to extract geolocation data from images.

Requires a global installation of ImageMagick.

This is a work in progress.

### Installation
```bash
$ npm install -g geoexif
```

### Usage

```bash
$ geoexif paris.jpg
48.86031666666667,2.3617194444444447
https://www.google.com/maps?q=48.86031666666667,2.3617194444444447
```

ctrl/command-click the url to open it in your default browser, or just add `map` to the command:

```bash
$ geoexif paris.jpg map
48.86031666666667,2.3617194444444447
https://www.google.com/maps?q=48.86031666666667,2.3617194444444447
# will open the url in your default browser...
```

### Feedback
* [Open an issue](https://github.com/danyshaanan/geoexif/issues).
* Mail me at an address that can be found on my [NPM](https://www.npmjs.org/~danyshaanan)/[Github](https://github.com/danyshaanan)/[Personal](http://danyshaanan.com/) page.

### Contribution
* Check the `src/test/images` directory for example images with exif data.
* Run ESLint and Tape tests with `npm test`
* Open a pull request!
