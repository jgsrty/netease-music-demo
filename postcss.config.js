module.exports = {
  plugins: {
    autoprefixer: {
      remove: false,
    },
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ["*"],
    },
  },
};
