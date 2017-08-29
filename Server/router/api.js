

var UserSchema = require('../Mongoose/User');

module.exports = function (app) {

  app.post('/api/signup',function (req,res) {
    console.log(req.body);
    var param = req.body;
    UserSchema.find({email:param.email},function (err, doc) {
      if (doc.length>0) {
      // 已经注册了
      } else {
        // 已经注册了
        var user = new UserSchema();
        user.email = param.email;
        user.nickname = param.nickname;
        user.rememberPWD = true;
        user.password = param.password;
        user.save(function (err) {
          if (!err) {
            res.status(200);
            res.header({'Content-Type': 'application/json'});
            res.end(JSON.stringify("注册成功"));
          }
        });

      }
    });
    // 检查用户名 是否已经注册了
    //{ email: '123@123.com',
    // password: '123',
    //   confirm: '123',
    //   nickname: '123',
    //   agreement: true }
    // 看是否记住密码 记住密码则返回token给浏览器
  });
};

