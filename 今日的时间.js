
//时间函数
function getNow() {
    //得到时间对象
    let myDate = new Date();
    //得到年份
    let year = myDate.getFullYear();
    //得到月份
    let month = myDate.getMonth();
    //得到日期
    let date = myDate.getDate();
    //得到小时
    let hours = myDate.getHours();
    //得到分钟
    let mins = myDate.getMinutes();
    //得到秒
    let sec = myDate.getSeconds();

    let mdate = `${year}-${month}-${date} ${hours}:${mins}:${sec}`;
    return mdate;

}

