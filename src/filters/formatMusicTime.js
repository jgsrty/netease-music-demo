//格式化音乐时间
const formatMusicTime = val => {
  let minute = Math.floor(val / 60)
  let sec = val % 60
  let second
  sec > 10 ? second = parseInt(sec) : second = '0' + sec

  return ('0' + minute).slice(-2) + ':' + second
};

export default formatMusicTime;
