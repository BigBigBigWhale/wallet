/**
 * Created by 15755 on 2018/5/28.
 */
//todo 优化目标封装成vue组件，达成实时监控,可以将规则里的验证函数构造一个原型对象
let rule = {
  required (val,mag){
    let res = {success:true,message:''};
    if(!val||val==undefined||val==null){
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
  minLength (val,mag){
    let res = {success:true,message:''};
    let phone = /^1[3|4|5|8][0-9]\d{4,8}$/;
    if(!phone.test(val)){
      res.success = false;
      res.message = mag || '请输入正确的手机号';
    }
    return res;
  },
  maxLength (val,mag){
    let res = {success:true,message:''};
    let phone = /^1[3|4|5|8][0-9]\d{4,8}$/;
    if(!phone.test(val)){
      res.success = false;
      res.message = mag || '请输入正确的手机号';
    }
    return res;
  },
};

let verify = function(data){
  if(!(data instanceof Array)){
      console.info('验证传入参数需要为数组,格式为[{name:"",rule:[{type:"",message:"}],value:""}]');
      return false;
  }
  let validate = {success:true,message:''};
  for(let i in data){
    let obj = {success:true,message:''};
    for(let j in data[i].rule){
        obj = rule[data[i].rule[j].type](data[i].value,data[i].rule[j].message);
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
