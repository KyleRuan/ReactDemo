var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email:{type:String, unique:true},
  nickname:{type:String},
  password:{type:String},
  rememberPWD:{type:Boolean}
});

/*
*   这里直接导出了model
* */
module.exports = mongoose.model('User',UserSchema);