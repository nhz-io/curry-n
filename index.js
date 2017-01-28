/* eslint-disable no-invalid-this, consistent-this */

'use strict'

module.exports = function curryN(n, fn) {
    return function curried(...args) {
        let missing = n
        let _this = this
        const length = args.length

        if (length >= missing) {
            return fn.apply(_this, args)
        }

        missing = missing - length

        return function curried(...partial) {
            const length = partial.length

            _this = _this || this

            if (length >= missing) {
                return fn.apply(_this, [...args, ...partial])
            }

            missing = missing - length
            args = [...args, ...partial]

            return curried
        }
    }
}

/* eslint-enable no-invalid-this, consistent-this */
