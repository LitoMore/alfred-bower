import test from 'ava'
import alfyTest from 'alfy-test'

test(async t => {
  const alfy = alfyTest()
  const result = (await alfy('moment'))[0]
  delete result['mods']
  delete result['arg']

  t.deepEqual(result, {
    title: 'moment',
    subtitle: 'Parse, validate, manipulate, and display dates in javascript.'
  })
})
