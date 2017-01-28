<h1 align="center">curry-n</h1>

<p align="center">
  <a href="https://travis-ci.org/nhz-io/curry-n">
    <img src="https://img.shields.io/travis/nhz-io/curry-n.svg?style=flat"
         alt="Travis Build">
  </a>
  <a href="https://npmjs.org/package/curry-n">
    <img src="https://img.shields.io/npm/v/curry-n.svg?style=flat"
         alt="NPM Version">
  </a>

  <a href="https://www.bithound.io/github/nhz-io/curry-n">
    <img src="https://img.shields.io/bithound/code/github/nhz-io/curry-n.svg?style=flat"
         alt="Bithound Status">
  </a>

  <a href="https://github.com/nhz-io/curry-n/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/nhz-io/curry-n.svg?style=flat"
         alt="License">
  </a>
</p>
<p align="center">
    <h3 align="center">Curry a function with specified arity</h3>
</p>

## Install
```bash
npm i -S curry-n
```

## Usage
```javascript
const curryN = require('curry-n')

const curried = curryN(3, function(first, ...args) {
    console.log(this, ...args)    
})

curried(1, 2, 3)
curried(1)(2)(3)

curried(1).apply('some this arg', 2)(3)
```

## Dev

```sh
git clone https://github.com/nhz-io/curry-n
cd curry-n
npm i
npm start
```

### Coverage
```sh
npm run coverage
npm run report
```

## License

### [MIT](LICENSE)
