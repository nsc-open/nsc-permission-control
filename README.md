# nsc-permission-control

> permission controlled react component

[![NPM](https://img.shields.io/npm/v/nsc-permission-control.svg)](https://www.npmjs.com/package/nsc-permission-control) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save nsc-permission-control
```

## Usage

The permission controlled component will be rendered only when `granted` covers `required`:

```jsx
import Permission from 'nsc-permission-control'

<Permission required="B001" granted="B001">
  <button>permission B001 controlled button</button>
</Permission>
```

You can customize what to be rendered when not granted:

```jsx
import Permission from 'nsc-permission-control'

<Permission required="B001" granted="B001" mode="advance">
  {hasPermission => <button disabled={!hasPermission}>permission btn</button>}
</Permission>
```



'*' is a special permission code, which allows to access all.

You can define client side permission code, like:

```js
import Permission, { defPermission } from 'nsc-permission-control'
defPermission('LOGIN', () => {
  return window.isLogined
})

<Permission required="LOGIN">
  <div>login protected content</div>
</Permission>
```

You can use `hasPermission` alone:

```js
import { hasPermission } from 'nsc-permission-control'
hasPermission(required, granted) // return true or false
```

## props

 - required
 - granted
 - mode

 `required` can be a string of permission code, or an array of permission code strings. So does `granted`.

## utils
 
  - hasPermission
  - defPermission

## License

MIT © [nsc-open](https://github.com/nsc-open)
