// pages/movieDetails/movieDetails.js
const axios = require('../../utils/axios');


Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: {},
        url: '',
        activeIndex: 0,
        guess: []
    },
    getGuess (id) {
        axios.get('/guess', {
            id
        }).then(res => {
            this.setData({
                guess: res.data.map(item => {
                    item.actorStr = item.actors.join(" ");
                    return item
                })
            })
        })
    },
    changeUrl (e) {
        const index = e.currentTarget.dataset.index;
        this.setData({
            url: this.data.movie.links[index],
            activeIndex: Number(index)
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    getMovie(id) {
        axios.get(`/movies/${id}`).then(res => {
            this.setData({
                movie: res.data,
                url: res.data.links[0]
            })
        })
    },
    onLoad: function (options) {
        const {id} = options;
        this.getMovie(id);
        this.getGuess(id);
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
