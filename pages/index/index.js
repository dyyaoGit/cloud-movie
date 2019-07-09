//index.js
//获取应用实例
const app = getApp();
const axios = require('../../utils/axios');

Page({
    data: {
        swiper: [],
        news: []
    },
    getSwiper() {
        const _this = this;
        axios.get('/swiper_news').then(res => {
            this.setData({
                swiper: res.data
            })
        }).catch(e => console.log(e))
    },
    getNews () {
        axios.get('/news').then(res => {
            this.setData({
                news: res.data.map(item => {
                    item.timeStr = new Date(item.update_time).toLocaleString()
                    return item
                })
            })
        })
    },
    onLoad () { // 在当前页面加载完成后，会主动执行里边的钩子
        this.getSwiper();
        this.getNews();
    },
    onShow () { // 在页面显示

    }
})
