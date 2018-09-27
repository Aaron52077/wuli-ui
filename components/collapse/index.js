Component({
    externalClasses: ['wuli-class'],
    relations: {
        '../collapse-item/index': {
            type: 'child'
        }
    },
    properties: {
        name: String,
        accordion: Boolean
    },
    methods: {
        wuliClick(e) {
            const params = e.detail;
            const allList = this.getRelationNodes('../collapse-item/index');
            allList.forEach((item) => {
                if (params.name === item.data.name) {
                    item.setData({
                        showContent: 'wuli-collapse__item--show'
                    });
                } else {
                    item.setData({
                        showContent: ''
                    });
                }
            });
        },
    }
});

