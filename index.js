#!/usr/bin/env node

var https = require('https')
var fs = require('fs')

function getImageData (json) {
  var images = json.images || json.album.images
  var name = json.images ? json.name : json.album.name

  var image = images.reduce((x, y) => {
    return x.height * x.width > y.height * y.width ? x : y
  })

  name = `${name}-${image.width}x${image.height}`

  return { name: name, url: image.url }
}

function downloadImage (imageUrl, imageName) {
  var outFile = imageName + '.jpg'
  var coverFile = fs.createWriteStream(outFile)
  console.log(`Downloading '${outFile}'`)
  https.get(imageUrl, (res) => {
    res.pipe(coverFile)
  })
}

function getJson (res) {
  var allData

  res.on('data', (data) => {
    if (!allData) allData = data
    else allData += data
  })

  res.on('end', () => {
    var json = JSON.parse(allData)
    var image = getImageData(json)
    downloadImage(image.url, image.name)
  })
}

// Check if the supplied string contains a validish Spotify IDs, meaning
// that it checks for something similar to track:6PVfRMTytzNlq9P1BP3Jl0
// This will allow usage with all Spotify URLs I'm aware of - play., open.
// and spotify: - but I recommend the latter because it won't contain any
// weird characters, hopefully.
function getApiUrl (str) {
  if (/(?:album|artist|track)s?[:/][A-Za-z0-9]{22}/.test(str)) {
    return str.replace(/^.*(artist|album|track)s?[:/]([A-Za-z0-9]{22})$/, (p0, p1, p2) => {
      return `https://api.spotify.com/v1/${p1}s/${p2}`
    })
  } else {
    return false
  }
}

function startFetching (url) {
  var apiUrl = getApiUrl(url)

  // Exit with error message if the URL is invalid
  if (!apiUrl) {
    console.log(`'${url}' is not a valid Spotify URL`)
    return
  }

  // Commence callback hell
  https.get(apiUrl, getJson)
}

module.exports = (args) => {
  // Exit with error message if no URLs are supplied
  if (args.length <= 0) {
    console.log('You need to supply a Spotify URL')
    return
  }

  var urls = typeof args === 'string' ? [args] : args

  urls.forEach(startFetching)
}
