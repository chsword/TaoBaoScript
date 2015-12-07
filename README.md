TaoBaoScript
============

### 淘宝 CRM 自动发优惠券脚本
更新时间 2015-11-11

// 204 是页码哦，加油

var i = 204;setInterval(function(){if(i<1)return;$("[data="+(i--)+"]").eq(0).click();setTimeout(function(){$("input[data-table-index=1]").click();setTimeout(function(){$(".send-coupon.J_sendCoupon").click();setTimeout(function(){$(".btn.btn-primary.btn-lg").click();setTimeout(function(){$("[data-dismiss=modal]").click()},1000)},500)},1000)},3000)},7000)


### 江湖策自动发送优惠券脚本
更新时间 2014-05-27

使用方法：
第一步：
将
复制 TaoBaoScript / src / 1.min.js 文件第一行
前面拼上 javascript:  存为一个收藏夹

第二步：
先查看 http://liuliang.taobao.com/coupon_list.html页面，点击你要送的优惠券
如

http://liuliang.taobao.com/coupon_effect.html?id=123456&type=1
其中ID部分记下

第三步：
然后在江湖策 实时路径 使用收藏夹，第一步填入优惠券 ID ，然后输入起始 uv  （首次可填1）
再填入最大 uv 即访客数，可以在 sycm 中查看，然后扩大 1.5 倍吧（例如 sycm 中是 500 那么就输入 700 好了）
如果是当日第二次使用，上次最大输入的 700 那么本次最小可以输入 600

然后就开始发了，发送状态在网页左上角


