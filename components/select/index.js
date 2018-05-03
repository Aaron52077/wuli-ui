const { extractComponentId } = require('../common/helper');

function handle(e) {
    const componentId = extractComponentId(e);
    const value = e.detail.value;

    callback.call(this, componentId, value);
}

function callback(componentId, value) {
    const e = { componentId, value };


    if (this.handleWuliSelectChange) {
        this.handleWuliSelectChange(e);
    } else {
        console.warn('页面缺少 handleWuliSelectChange 回调函数');
    }
}

module.exports = {
    _handleWuliSelectChange(e) {
        handle.call(this, e);
    }
};
