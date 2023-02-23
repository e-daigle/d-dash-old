# Lightweight TypeScript Next.js dashboard component library

This library is Next.js specific and uses CSS modules for styling. The components are meant to be simple and customizable.

**This library needs to be transpiled by your Next.js app in order to work**

&nbsp;

## Usage

1. [Prerequisites](#prerequisites)
1. [Install](#install)
1. [Themes](#themes)
1. [Container](#container)
1. [Navigation](#navigation)

## Prerequisites

This package can only be used in a `next >= 6.0` `typescript` project with it's usual dependencies.

## Install

```
npm i @emile-daigle/d-dash
```

**You will also need to modify Next's configuration file**

### Next.js >= 13.1.0

All features of `next-transpile-modules` are now natively built-in Next.js 13.1. You can use Next's transpilePackages option.

Add `@emile-daigle/d-dash` to the `transpilePackages` option inside of the `next.config.js` file. This will tell Next to automatically transpile and bundle the package.

```
//next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@emile-daigle/d-dash"]
}

module.exports = nextConfig
```

### Next.js < 13.1.0

You will need to install [`next-transpile-modules`](https://www.npmjs.com/package/next-transpile-modules)

```
npm i next-transpile-modules
```

Add the `next-transpile-modules` plugin to your `next.config.js` file with `@emile-daigle/d-dash` as part of the transpiled modules.

```
//next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require("next-transpile-modules")([
"@emile-daigle/d-dash"
])

module.exports = withTM(nextConfig)
```

## Themes

A theme is needed for the components to work. They use global CSS variables for multiple properties like color, font-weight and font-size.

Themes are provided inside of the `themes` folder. You need to [import a theme globaly in your app](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet).

```
//_app.tsx

import "@emile-daigle/d-dash/themes/default.css"

//normal _app.tsx code
```

### Create your own theme

You can create your own theme to customize your dashboard. Every CSS variables that the provided themes contain need to be declared inside your theme to avoid problems.

It is recommended to copy the contents of the default.css file, create your own css file and only change the needed variables like `--ddash-color-primary` or `--ddash-color-secondary`.

You could also copy your theme inside of the `global.css` file if you use it.

**Remember that whatever theme option you use, it needs to be imported inside of your app**
