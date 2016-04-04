'use strict'

import test from 'ava'
import { main } from '../../package.json'

const getImageCoordinates = require(`../../${main}`).getImageCoordinates

const files = {
  aus: { lat: -27.479999999999997, lon: 153.00416666666666 },
  nyc: { lat: 40.75675833333333, lon: -73.98603888888888 },
  tlv: { lat: 32.055816666666665, lon: 34.78420277777778 }
}

Object.keys(files).forEach(key => {
  test(`getImageCoordinates on ${key}.jpg`, async t => {
    t.same(files[key], await getImageCoordinates(`./images/${key}.jpg`))
  })
})
