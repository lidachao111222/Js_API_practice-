准备重写写一遍

Nov.16 
在写之前 会议Web API的 核心： 那就是1.得到元素  2.注册事件    3.修改样式 or  修改文本。   这些就是bom dom的核心，基本任何修改都是通过这三步来进行。


以后增加记录还是会忘记 or  写错的部分。

1.当证明难判断时，用反证法。


good luck.


Nov.17 

要学会灵活运用 transitionend 动画结束事件，动作可以先取消(把时间定为0) 然后再加回去做成假象(再加的时候要用setTime定时器，否则看不出来)。。。  
=。 =


Nov.18

元素移动主要由三个方法。 都是通过改变样式（css的style）去改变：   
    
    1.当元素设立了position后，通过top   left去改变
    
    
    2.通过元素的marginTop ， matginLeft 去改变  （简单粗暴  我喜欢 =。 = ）
    
    3.通过元素的 transform= translate()  去改变  （多用于移动端）
    
    注意！！！！ 加px  最香的方式是模板字符串   ` ${}  ` 
   



