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
        guess: [],
        currentTime: 0,
        isFirst: true,
        continueTime: 0
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
    getMovie(id, index) {
        index = Number(index);
        axios.get(`/movies/${id}`).then(res => {
            this.setData({
                movie: res.data,
                url: res.data.links[index],
                activeIndex: index
            })
        })
    },
    getHistory (id) {
        axios.get(`/movie_history/${id}`).then(res => {
            this.setData({
                movie_id: res.data.movie._id,
                movie: res.data.movie,
                activeIndex: Number(res.data.index),
                url: res.data.movie.links[Number(res.data.index)],
                continueTime: Number(res.data.continueTime)
            })
            this.getGuess(res.data.movie._id);
            const videoCtx = wx.createVideoContext('video');
            videoCtx.play();
        })
    },
    onLoad: function (options) {
        console.log(options);
        const {id} = options;
        this.getHistory(id);
        // this.setData({
        //     movie_id: id
        // })
        // this.getMovie(id, index);
        // this.getGuess(id);
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
    getTime (e) {
        const continueTime = e.detail.currentTime;
        if(this.data.isFirst){
            const videoCtx = wx.createVideoContext('video');
            videoCtx.seek(this.data.continueTime);
            this.setData({
                isFirst: false
            })
        }
        this.setData({
            currentTime: continueTime
        })
    },
    jump (e) {
        const {id} = e.target.dataset;
        this.uploadMovieTime();
        wx.navigateTo({
            url: `/pages/movieDetails/movieDetails?id=${id}&index=0`
        })
    },
    uploadMovieTime () {
        const token = wx.getStorageSync('token');
        if (token) {
            axios.post('/movie_history', {
                movie_id: this.data.movie_id,
                continue_time: this.data.currentTime,
                index: this.data.activeIndex
            })
        }
    },
    onUnload: function () {
        this.uploadMovieTime();
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
