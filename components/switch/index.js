var Switch = {
    _handleWuliSwitchChange(e) {
        var dataset = e.currentTarget.dataset;

        var checked = !dataset.checked;
        var loading = dataset.loading;
        var disabled = dataset.disabled;
        var componentId = dataset.componentId;

        if (loading || disabled) return;

        if (this.handleWuliSwitchChange) {
            this.handleWuliSwitchChange({
                checked,
                componentId
            });
        } else {
            console.warn('页面缺少 handleWuliSwitchChange 回调函数');
        }
    }
};

module.exports = Switch;
