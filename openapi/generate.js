const $RefParser = require('json-schema-ref-parser');
const { NgOpenApiGen } = require('@fullstax/ng-openapi-gen');
const REF_PARSER = new $RefParser();

let OPENAPI_GEN_OPTIONS = {
  indexFile: true,
  serviceSuffix: 'ApiService',
  modelSuffix: 'ApiModel',
  silent: true,
  module: 'BooksApiModule',
  input: './openapi/books.oas3.json',
  output: './src/api/',
};

async function generate() {
  const openApi = await REF_PARSER.bundle(OPENAPI_GEN_OPTIONS.input, {
    dereference: { circular: false },
  });

  const ngOpenGen = new NgOpenApiGen(openApi, OPENAPI_GEN_OPTIONS);
  ngOpenGen.generate();
}

generate();
