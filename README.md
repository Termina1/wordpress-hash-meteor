# wordpress-hash

## Installation

```console
$ meteor add termina1:wordpress-hash
```

## Usage

```javascript
var password = 'testPassword';
var hash = WordpressHash.hashPassword(password);
var checked = WordpressHash.checkPassword(password, hash); //This will return true;
```

It is a thin wrapper around https://github.com/AlexAlbala/wordpress-hash-node