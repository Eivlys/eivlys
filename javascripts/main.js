console.log('This would be the main JS file.');
/**
 * Created by sylvie on 14/12/10.
 */
var className = "tooltip-box";

function showTooltip(obj,id,html,width,height){
    if(document.getElementById(id) == null ) {
        var tooltipBox;

        tooltipBox = document.createElement("div");
        tooltipBox.className = className;
        tooltipBox.id = id;
        tooltipBox.innerHTML = html;
        obj.appendChild(tooltipBox);


        tooltipBox.style.width = width ? width + "px" : "auto";
        tooltipBox.style.height = height ? height + "px" : "auto";

        tooltipBox.style.position = "absolute";
        tooltipBox.style.display = "block";

        var left = obj.offsetLeft + width;
        var top = obj.offsetTop;

        tooltipBox.style.left = left + "px";
        tooltipBox.style.top = top + "px";

        obj.onmouseout = function () {
            setTimeout(function () {
                document.getElementById(id).style.display = "none";
            }, 100);
        }
    }else{
        document.getElementById(id).style.display ="block";
    }
}

function showLefttip(obj,id,html,width,height){
    if(document.getElementById(id) == null ) {
        var tooltipLeft;

        tooltipLeft = document.createElement("div");
        tooltipLeft.className = className;
        tooltipLeft.id = id;
        tooltipLeft.innerHTML = html;
        obj.appendChild(tooltipLeft);


        tooltipLeft.style.width = width ? width + "px" : "auto";
        tooltipLeft.style.height = height ? height + "px" : "auto";

        tooltipLeft.style.position = "absolute";
        tooltipLeft.style.display = "block";

        var left = obj.offsetLeft;
        var top = obj.offsetTop;

        tooltipLeft.style.top = top + 60 + "px";
        tooltipLeft.style.left = left + 540 + "px";

        obj.onmouseout = function () {
            setTimeout(function () {
                document.getElementById(id).style.display = "none";
            }, 500);
        }
    }else{
        document.getElementById(id).style.display ="block";
    }
}


var inte = document.getElementById("intern");
var no = document.getElementById("note");
var eh = document.getElementById("ehealth");
var ec = document.getElementById("ecom");
var un = document.getElementById("union");
var av = document.getElementById("avatar")

inte.onmousemove = function(){
    showTooltip(this,"inte","跟进百度音乐IOS客户端和PC客户端产品迭代,编写需求文档,制定产 品及交互策略;处理用户反馈;曲库质量评估。",250);
}

no.onmousemove = function(){
    showTooltip(this,"no","负责产品需求分析和原型设计",250);
}

eh.onmousemove = function(){
    showTooltip(this,"eh","负责用例分析,系统结构规划",250);
}

ec.onmousemove = function(){
    showTooltip(this,"ec","负责协会日常运作,协调与社团联及各协会的关系,促进协会内外部日常交流,开展社团活动。",250);
}

un.onmousemove = function(){
    showTooltip(this,"un","负责校内,院内大型活动的报道;活动海报的绘画及制作",250);
}

av.onmousemove = function(){
    showLefttip(this,"av","Hi !",25);
}



