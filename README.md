geoexif
=======

A nodejs tool to extract and manipulate geolocation data from images.

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
# will opem the url in your default browser...
```

#### TODOs

* Check that negative coordinates work correctly
* Use Google api to extract location name
* Enable running on multiple files - parse a kml file to represent a map with all locations, or html with links
