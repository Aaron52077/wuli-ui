import { KeyBoard } from '../../components/index'

Page({
    data: {},
    onLoad() {},
    open() {
        KeyBoard.show({
            callback(value) {
                console.log(`输入的密码是：${value}`)
                return true
            },
        })
    },
    openWitdhDisorder() {
        KeyBoard.show({
            disorder: true,
            callback(value) {
                console.log(`输入的密码是：${value}`)
                return false
            },
        })
    },
    openWithPromiseCallback() {
        const http = (obj) => {
            return new Promise((resolve, reject) => {
                obj.success = (res) => resolve(res)
                obj.fail = (res) => reject(res)
                wx.request(obj)
            })
        }

        KeyBoard.show({
            callback(value) {
                console.log(`输入的密码是：${value}`)

                wx.showLoading({
                    title: '验证支付密码'
                })
                // 接口回调
                return http({
                        url: 'https://api.ejiadg.cn/api/fc/WxOpen/OnLogin',
                        method: 'POST',
                        data: {
                            username: 'admin',
                            password: value
                        }
                    })
                    .then(res => {
                        const data = `回调成功`

                        console.log(data)

                        wx.hideLoading()

                        wx.showToast({
                            title: data,
                            duration: 3000,
                        })

                        if (data.meta.code !== 0) {
                            return Promise.reject(data)
                        }
                    })
            },
        })
    },
    openPlain() {
        const fn = (title) => {
            wx.hideLoading()
            wx.showToast({
                title,
                duration: 3000,
            })
        }

        KeyBoard.show({
            className: 'className',
            titleText: '安全键盘',
            cancelText: '取消',
            inputText: '输入数字密码',
            showCancel: true,
            disorder: false,
            callback(value) {
                console.log(`输入的密码是：${value}`)

                wx.showLoading({
                    title: '验证支付密码'
                })

                return new Promise((resolve, reject) => {
                    setTimeout(() => Math.ceil(Math.random() * 10) >= 6 ? resolve(fn('密码正确')) : reject(fn('密码错误')), 3000)
                })
            },
        })
    },
    openTimed() {
        const keyboard = KeyBoard.show({
            callback(value) {
                console.log(`输入的密码是：${value}`)
                return true
            },
        })

        setTimeout(keyboard.hide, 3000)
    },
})