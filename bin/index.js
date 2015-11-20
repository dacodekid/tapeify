#!/usr/bin/env node
'use strict';

const arg = process.argv.slice(2);
for (let i = 0; i < arg.length; i++) {
  switch(arg[i]) {
    case '-c':
    case '--compiler':
      require(arg[++i]);
      break;
  }
}

require(require.resolve('tape/bin/tape'));
