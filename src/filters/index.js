import Vue from 'vue';

const requireFilter = require.context('.', false, /\.js$/);

requireFilter.keys().forEach(fileName => {
  const filterConfig = requireFilter(fileName).default;
  let filterName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .replace(/index/, '');
  if (!filterName) {
    return false;
  }
  Vue.filter(filterName, filterConfig);
});
