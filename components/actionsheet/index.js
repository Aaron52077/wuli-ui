const { extractComponentId } = require('../common/helper');

module.exports = {
    _handleWuliActionsheetMaskClick({ currentTarget = {} }) {
        const dataset = currentTarget.dataset || {};
        const { componentId, closeOnClickOverlay } = dataset;
        // 判断是否在点击背景时需要关闭弹层
        if (!closeOnClickOverlay) {
            return;
        }
        resolveCancelClick.call(this, { componentId });
    },

    _handleWuliActionsheetCancelBtnClick(e) {
        const componentId = extractComponentId(e);

        resolveCancelClick.call(this, { componentId });
    },

    _handleWuliActionsheetBtnClick({ currentTarget = {} }) {
        const dataset = currentTarget.dataset || {};
        const { componentId, index } = dataset;

        if (this.handleWuliActionsheetClick) {
            this.handleWuliActionsheetClick({ componentId, index });
        } else {
            console.warn('页面缺少 handleWuliActionsheetClick 回调函数');
        }
    }
};

function resolveCancelClick({ componentId }) {
    if (this.handleWuliActionsheetCancel) {
        this.handleWuliActionsheetCancel({ componentId });
    } else {
        console.warn('页面缺少 handleWuliActionsheetCancel 回调函数');
    }
}
