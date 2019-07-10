// pages/history/history.js
const axios = require('../../utils/axios');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        token: '',
        history: []
    },
    jump (e) {
        console.log(e);
        const {id} = e.currentTarget.dataset;
        wx.navigateTo({
            url: '/pages/movie_history/movie_history?id=' + id
        })
    },
    getHistory() {
        axios.get('/movie_history').then(res => {
            this.setData({
                history: res.data.map(item => {
                    var str = '';
                    item.continueTime = Number(item.continueTime)
                    item.percent = Number(item.continueTime) / (Number(item.movie.mins) * 60 * 60) * 100;              if(item.continueTime < 60){
                        str = '观看不足一分钟'
                    } else {
                        str = `已观看${Math.round(item.continueTime / 60)}分钟`
                    }
                    item.str = str;
                    return item
                })
            })
        })
    },
    onLoad: function (options) {
        this.getHistory();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
