const https = require('https');

exports.requestHttpGet = function(urlPrex, urlPath, param) {
    if(param) {
        if(urlPath.endsWith("?")) {
            urlPath = urlPath + param;
        }
        else { 
            urlPath = urlPath + "?" + param;
        }

    }
    var options = {
        hostname: urlPrex,
        port: 443,
        path: urlPath,
        method: 'Get'
    };

  var req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
}