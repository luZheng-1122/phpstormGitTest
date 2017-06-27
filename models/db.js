var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/WebTut', function () {
  console.log('mongodb connected')
})

module.exports = mongoose