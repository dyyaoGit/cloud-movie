
class Axios {
    constructor (options) {
        this.baseURL = options.baseURL || 'https://movie.yaojunrong.com';
    }
    sendMsg (url, data, method) {
        const _this = this;
        const token = wx.getStorageSync('token');
        const header = {};
        if(token) {
            header.token = token;
        }

        return new Promise((resolve, reject) => {
            wx.request({
                url: _this.baseURL + url,
                data,
                method,
                header,
                success: (res) => {
                    resolve(res.data)
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    }
    get (url, data) {
        return this.sendMsg(url, data, 'GET')
    }
    post (url, data) {
        return this.sendMsg(url, data, 'POST')
    }
}

const axios = new Axios({
    baseURL: "https://movie.yaojunrong.com"
})

module.exports = axios;
