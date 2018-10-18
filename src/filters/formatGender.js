//格式化性别
const formatGender = val => {
  if (val == 0) {
    return '保密'
  } else if (val == 1) {
    return '男'
  } else {
    return '女'
  }
};

export default formatGender;
