const data = {
    year: 0,
    month: 0,
    day: 0,
    weekday: '',
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    updateTime: function() {
        const now = new Date();
        this.year = now.getFullYear();
        this.month = now.getMonth() + 1;
        this.day = now.getDate();
        this.weekday = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()];
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
       
    },
    formatTime: function() {
        let timeString = `${this.year}年${this.month < 10? '0' + this.month : this.month}月${this.day < 10? '0' + this.day : this.day}日 ` +
            `${this.weekday} ` +
            `${this.hours < 10? '0' + this.hours : this.hours}:${this.minutes < 10? '0' + this.minutes : this.minutes}:${this.seconds < 10? '0' + this.seconds : this.seconds}.${this.milliseconds < 100? '0' + (this.milliseconds < 10? '0' + this.milliseconds : this.milliseconds) : this.milliseconds}`;

        if (this.minutes === 20 || this.minutes === 50) {
            timeString += "\n特殊时间点提示！";
        }

        return timeString;
    }
};

function updateClock() {
    data.updateTime();
    document.getElementById('clock').textContent = data.formatTime();
}

updateClock();
setInterval(updateClock, 1);


 