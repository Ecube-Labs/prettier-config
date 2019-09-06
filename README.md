# Ecube Labs Prettier Config

## Usage
```bash
npm install @ecubelabs/prettier-config -D
```

### Back-end
```js
// .prettierrc.js
module.exports = {
  ...require('@ecubelabs/prettier-config/back-end'),
  ...require('@ecubelabs/prettier-config'),
};
```

### Front-end
```js
// .prettierrc.js
module.exports = {
  ...require('@ecubelabs/prettier-config/front-end'),
  ...require('@ecubelabs/prettier-config'),
};
```
