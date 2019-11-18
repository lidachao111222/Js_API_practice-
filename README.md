准备重写写一遍

Nov.16 
在写之前 回忆Web API的 核心： 那就是1.得到元素  2.注册事件    3.修改样式 or  修改文本。   这些就是bom dom的核心，基本任何修改都是通过这三步来进行。


以后增加记录还是会忘记 or  写错的部分。

1.当证明难判断时，用反证法。
2.排他法好处，选定一个元素集合时，如果此元素已有默认样式，则全部去掉，然后再用去添加。

good luck.


Nov.17 

要学会灵活运用 transitionend 动画结束事件，动作可以先取消(把时间定为0) 然后再加回去做成假象(再加的时候要用setTime定时器，否则看不出来)。。。  
=。 =

==============================================================================================================================
Nov.18

元素移动主要由三个方法。 都是通过改变样式（css的style）去改变：   
    
    1.当元素设立了position后，通过top   left去改变
    
    
    2.通过元素的marginTop ， matginLeft 去改变  （简单粗暴  我喜欢 =。 = ）
    
    3.通过元素的 transform= translate()  去改变  （多用于移动端）
    
    注意！！！！ 加px  最香的方式是模板字符串   ` ${}  ` 
   
=======================================
offset系列    (offset的偏移是相对父级来说的，那个父级有定位，那就是它跟父级的偏移量。 若父级没有定位，则一直到body为止)。
    
    1.offsetX
    2.offsetY
    3.offsetWidth
    4.offsetHeight
    5.offsetLeft
    6.offsetTop
=======================================
事件对象 (e):    [ps:熟知事件的传播：1.事件捕获 2.事件目标 3.事件冒泡]

    1. tips： 如果忘记事件对象里面属性和方法，用console.dir(e); 然后去查！
    2. 获得鼠标位置  ex： e.pageX;
    3. 获得键盘按键   ex：（忘了，稍后补= = ）
    4. 阻止冒泡  ex：e.stopPropagation(); 父级是相同事件的话，就不会被执行。
    5. 得到真正触发事件的是哪个元素 【事件委托】（通过冒泡得知）e.target / e.target.nodeName
    6. 阻止事件的默认行为 e.preventDefault();

    注意： 第五点用于 有些元素动态生成，所以不好得到，此时用事件委托，给元素的父级注册事件， 再通过e.target得到到底是哪个元素。（ex：微博的删除）
   
=======================================
Nov.18

微博localstorage 体现的不足：

    1.自定义属性  元素中 data-自己定义的属性名=       调用元素.style.dataset.自己定义的属性名  or e.target.dataset.id
    2.如何删除localstorage的信息? 利用id  如果 其与点击的元素的自定义id相等，运用数组的索引（forEach方法得到索引）去删除 .splice（索引，删几个元素）。
    3.事件委托。
    4.设定id。循环，把arr中的元素id最大值赋给id，id再++
    5. 得到真正触发事件的是哪个元素 【事件委托】（通过冒泡得知）e.target / e.target.nodeName
    
    还需多练！
=======================================    
 
(抽奖)事件解绑
    
    1.元素.on事件类型 = function(){}  直接在里面写元素.onxxx = null； 即可，超简单。
    2.元素.addEventListener('事件类型', function 方法名(){ }); 在里面写元素.addEventListener('事件类型'，方法名） 即可。 最好就偷懒，用1 

======================================= 

setTimeout & setInterval 区别

    1.简单理解版 ： https://www.jianshu.com/p/4ff86db97ff5
    2.复杂版本： https://www.jianshu.com/p/fc9a08ca2c92
    3.自己理解， setTimeout(函数，延迟事件)；    setInterval(函数，间隔时间)---- 相当于while，所以一定要有if条件去clearInterval
    
======================================= 
常用事件： source: https://www.w3school.com.cn/jsref/dom_obj_event.asp   (全部)
    
    1.onblur	元素失去焦点。
    2.onfocus	元素获得焦点。
    3.onclick	当用户点击某个对象时调用的事件句柄。
    4.onkeydown	某个键盘按键被按下。
    5.onkeyup	某个键盘按键被松开。
    6.onmousedown	鼠标按钮被按下。
    7.onmousemove	鼠标被移动。
    8.onmouseout	鼠标从某元素移开。
    9.onmouseover	鼠标移到某元素之上。
    10.onmouseup	鼠标按键被松开。
    11.元素过渡动画结束之后触发事件（transitionend） 但是要用addEventListener添加
