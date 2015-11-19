#!/usr/bin/env node
'use strict';

const program = require('commander');

function append(val, def) {
  def.push(val);
  return def;
}

program
  .version('1.0.0')
  .usage('[options] <keywords>')
  .option('-c, --compiler [compilers]',
            'Require compilers [ie: babel-register / coffeescript]', append, [])
  .parse(process.argv);

process.argv = process.argv.slice(0,2).concat(program.args);

if(program.compiler.length) {
  program.compiler.forEach(compiler => {
    require(compiler);
  });
}
require(require.resolve('tape/bin/tape'));
