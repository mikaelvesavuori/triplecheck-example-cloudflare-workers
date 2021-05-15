# triplecheck-example-cloudflare-workers

## TripleCheck broker running on Cloudflare Workers and KV

This repo demonstrates a working, basic implementation of a [TripleCheck broker](https://github.com/mikaelvesavuori/triplecheck-broker) running on Cloudflare Workers with the database being Cloudflare KV.

Refer to the documentation on the [broker](https://github.com/mikaelvesavuori/triplecheck-broker) for how to call the API.

Technology choices are:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org)
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/get-started/guide) for easing deployment and packaging
- [Webpack](https://webpack.js.org) for bundling

## Pre-requisites

- A Cloudflare account
- [Wrangler CLI](https://developers.cloudflare.com/workers/get-started/guide) installed
- Run the `init.sh` script
- Set the bindings presented from the above script in `wrangler.toml`, then rename the file `wrangler dot toml` – the actual file is gitignored so you don't commit any secret values
- Set `zone_id` and `account_id` in `wrangler.toml`, these are easiest found in the web console
- Configure the `custom` block in `serverless.yml` so it uses your own values

## Installation

Run `npm install` or `yarn install`.

## Local development

Run `npm start` or `yarn start`.

## Deploy

Run `npm run deploy` or `yarn run deploy`.

## Teardown (remove stack)

There is currently no way of removing a function from the CLI tool – you will have to do this manually in the web console.
