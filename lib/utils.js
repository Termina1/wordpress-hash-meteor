var crypto = Npm.require('crypto');

phpfunctions = {
    strlen: function(str) {
        return str.length;
    },

    strpos: function(string, find) {
        var pos = string.indexOf(find);
        return string.indexOf(find);
    },

    md5: function(string, raw) {
        var hash = crypto.createHash('md5');
        hash.update(string);
        if(raw)
            return hash.digest('binary');
        else
            return hash.digest('hex');
    },

    sixCharRandom: function() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 6; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },

    substr: function(string, start, count) {
        return string.substring(start, start + count);
    },

    ord: function(input) {
        var r = input.charCodeAt(0);
        return r;
    }
}