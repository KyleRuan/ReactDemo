var assert = require('assert');

describe('注册',function(){
  describe('index',function() {
    it('should not return -1',function(){
      assert.equal(-1,[1,2,3].indexOf(4));
    });
  });
});
