# Imbi OpenAPI Spec

The source for the OpenAPI spec for the Imbi API

## Development Environment

Setup the development environment using [`yarn`](https://yarnpkg.com/en/):

```sh
yarn install
```

## Tests

Running `yarn test` will build the template and validate it using the `swagger-cli` command.

## Building

Running `yarn build` will build the full OpenAPI YAML template and place it, along with redoc.standalone.js in the `build` directory.
