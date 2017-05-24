const ghpages = require('gh-pages')

ghpages.publish('dist', function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Published')
  }
})
