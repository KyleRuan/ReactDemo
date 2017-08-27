

module.exports = function (app) {

  app.post('/api/signup',function (req,res) {
    console.log(req.body);
    
    // 检查用户名 是否已经注册了
    //{ email: '123@123.com',
    // password: '123',
    //   confirm: '123',
    //   nickname: '123',
    //   agreement: true }
    // 看是否记住密码 记住密码则返回token给浏览器
  });
};

