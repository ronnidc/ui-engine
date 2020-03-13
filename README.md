# UI Engine

> A Static Site Generator (SSG) for prototyping the UI & generate asset bundles for production.

## Develop prototypes

Create prototypes fast with Nuxt vue-templates, SCSS, ES6 - using Hot Module Repacement. 

``` bash
# Install dependencies
$ npm install

# Serve with hot reload at localhost:3000
$ npm run dev
```

## Build for production

Genrate HTML output and build bundles for production

``` bash

# Install dependencies
$ npm run setup

# Build minified css & js bundles for production
$ npm run build-prod

# (Build css & js bundles without minification)
$ npm run build-dev

# Static Generated Prototype (Pre-rendered) to /dist/
$ npm run generate

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

*The point is - with this setup it doesn't matter if you run the npm scripts from the solution root or from the ui-engine directory. Both ways will do the exactely same thing.*

____

## Notes
- Some directories are hidden in the VS Code file explorer by `"files.exclude":` in `settings.json` - including *[settings.json](.vscode/settings.json)*.

- Have a look at [css modules in nuxt](https://dev.to/fridanyvall/css-modules-in-nuxt-js-815) Will it work with the backenders markup?

### Nuxt

> For detailed explanation: [Nuxt.js docs](https://nuxtjs.org).

### Status - ui-engine deployment

The ui-engine has an online preview with continuous deployment

> Continuous deploy preview of `master` [vue-engine.netlify.app](https://vue-engine.netlify.app/)

> Continuous build and deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/556a9a47-583d-4fec-b77e-2e3d27452050/deploy-status)](https://app.netlify.com/sites/vue-engine/deploys) 

____

> #### Put all your eggs in one basket, and then watch that basket carefully <br /> - *[Andrew Carnegie](https://en.wikipedia.org/wiki/Andrew_Carnegie)*