Component({
    externalClasses: ['wuli-class', 'wuli-class-content'],
    relations: {
        '../collapse/index': {
            type: 'parent',
            linked: function (target) {
                const options = {
                    accordion: target.data.accordion
                }
                if (target.data.name === this.data.name) {
                    options.showContent = 'wuli-collapse__item--show';
                }
                this.setData(options);
            }
        }
    },
    properties: {
        title: String,
        name: String
    },
    data: {
        showContent: '',
        accordion: false
    },
    options: {
        multipleSlots: true
    },
    methods: {
        wuliTrigger(e) {
            const data = this.data;
            if (data.accordion) {
                this.triggerEvent('collapse', {name: data.name}, {composed: true, bubbles: true});
            } else {
                this.setData({
                    showContent: data.showContent ? '' : 'wuli-collapse__item--show'
                });
            }
        },
    }
});

