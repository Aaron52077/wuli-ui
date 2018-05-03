const Wuli = require('../../components/index');

Page(Object.assign({}, Wuli.Toast, {
    data: {},

    showToast() {
        this.showWuliToast('toast的内容');
    },

    showIconToast() {
        this.showWuliToast({
            title: 'toast的内容',
            icon: 'fail'
        });
    },

    showImageToast() {
        this.showWuliToast({
            title: 'toast的内容',
            image: ''
        });
    },

    showLoadingToast() {
        this.showWuliToast({
            title: 'toast的内容',
            icon: 'loading'
        });
    },

    showOnlyIcon() {
        this.showWuliToast({
            icon: 'fail'
        });
    },

    showLoading() {
        this.showWuliLoading('加载中');
    }
}));
