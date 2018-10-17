import componentsConfig from './config';

Page({
    data: {
        list: componentsConfig
    },
    onLoad: function () {

    },
    onShow: function () {

    },
    onShareAppMessage: function (options) {
        // 设置菜单中的转发按钮触发转发事件时的转发内容
        var shareTitle = 'Wuli-ui 小程序ui库';
        var sharePath = "/pages/dashboard/index";
        var shareObj = {
            title: shareTitle, // 默认是小程序的名称(可以写slogan等)
            path: sharePath, // 默认是当前页面，必须是以‘/’开头的完整路径
            imgUrl: "cloud://wuli-ui-311667.7775-wuli-ui-311667/800.jpg", //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
            success: function (res) {
                // 转发成功之后的回调
                if (res.errMsg == 'shareAppMessage:ok') {
                    console.log(shareObj.imgUrl)
                }
            },
            fail: function (res) {
                // 转发失败之后的回调
                if (res.errMsg == 'shareAppMessage:fail cancel') {
                    // 用户取消转发
                } else if (res.errMsg == 'shareAppMessage:fail') {
                    // 转发失败，其中 detail message 为详细失败信息
                }
            }
        };
        // 来自页面内的按钮的转发
        if (options.from == 'button') {

        }
        // 返回shareObj
        return shareObj;
    }
})
