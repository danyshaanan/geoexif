# geoexif - WIP

[![Build Status](https://travis-ci.org/danyshaanan/geoexif.png)](https://travis-ci.org/danyshaanan/geoexif)
[![NPM Version](https://img.shields.io/npm/v/geoexif.svg?style=flat)](https://npmjs.org/package/geoexif)
[![License](http://img.shields.io/npm/l/geoexif.svg?style=flat)](LICENSE)

A nodejs tool to extract and manipulate geolocation data from images.

This is a work in progress, currently on hold.

#### Installation
```bash
$ npm install -g geoexif
```

* * *
#### Usage

```bash
$ geoexif paris.jpg
[ 48.8615, 2.3316666666666666 ]
https://maps.google.com/?q=48.8615,2.3316666666666666
```

or:

```bash
$ geoexif paris.jpg map
[ 48.8615, 2.3316666666666666 ]
https://maps.google.com/?q=48.8615,2.3316666666666666
# will open the url in your default browser...
```

* * *
#### TODOs

* Use Google api to extract location name
* Enable running on multiple files - parse a kml file to represent a map with all locations, or html with links
* Handle images without exif better
