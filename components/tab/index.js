const { extractComponentId } = require('../common/helper');

var Tab = {
  _handleWuliTabChange(e) {
    const componentId = extractComponentId(e);
    const dataset = e.currentTarget.dataset;
    const selectedId = dataset.itemId;
    const data = { componentId, selectedId };

    
    if (this.handleWuliTabChange) {
      this.handleWuliTabChange(data);
    } else {
      console.warn('页面缺少 handleWuliTabChange 回调函数');
    }
  }
};

module.exports = Tab;
