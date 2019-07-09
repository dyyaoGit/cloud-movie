// pages/articleDetails/articleDetails.js
const axios = require('../../utils/axios');
const wxParse = require('../../wxParse/wxParse');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        res: {},
        content: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const {id} = options;
        this.getData(id);
    },
    getData (id) {
        axios.get(`/news/${id}`).then(res => {
            this.setData({
                res: res.data
            })
            wxParse.wxParse('content', 'html', res.data.content, this)
        })
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
    onShareAppMessage: function (from, target) {
        return {
            title: this.data.res.title,
            path: "/pages/articleDetails/articleDetails?id=" + this.data.res._id, // 必须是完成路径
            imageUrl: this.data.res.img
        }
    }
})
