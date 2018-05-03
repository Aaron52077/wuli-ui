module.exports = {
  showWuliToast(title, timeout) {
    const options = formatParameter(title, timeout);

    // 清除上一轮的计时器
    const { timer = 0 } = this.data.wuliToast || {};
    clearTimeout(timer);

    // 弹层设置~
    const wuliToast = {
      show: true,
      icon: options.icon,
      image: options.image,
      title: options.title
    };
    this.setData({
      wuliToast
    });

    // 传入的显示时长小于0，就认为需要一直显示
    if (timeout < 0) {
      return;
    }

    // 下一轮计时器
    const nextTimer = setTimeout(() => {
      this.clearWuliToast();
    }, timeout || 3000);

    this.setData({
      'wuliToast.timer': nextTimer
    });
  },

  // 清除所有 toast
  clearWuliToast() {
    const { timer = 0 } = this.data.wuliToast || {};
    clearTimeout(timer);

    this.setData({
      'wuliToast.show': false
    });
  },

  // 快捷方法，显示 loading
  showWuliLoading(title) {
    const options = formatParameter(title);

    this.showWuliToast({
      ...options,
      icon: 'loading'
    });
  }
};

function formatParameter(title, timeout = 0) {
  // 如果传入的 title 是对象，那么认为所有的配置属性都在这个对象中了
  if (typeof title === 'object') {
    return title;
  }

  return {
    title,
    timeout
  };
}
