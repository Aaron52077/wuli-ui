// var Wuli = require('../../compontents/index');

Page({
  data: {
    checked: false
  },

  onLoad() {
  },

  onShow() {
  },

  handleWuliSwitchChange(e) {
    this.setData({
      checked: e.checked
    });
  }
});
