var fs = require('fs');
var path = require('path');

exports.getData = function(cb) {
    fs.readFile(path.join(__dirname, 'data/MOCK_DATA.json'), { encoding: 'utf8' }, function(err, data) {
        if (err) {
            // handler error!
            cb(err);
        } else {
            // use data!
            try {
                cb(null, JSON.parse(data));
            } catch (ex) {
                cb(ex);
            }
        }
    });
};
