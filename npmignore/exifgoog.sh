#!/bin/sh
#
#
# NOTICE:
# I have implemented this in nodejs:
# repo: https://github.com/danyshaanan/geoexif
# npm package: https://npmjs.org/package/geoexif
#
#
#
# Script to open Google Maps on location of photo based on exif data. Requires exiftool, tested on OSX, should also run on Linux.
#
# TODOS:
# This is deprecated, see 'notice' message above. Thanks.
#
# 

if ! [[ `which exiftool` ]]; then
  echo 'exiftool is not installed! Exiting.'
  exit 1
fi

FILE=$1

if ! [ -f $FILE ]; then
  echo 'Input not a file! Exiting.'
  exit 1
fi

POS=`exiftool -c '%+.6f' -GPSPosition $FILE`
CLEANPOS=`echo $POS | sed 's/[a-zA-Z: ]*//;s/ //'`

if [[ $CLEANPOS == '' ]]; then
  echo 'No position found! Exiting.'
  exit 1
fi

URL="https://maps.google.com/?q=$CLEANPOS"

echo $URL

if [[ `which open` ]]; then #osx
  open $URL
elif [[ `which xdg-open` ]]; then #linux
  xdg-open $URL
fi
