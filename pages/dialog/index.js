const Wuli = require('../../components/index');

Page(Object.assign({}, Wuli.Dialog, {
    toggleBaseDialog() {
      this.showWuliDialog({
        title: '弹窗',
        content: '这是一个模态弹窗\n换行',
        showCancel: true
      }).then(() => {
        console.log('=== dialog ===', 'type: confirm');
      }).catch(() => {
        console.log('=== dialog ===', 'type: cancel');
      });
    },
  
    toggleWithoutTitleDialog() {
      this.showWuliDialog({
        content: '这是一个模态弹窗'
      }).then(() => {
        console.log('=== dialog without title ===', 'type: confirm');
      });
    },
  
    toggleButtonDialog() {
      this.showWuliDialog({
        title: '弹窗',
        content: '这是一个模态弹窗',
        buttons: [{
          text: '现金支付',
          color: 'red',
          type: 'cash'
        }, {
          text: '微信支付',
          color: '#3CC51F',
          type: 'wechat'
        }, {
          text: '取消',
          type: 'cancel'
        }]
      }).then(({ type }) => {
        console.log('=== dialog with custom buttons ===', `type: ${type}`);
      });
    },
  
    toggleVerticalDialog() {
      this.showWuliDialog({
        title: '弹窗',
        content: '这是一个模态弹窗',
        buttonsShowVertical: true,
        buttons: [{
          text: '现金支付',
          color: 'red',
          type: 'cash'
        }, {
          text: '微信支付',
          color: '#3CC51F',
          type: 'wechat'
        }, {
          text: '取消',
          type: 'cancel'
        }]
      }).then(({ type }) => {
        console.log('=== dialog with vertical buttons ===', `type: ${type}`);
      });
    }
  }));
