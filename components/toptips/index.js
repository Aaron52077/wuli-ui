module.exports = {
    showWuliTopTips(content = '', options = {}) {
        let wuliTopTips = this.data.wuliTopTips || {};
        // 如果已经有一个计时器在了，就清理掉先
        if (wuliTopTips.timer) {
            clearTimeout(wuliTopTips.timer);
            wuliTopTips.timer = 0;
        }

        if (typeof options === 'number') {
            options = {
                duration: options
            };
        }

        // options参数默认参数扩展
        options = Object.assign({
            duration: 3000
        }, options);

        // 设置定时器，定时关闭topTips
        let timer = setTimeout(() => {
            this.setData({
                'wuliTopTips.show': false,
                'wuliTopTips.timer': 0
            });
        }, options.duration);

        // 展示出topTips
        this.setData({
            wuliTopTips: {
                show: true,
                content,
                options,
                timer
            }
        });
    }
};
