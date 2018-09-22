import { Gallery } from '../../components/index'

Page({
    data: {
        urls: [
            'cloud://wuli-ui-311667.7775-wuli-ui-311667/200.jpg',
            'cloud://wuli-ui-311667.7775-wuli-ui-311667/300.jpg',
            'cloud://wuli-ui-311667.7775-wuli-ui-311667/400.jpg',
            'cloud://wuli-ui-311667.7775-wuli-ui-311667/600.jpg',
            'cloud://wuli-ui-311667.7775-wuli-ui-311667/800.jpg',
            'cloud://wuli-ui-311667.7775-wuli-ui-311667/900.jpg',
            'cloud://wuli-ui-311667.7775-wuli-ui-311667/1000.jpg',
            'cloud://wuli-ui-311667.7775-wuli-ui-311667/1200.jpg',
        ]
    },
    onLoad() { },
    showGallery(e) {
        const dataset = e.currentTarget.dataset
        const current = dataset.current
        const urls = this.data.urls

        Gallery.show({
            current: current,
            urls: urls,
            [`delete`](current, urls) {
                urls.splice(current, 1)
                this.setData({
                    urls: urls,
                })
                return !0
            },
            cancel: () => console.log('Close gallery')
        })
    },
    previewImage(e) {
        const dataset = e.currentTarget.dataset
        const current = dataset.current
        const urls = this.data.urls

        wx.previewImage({
            current: current,
            urls: urls
        })
    },
})