import { Switch } from '../../components/index';

Page(Object.assign({}, Switch, {
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
}));
