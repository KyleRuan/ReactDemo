
var User = require('../Mongoose/User');
/*
*   注册是否成功的状态
* */
const SignupState = {
  success: 1 ,
  fail:-1
};

const LoginState = {
  success: 1 ,
  userNotSignup:-1,
  WrongPWD: -2
};


module.exports = function (app) {

  app.post('/api/signup',function (req,res) {
    var param = req.body;
      User.find({email:param.email},function (err, doc) {
      if (doc.length>0) {
        res.status(200);
        res.header({'Content-Type': 'application/json'});
        var info = new Object();
        info.code = SignupState.fail;
        info.message = "该邮箱已经被注册，请直接登录";
        info.path = '/';
        info.state = "login";
        res.end(JSON.stringify(info));
      } else {
        var user = new User();
        user.email = param.email;
        user.nickname = param.nickname;
        user.rememberPWD = true;
        user.password = param.password;
        user.save(function (err) {
          if (!err) {
            res.status(200);
            res.header({'Content-Type': 'application/json'});
            var info = new Object();
            info.code = SignupState.success;
            info.user = user;
            info.path = '/';
            info.message = "注册成功";
            res.end(JSON.stringify(info));
          } else {
            res.status(500);
            res.header({'Content-Type': 'application/json'});
            res.end(JSON.stringify({message:"未知失败"}));
          }
        });

      }
    });
  });


  app.post('/api/login',function (req ,res) {
    var param = req.body;
      User.find({email:param.email},function (err, doc) {
        var info = new Object();



        if (doc.length >0) {
            console.log(doc)
          if (doc[0].password == param.password) {
            // 是否记住密码
            info.code = LoginState.success;
            info.username = doc[0].nickname;
            info.path = '/';
            info.message = "登陆成功";
            res.status(200);
            res.end(JSON.stringify(info));
          } else {
            info.code = LoginState.WrongPWD;
            info.path = '/';
            info.message = "密码错误";
            res.status(200);
            res.end(JSON.stringify(info));
          }

           //如果是记住密码的话，需要发session过去，让下一次免登陆/
          // password:param.password
        } else  {
          // 该账户没有注册
          info.code = LoginState.userNotSignup;
          info.path = '/';
          info.message = "该用户没有被注册，请重试";
          res.status(200);
          res.end(JSON.stringify(info));
        }
      });
  });


};

