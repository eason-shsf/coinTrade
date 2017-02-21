var util = require('util'),
url = require('url'),
querystring = require('querystring'),
  https = require('https');
  
var regUrl = "https://ssl.mail.163.com/regall/unireg/call.do;jsessionid=%s?cmd=register.start&adapter=%s&reforward=common/reform&targetCmd=register.ctrlTop";
var cookie = 'a=b;c=d;',
mail = 'regUsername', pass = 'password', vcode='abcde';
var _regUrl = util.format(regUrl, 'id123455', 'param2');
 var post_option = url.parse(_regUrl);
 post_option.method = 'POST';
 post_option.port = 443;
 var post_data = querystring.stringify({
   'name' : mail,
   'uid' : mail+'@163.com',
   'confirmPassword' : pass,
   'password' : pass,
   'vcode' : vcode,
   'flow' : 'main',
   'from' : '163mail_right',
   'mobile' : '',
   });
 post_option.headers = {
   'Content-Type' : 'application/x-www-form-urlencoded',
   'Content-Length' : post_data.length,
   Cookie : cookie                        };
 var post_req = https.request(post_option, function(res){
  
   res.on('data', function(buffer){
     console.log(buffer.toString());
    });
 });
 post_req.write(post_data);
 post_req.end();