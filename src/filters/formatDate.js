//格式化日期
const formatDate = (val, type = 0) => {
  let date = new Date(val)
  let year = date.getFullYear();
  let month = padDate(date.getMonth() + 1)
  let day = padDate(date.getDate())
  let hour = padDate(date.getHours())
  let minutes = padDate(date.getMinutes())
  let seconds = padDate(date.getSeconds())
  if (type == 1) {
    //只要年月日
    return `${year}-${month}-${day}`
  } else {
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
  }
};

const padDate = val => {
  val = val < 10 ? '0' + val : val;
  return val
}

export default formatDate;
