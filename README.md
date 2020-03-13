# UI Engine

> A Static Site Generator (SSG) for prototyping the UI & generate asset bundles for production.

## Development

Build prototypes with Nuxt

``` bash
# Install dependencies
$ npm install

# Serve with hot reload at localhost:3000
$ npm run dev
```

## Build scripts for production

Genrate HTML output and build bundles for production

``` bash

# Install dependencies
$ npm run setup

# Build minified css & js bundles for production
$ npm run build-prod

# Static Generated Prototype (Pre-rendered) to /dist/
$ npm run generate

# (Build css & js bundles without minification)
$ npm run build-dev

```

The following files are to be included in production:

```js
dist/bundles/bundle.prod.js // Components scripts
dist/bundles/bundle.prod.css // Global & Component styles
```

### About that `package-scripts.json` file

The file `ui-engine/package-scripts.json` contains npm scripts which makes it possible to build the bundles inside the `ui-engine` directory from a parent directory (usually solution root `/`). 

For this to work, the `package-scripts.json` file should be moved outside of `ui-engine` and be renamed to `package.json`. 

If the parent directory already has a package.json file the script sections content from `ui-engine/package-scripts.json` can be copied to the existing `/package.json`.

____
### Nuxt

> For detailed explanation: [Nuxt.js docs](https://nuxtjs.org).

____

### Notes
- Some directories are hidden in the VS Code file explorer by `"files.exclude":` in `settings.json` - including *[settings.json](.vscode/settings.json)*.

- Have a look at [css modules in nuxt](https://dev.to/fridanyvall/css-modules-in-nuxt-js-815) Will it work with the backenders markup?

____

## Status - ui-engine deployment

The ui-engine has an online preview with continuous deployment

> Continuous deploy preview of `master` [vue-engine.netlify.app](https://vue-engine.netlify.app/)

> Continuous build and deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/556a9a47-583d-4fec-b77e-2e3d27452050/deploy-status)](https://app.netlify.com/sites/vue-engine/deploys) 

____

> #### Put all your eggs in one basket, and then watch that basket carefully <br /> - *[Andrew Carnegie](https://en.wikipedia.org/wiki/Andrew_Carnegie)*