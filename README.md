# UI Engine

> A Static Site Generator (SSG) for prototyping the UI & generate asset bundles for production.

## Developemnt

``` bash
# Install dependencies
$ npm install

# Serve with hot reload at localhost:3000
$ npm run dev
```

## Build and Deployment Setup 

``` bash

# Install dependencies
$ npm install

# Static Generated Deployment (Pre-rendered) to /dist/
$ npm run generate

```

The following files are to be included in production:

```js
dist/_nuxt/pages/other.scripts.prod.js // components on the page "other"
dist/_nuxt/pages/semler.scripts.prod.js // components on the page "semler"
dist/_nuxt/app.styles.prod.css // Global styles
dist/_nuxt/components.styles.prod.css // Component styles
```

## OR build for Server-Side Rendered Deployment (Universal SSR)

``` bash
$ npm run build-ssr
$ npm run start-ssr
```

____
## Documentation

> For detailed explanation: [Nuxt.js docs](https://nuxtjs.org).

____

## ToDo

- Setup Webpack to output a css-bundle and a js-bundle on `$ npm run build-prod` for the traditional server-side website in production. *Maybe it should work alongside with the `$ nuxt generate` script.* 

- The bundles should be named __*app.css*__ and __*app.js*__ and not ~~*main.js*~~ or ~~*main.css*~~.

____

### Notes
- *(Removed empty directories: `/store`, `/plugins`, `/middleware`, `assets`. Add later if needed)*

- Some directories in are hidden in the file explorer by `"files.exclude":` in vscode's workspace `settings.json` - including *[settings.json](.vscode/settings.json)*.

- Images should be stored in /src/assets/ where from [they will be compiled](https://nuxtjs.org/guide/assets#webpacked). (Should we rather have them in the component directories?) 

- bundle names [https://github.com/nuxt/nuxt.js/issues/4926](https://github.com/nuxt/nuxt.js/issues/4926)

- Have a look at [css modules in nuxt](https://dev.to/fridanyvall/css-modules-in-nuxt-js-815) Will it work with the backenders markup?

## Status:

> Continuous deploy preview of `master` [vue-engine.netlify.app](https://vue-engine.netlify.app/)

> Continuous build and deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/556a9a47-583d-4fec-b77e-2e3d27452050/deploy-status)](https://app.netlify.com/sites/vue-engine/deploys) 

____

> #### Put all your eggs in one basket, and then watch that basket carefully <br /> - *[Andrew Carnegie](https://en.wikipedia.org/wiki/Andrew_Carnegie)*
