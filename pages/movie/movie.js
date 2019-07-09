// pages/movie/movie.js
const axios = require('../../utils/axios');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiper: [],
        movies: [],
        pn: 1, // 第一页
        size: 6 // 一页是12个
    },

    /**
     * 生命周期函数--监听页面加载
     */

    getMovies(oldArr = []) {
        axios.get('/movies', {
            pn: this.data.pn,
            size: this.data.size
        }).then(res => {
            this.setData({
                movies: [...oldArr,...res.data],
                pn: this.data.pn + 1
            })
        })
    },
    getSwiper() {
        axios.get('/swiper').then(res => {
            console.log(res);
            this.setData({
                swiper: res.data
            })
        })
    },
    onLoad: function (options) {
        this.getSwiper();
        this.getMovies();
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
        this.setData({
            pn: 1,
            size: 12,
            swiper: [],
            movies: [],
        })
        this.getSwiper();
        this.getMovies();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.getMovies(this.data.movies);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
