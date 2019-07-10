//app.js
const axios = require('./utils/axios');

App({
    globalData: {
        userInfo: null
    },
    onLaunch() {
        this.login();
    },
    login() {
        const _this = this;
        wx.login({
            success(res) {
                axios.post('/login', {
                    code: res.code,
                    appid: 'wx046d05ad6eaa75a7',
                    secret: 'de48652388695cfc57043445ccffbcef'
                }).then(res => {
                    if (res.code == 200) {
                        wx.setStorageSync('token', res.token);
                    } else {
                        wx.showToast({
                            title: res.msg,
                            icon: "error",
                            duration: 2000
                        })
                    }
                })
            },
            error() {
                wx.showToast({
                    icon: "error",
                    title: "登录失败，请稍后再试",
                    duration: 2000
                })
            }
        })
    }
})
