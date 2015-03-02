Package.describe({
  summary: "What this does",
  version: "1.0.0",
  name: "termina1:wordpress-hash",
  git: "https://github.com/Termina1/wordpress-hash-meteor.git",
});

Package.onUse(function (api) {
  api.addFiles(['lib/hasher.js', 'lib/utils.js'], 'server');
  api.export('WordpressHash');
});

Package.onTest(function(api) {
  api.use(['termina1:wordpress-hash', 'tinytest']);
  api.addFiles('tests/hash.js', 'server');
});