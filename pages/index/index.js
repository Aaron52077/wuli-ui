const app = getApp()

Page({
    data: {
        // 当前选择的导航字母
        selected: 0,
        // 选择字母视图滚动的位置id
        scrollIntoView: 'A',
        // 导航字母
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        index: 0,
        groupJson: [
            {
                groupName: 'A',
                users: [
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '前端开发工程师',
                        info: '这是一个无聊的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            },
            {
                groupName: 'B',
                users: [
                    {
                        avatar: '',
                        name: '博主',
                        role: '安卓开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            },
            {
                groupName: 'C',
                users: [
                    {
                        avatar: '',
                        name: '朝天玉',
                        role: '前端开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '安卓开发工程师',
                        info: '这是一个无聊的人'
                    }
                ]
            },
            {
                groupName: 'D',
                users: [
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '前端开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '安卓开发工程师',
                        info: '这是一个无聊的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '前端开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            },
            {
                groupName: 'E',
                users: [
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '前端开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            },
            {
                groupName: 'F',
                users: [
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '安卓开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '前端开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            },
            {
                groupName: 'J',
                users: [
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            },
            {
                groupName: 'M',
                users: [
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '安卓开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '安卓开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            },
            {
                groupName: 'S',
                users: [
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '安卓开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '安卓开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            },
            {
                groupName: 'W',
                users: [
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '安卓开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            },
            {
                groupName: 'Y',
                users: [
                    {
                        avatar: '',
                        name: '阿玉',
                        role: '前端开发工程师',
                        info: '这是一个有趣的人'
                    },
                    {
                        avatar: '',
                        name: '阿玉',
                        role: 'IOS开发工程师',
                        info: '这是一个有趣的人'
                    }
                ]
            }
        ]
    },
    onLoad: function(options) {
        const res = wx.getSystemInfoSync(),
            letters = this.data.letters;
        // 设备信息
        this.setData({
            windowHeight: res.windowHeight,
            windowWidth: res.windowWidth,
            pixelRatio: res.pixelRatio
        });
        // 第一个字母距离顶部高度，css中定义nav高度为94%，所以 *0.94
        const navHeight = this.data.windowHeight * 0.94, // 
            eachLetterHeight = navHeight / 26,
            comTop = (this.data.windowHeight - navHeight) / 2,
            temp = [];

        this.setData({
            eachLetterHeight: eachLetterHeight
        });
        // 求各字母距离设备左上角所处位置
        for (let i = 0, len = letters.length; i < len; i++) {
            const x = this.data.windowWidth - (10 + 40) / this.data.pixelRatio,
                y = comTop + (i * eachLetterHeight);
            temp.push([x, y]);
        }
        this.setData({
            lettersPosition: temp
        })
    },
    tabLetter(e) {
        const index = e.currentTarget.dataset.index;
        this.setData({
            selected: index,
            scrollIntoView: index
        });
        this.cleanAcitvedStatus();
    },
    // 清除字母选中状态
    cleanAcitvedStatus() {
        setTimeout(() => {
            this.setData({
                selected: 0
            })
        }, 500);
    },
    touchmove(e) {
        const x = e.touches[0].clientX,
            y = e.touches[0].clientY,
            lettersPosition = this.data.lettersPosition,
            eachLetterHeight = this.data.eachLetterHeight,
            letters = this.data.letters;

        // 判断触摸点是否在字母导航栏上
        if (x >= lettersPosition[0][0]) {
            for (let i = 0, len = lettersPosition.length; i < len; i++) {
                // 判断落在哪个字母区域，取出对应字母所在数组的索引，根据索引更新selected及scroll-into-view的值
                const _y = lettersPosition[i][1], // 单个字母所处高度
                    __y = _y + eachLetterHeight; // 单个字母最大高度取值范围
                if (y >= _y && y <= __y) {
                    this.setData({
                        selected: letters[i],
                        scrollIntoView: letters[i]
                    });
                    break;
                }
            }
        }
    },
    touchend(e) {
        this.cleanAcitvedStatus();
    },
})