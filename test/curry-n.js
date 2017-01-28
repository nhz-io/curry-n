/* eslint-disable func-names, no-invalid-this, no-magic-numbers */
const test = require('ava')
const curryN = require('../index.js')

test('curried function', t => {
    const curried = curryN(3, (a, b, c) => {
        t.true(a)
        t.true(b)
        t.true(c)
    })

    curried(true, true, true)
    curried(true)(true, true)
    curried(true)(true)(true)
    curried(true, true)(true)
})

test('pass `this` to original function', t => {
    const curried = curryN(3, function(a, b, c) {
        t.true(a)
        t.true(b)
        t.true(c)
        t.is(this, 'pass')
    })

    curried.call('pass', true, true, true)
    curried.call('pass', true, true)(true)
    curried.call('pass', true)(true, true)
    curried.call('pass')(true)(true)(true)
    curried().call('pass', true, true, true)
    curried(true).call('pass', true, true)
    curried(true)(true).call('pass', true)
    curried(true, true).call('pass')(true)
})
/* eslint-enable func-names, no-invalid-this, no-magic-numbers */
