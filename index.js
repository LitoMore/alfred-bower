'use strict'
const alfy = require('alfy')

alfy.fetch('https://libraries.io/api/bower-search', {
  query: {
    q: alfy.input
  }
}).then(data => {
  const results = []
  data.forEach(item => {
    results.push({
      title: item.name,
      subtitle: item.description,
      arg: item.repository_url,
      mods: {
        cmd: {
          arg: item.repository_url,
          subtitle: `Star: ${item.stars}  Fork: ${item.forks}`
        }
      }
    })
  })
  if (results.length) alfy.output(results)
})
