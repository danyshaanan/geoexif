'use strict'

import test from 'ava'
import { main } from '../../package.json'

const getExifFieldsFromFile = require(`../../${main}`).getExifFieldsFromFile

const files = {
  aus: { GPSLatitude: '27/1, 28/1, 48/1', GPSLatitudeRef: 'S' },
  nyc: { GPSLatitude: '40/1, 45/1, 2433/100', GPSLatitudeRef: 'N' },
  tlv: { GPSLatitude: '32/1, 3/1, 1047/50', GPSLatitudeRef: 'N' }
}

Object.keys(files).forEach(key => {
  test(`getExifFieldsFromFile on ${key}.jpg`, async t => {
    t.same(files[key], await getExifFieldsFromFile(Object.keys(files[key]), `./images/${key}.jpg`))
  })
})
