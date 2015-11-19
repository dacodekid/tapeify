# tapeify (0.0.2)

Yet another, but flexible [tape](https://github.com/substack/tape) runner. Just pass any module you would like to be loaded along with `tape` tests - like `babel` or `coffeescript`.

## install

`npm install --save-dev tape tapeify`

## CLI
`tapeify 'test/*.js' --compiler 'babel-register'`

You could load any number of modules by adding more `--compiler or -c` optional parameter.  These modules will be required before `tape` runs.

### CLI options

`-c` or `--compiler <requiring module name>`
> Pass any module that needs to be required for your tape test. For example, to test ES6 files, pass `babel-register` or `babel-core/register` module. You can pass the same argument multiple times to load more modules.

`tapeify 'test/*.js' --compiler 'babel-register'`  
`tapeify 'test/*.js' --compiler 'babel-register' -c 'another-babel-module'`
