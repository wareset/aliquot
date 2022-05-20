# aliquot
Makes a number a multiple of a divisor, including rounding

## Usage
```js
import aliquot from 'aliquot';
// or const aliquot = require('aliquot')

  // ROUND
  aliquot(0, 7)        // 0
  aliquot(3.4, 7)      // 0
  aliquot(3.5, 7)      // 7
  aliquot(3.6, 7)      // 7
  aliquot(7, 7)        // 7
  // Because Math.round(0.5) === 1, but Math.round(-0.5) === 0:
  aliquot(-0, 7)       // 0
  aliquot(-3.4, 7)     // 0
  aliquot(-3.5, 7)     // 0
  aliquot(-3.6, 7)     // -7
  aliquot(-7, 7)       // -7

  // FLOOR
  aliquot(0, 7, -1)    // 0
  aliquot(3.5, 7, -1)  // 0
  aliquot(7, 7, -1)    // 7
  aliquot(-7, 7, -1)   // -7

  // CEIL
  aliquot(0, 7, 1)     // 0
  aliquot(3.5, 7, 1)   // 7
  aliquot(7, 7, 1)     // 7
  aliquot(-7, 7, 1)    // -7

  // Just a fact:
  aliquot(3.5, 7, -2)  // -7
  aliquot(3.5, 7, 2)   // 14
```

## License
[MIT](LICENSE)
