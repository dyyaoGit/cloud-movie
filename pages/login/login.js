// pages/login/login.js
const axios = require('../../utils/axios');

Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    login() {
        const _this = this;
        wx.login({
            success (res) {
                axios.post('/login', {
                    appid: 'wx046d05ad6eaa75a7',
                    secret: 'de48652388695cfc57043445ccffbcef',
                    code: res.code
                }).then(res => {
                    console.log(res);
                })
            }
        })

    },
    onLoad: function (options) {

    },
    // login () {
    //   wx.login({
    //       success (res) {
    //         console.log(res);
    //         // axios.get()
    //       }
    //   })
    // },

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
