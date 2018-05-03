const WuliNoticeBar = {
    initWuliNoticeBarScroll(componentId) {
        this.wuliNoticeBarNode = this.wuliNoticeBarNode || {};
        this.wuliNoticeBarNode[`${componentId}`] = {
            width: undefined,
            wrapWidth: undefined,
            animation: null,
            resetAnimation: null
        };

        const currentComponent = this.wuliNoticeBarNode[`${componentId}`];
        wx.createSelectorQuery()
            .in(this)
            .select(`#${componentId}__content`)
            .boundingClientRect((rect) => {
                if (!rect || !rect.width) {
                    console.warn('页面缺少 noticebar 元素');
                    return;
                }

                currentComponent.width = rect.width;
                wx.createSelectorQuery().in(this)
                    .select(`#${componentId}__content-wrap`)
                    .boundingClientRect((rect) => {
                        if (!rect || !rect.width) {
                            return;
                        }

                        clearTimeout(this.data[componentId].setTimeoutId)

                        currentComponent.wrapWidth = rect.width;
                        if (currentComponent.wrapWidth < currentComponent.width) {
                            var mstime = currentComponent.width / 40 * 1000;
                            currentComponent.animation = wx.createAnimation({
                                duration: mstime,
                                timingFunction: 'linear'
                            });
                            currentComponent.resetAnimation = wx.createAnimation({
                                duration: 0,
                                timingFunction: 'linear'
                            });
                            this.scrollWuliNoticeBar(componentId, mstime);
                        }
                    })
                    .exec();
            })
            .exec();
    },

    scrollWuliNoticeBar(componentId, mstime) {
        const currentComponent = this.wuliNoticeBarNode[`${componentId}`];
        const resetAnimationData = currentComponent.resetAnimation.translateX(currentComponent.wrapWidth).step();
        this.setData({
            [`${componentId}.animationData`]: resetAnimationData.export()
        });
        const aninationData = currentComponent.animation.translateX(-mstime * 40 / 1000).step();
        setTimeout(() => {
            this.setData({
                [`${componentId}.animationData`]: aninationData.export()
            });
        }, 100);

        const setTimeoutId = setTimeout(() => {
            this.scrollWuliNoticeBar(componentId, mstime);
        }, mstime);
        this.setData({
            [`${componentId}.setTimeoutId`]: setTimeoutId
        })
    }
};

module.exports = WuliNoticeBar;
