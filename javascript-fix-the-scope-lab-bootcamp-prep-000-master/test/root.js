global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const js = path.resolve(__dirname, '..', 'index.js');
  const babelResult = babel.transformFileSync(js, {
    presets: ['es2015']
  });

  const html = path.resolve(__dirname, '..', 'index.html');

  jsdom.env(html, [], {
    src: babelResult.code,
    virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err, window) => {
    if (err) {
      return done(err);
    }

    global.window = window;

    return done();
  });
});
