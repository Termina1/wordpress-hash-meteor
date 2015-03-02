Tinytest.add('creates hash and validates it', function(test){
  var pass = 'ab1234';
  var hash = WordpressHash.hashPassword(pass);
  test.equal(WordpressHash.checkPassword(pass, hash), true);
});

Tinytest.add('verifies existing hash', function(test){
  test.equal(WordpressHash.checkPassword('abtest123456', '$P$Bf7qMa/bPJfyX1WYwjah.FYGcDgU59.'), true);
});