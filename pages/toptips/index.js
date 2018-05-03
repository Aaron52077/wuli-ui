var Wuli = require('../../components/index');

Page(Object.assign({}, Wuli.TopTips, {
  data: {},

  showTopTips() {
    this.showWuliTopTips('toptips的内容');
  }
}));
