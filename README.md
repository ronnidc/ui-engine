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

## .env
- Be sure to have a `.env` file at the app root with `BASE_URL=yourBaseUrl` It's required for generating a proper build. (don't add it to GIT)

    - eg. `http://localhost:3000`
    - eg. `https://preview.semler.io/something`
    - eg. `https://production.world`

____
> For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
____


### Notes
- *(Removed empty directories: `/store`, `/plugins`, `/middleware`. Add later if needed)*



- Some directories in are hidden in the file explorer by `"files.exclude":` in vscode's workspace `settings.json`
