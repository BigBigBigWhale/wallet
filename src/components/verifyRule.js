/**
 * Created by 15755 on 2018/5/28.
 */
//todo 优化目标封装成vue组件，达成实时监控,可以将规则里的验证函数构造一个原型对象
let rule = {
  required (val,mag){
    let res = {success:true,message:''};
    function validate(val, rule) {
      // if(!rule) {
      //   return true;
      // }
      if (Array.isArray(val)) {
        if (val.length !== 0) {
          var valid = true;
          for (var i = 0, l = val.length; i < l; i++) {
            valid = required(val[i]);
            if (!valid) {
              break
            }
          }
          return valid
        } else {
          return false
        }
      } else if (typeof val === 'number' || typeof val === 'function') {
        return true
      } else if (typeof val === 'boolean') {
        return val
      } else if (typeof val === 'string') {
        return val.length > 0
      } else if (val !== null && typeof val === 'object') {
        return Object.keys(val).length > 0
      } else if (val === null || val === undefined) {
        return false
      } else {
        return false
      }
    }
    if(!validate(val)){
      res.success = false;
      res.message = mag || '请输入内容';
    }
    return res;
  },
  phone (val,mag){
    let res = {success:true,message:''};
    let phone = /^1[3|4|5|8][0-9]\d{4,8}$/;
    if(!phone.test(val)){
        res.success = false;
        res.message = mag || '请输入正确的手机号';
    }
    return res;
  },
  identical (val,mag,item){
    let res = {success:true,message:''};
    if(val!=item){
      res.success = false;
      res.message = mag || '两次输入不一致';
    }
    return res;
  },
  maxLength (val,mag,length){
    let res = {success:true,message:''};
    function validate (val, max) {
      if (typeof val === 'string') {
        return (val === null || val === undefined || val==='') || isInteger.validate(max, 10) && val.length <= parseInt(max, 10)
      } else if (Array.isArray(val)) {
        return val.length <= parseInt(max, 10)
      } else {
        return false
      }
    }
    if(!validate(val,length)){
      res.success = false;
      res.message = mag || '请输入至多'+length+'位字符';
    }
    return res;
  },
  minLength (val,mag,length){
    let res = {success:true,message:''};
    function validate (val, min) {
      if (typeof val === 'string') {
        return (val === null || val === undefined || val==='') || isInteger.validate(min, 10) && val.length >= parseInt(min, 10)
      } else if (Array.isArray(val)) {
        return val.length >= parseInt(min, 10)
      } else {
        return false
      }
    }
    if(!validate(val,length)){
      res.success = false;
      res.message = mag || '请输入至少'+length+'位字符';
    }
    return res;
  },
};

let verify = function(data){
  if(!(data instanceof Array)){
      console.info('验证传入参数需要为数组,格式为[{name:"",rule:[{type:"",message:",opt:""}],value:""}]');
      return false;
  }
  let validate = {success:true,message:''};
  for(let i in data){
    let obj = {success:true,message:''};
    for(let j in data[i].rule){
        obj = rule[data[i].rule[j].type](data[i].value,data[i].rule[j].message,data[i].rule[j].opt);
        if(!obj.success){
          if(validate.success){
            validate.success = false;
            validate.message = obj.message;
          }

          break;
        }
    }
    validate[data[i].name] = obj;
  }
  return validate;

};
export default verify
