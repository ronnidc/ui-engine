# Vue Engine / UI Engine

> A tool based on Vue.js & Nuxt for the purpose of implementing the UI, building static prototypes & generate asset bundles for production.

## Developemnt

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Build Setup 

``` bash

# install dependencies
$ npm install

# generate static output to /dist/
$ npm run generate

# OR build for node.js production and launch server
$ npm run build
$ npm run start
```

[![Netlify Status](https://api.netlify.com/api/v1/badges/556a9a47-583d-4fec-b77e-2e3d27452050/deploy-status)](https://app.netlify.com/sites/vue-engine/deploys) 

[vue-engine.netlify.app](https://vue-engine.netlify.app/)

### .env
- Be sure to have a `.env` file at the app root with `BASE_URL=yourBaseUrl` It's required for generating a proper build. (don't add it to GIT) *[.env](src/.env)*

    - eg. `BASE_URL=http://localhost:3000`
    - eg. `BASE_URL=https://preview.example.gl/something`
    - eg. `BASE_URL=https://production.world`

____
## Documentation

> For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

> `style-resources-loader` [good article about style-resources-loader](https://dev.to/lynnewritescode/my-scss-setup-within-a-vue-cli-3-project-4jan)

### Notes
- *(Removed empty directories: `/store`, `/plugins`, `/middleware`, `assets`. Add later if needed)*

- Some directories in are hidden in the file explorer by `"files.exclude":` in vscode's workspace `settings.json` - including *[settings.json](.vscode/settings.json)*.

- Images should be stored in /src/assets/ where from [they will be compiled](https://nuxtjs.org/guide/assets#webpacked). (Should we rather have them in the component directories?) 

- bundle names [https://github.com/nuxt/nuxt.js/issues/4926](https://github.com/nuxt/nuxt.js/issues/4926)

____

## ToDo

- Create some components to make a presentable and meaningful Nuxt POC.

- Setup Webpack to output a css-bundle and a js-bundle on `$ npm run build-prod` for the traditional server-side website in production. *Maybe it should work alongside with the `$ nuxt generate` script.* 

- The bundles should be named __*app.css*__ and __*app.js*__ and not ~~*main.js*~~ or ~~*main.css*~~.

- Setup a simple and seamless way to build for a local distribution and a deploy for production. The point is that no one should be in doubt about how to produce the different builds. And of course the builds should be lightning-fast.

- Have a look at [css modules in nuxt](https://dev.to/fridanyvall/css-modules-in-nuxt-js-815) Will it work with the backenders markup?
____

> #### Put all your eggs in one basket, and then watch that basket carefully <br /> - *[Andrew Carnegie](https://en.wikipedia.org/wiki/Andrew_Carnegie)*

## Status:

The following files is to be included in production:

```html
dist/_nuxt/layouts/default.js // Component js
dist/_nuxt/app.css // Global styles
dist/_nuxt/components.css // Component styles
```