const getters = {
  userInfo: state => state.userInfo,
  token: state => state.token,
  isLogin: state => state.isLogin,
  header: state => state.header,
  showAudio: state => state.showAudio,
  currentMusic: state => state.currentMusic,
  showList: state => state.showList,
  playList: state => state.playList
};

export default getters;
