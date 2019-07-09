// pages/articleDetails/after-time/after-time.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        date: {
            type: String,
            observer(newVal){
                if(newVal){
                    this.getTimeStr(newVal);
                }
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        dateStr: ""
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getTimeStr (time) {
            let afterDate = new Date(time); // 文章在服务器创建时候的时间对象
            let zeroDate = new Date(); // 今天0时0分0秒0毫秒
            let nowDate = new Date(); // 现在的时间
            let afterDateTime = Math.round(afterDate.getTime() / 1000);
            let nowDateTime = Math.round(nowDate.getTime() / 1000);
            let disTime = nowDateTime - afterDateTime;
            let zeroDateTime = '';
            let dateStr = '';

            zeroDate.setHours(0);
            zeroDate.setMinutes(0);
            zeroDate.setSeconds(0);
            zeroDate.setMilliseconds(0);
            zeroDateTime = Math.round(zeroDate.getTime() / 1000);

            if(disTime > 60 && (disTime < 60*60)) {
                const min = Math.ceil(disTime / 60)
                dateStr = `${min}分钟前`
            } else if(disTime > 60*60
                &&
                (zeroDateTime - afterDateTime) < 0){ // 多少小时前
                const hour = Math.ceil(disTime / (60 * 60));
                dateStr = `${hour}小时前`
            } else if((zeroDateTime - afterDateTime) > 0&&disTime < (60 * 60 * 24 * 30) ){ // 多少天前
                const day = Math.ceil(disTime / (60 * 60 * 24));
                dateStr = `${day}天前`
            } else {
                const month = Math.ceil(disTime / (60 * 60 * 24 * 30))
                dateStr = `${month}月前`;
            }
            this.setData({
                dateStr
            })
        }
    }
})
