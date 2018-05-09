import { Actionsheet, extend } from '../../components/index';

Page(extend({}, Actionsheet, {
    data: {
        baseActionsheet: {
            show: false,
            cancelText: '关闭 Action',
            closeOnClickOverlay: true,
            componentId: 'baseActionsheet',
            actions: [{
                name: '选项1',
                subname: '选项描述语1',
                className: 'action-class',
                loading: false
            }, {
                name: '选项2',
                subname: '选项描述语2',
                className: 'action-class',
                loading: false
            }, {
                name: '去分享',
                openType: 'share'
            }]
        }
    },

    onShareAppMessage() {
        return {
            title: 'wuli-ui',
            imageUrl: ''
        };
    },

    toggleActionsheet() {
        this.setData({
            'baseActionsheet.show': true
        });
    },

    handleWuliActionsheetCancel({ componentId }) {
        this.setData({
            [`${componentId}.show`]: false
        });
    },

    handleWuliActionsheetClick({ componentId, index }) {
        console.log(`item index ${index} clicked`);

        // 如果是分享按钮被点击, 不处理关闭
        if (index === 2) {
            return;
        }

        this.setData({
            [`${componentId}.actions[${index}].loading`]: true
        });

        setTimeout(() => {
            this.setData({
                [`${componentId}.show`]: false,
                [`${componentId}.actions[${index}].loading`]: false
            });
        }, 1500);
    }

}));
