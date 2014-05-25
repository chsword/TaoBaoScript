var coupons = $("#JcouponList tr[class=tbody]");

if (coupons.length > 0) {
    var alertText = "请记住 您要发放的优惠券Id\
";
    for (var i = 0; i < coupons.length; i++) {
        var root = $(coupons[i]);
        var val = $("input[type=radio]", root).val();
        var text = $("td", root).text();
        alertText += (text + "Id:" + val + "\
");
    }
    alert(alertText);
} else {

    var m = 0;
    var couponId = window.prompt("请输入优惠券Id");
    var uvMin = window.prompt("请输入最小UV",0);
    var uvMax = window.prompt("请输入最大UV",1000);
    var div = $("#idc");
    if (div.length == 0) {
        div = $("<div>").css({ position: "fixed", top: 0, left: 0 });
        $("body").append(div);
    }
    div.html("正在发送优惠券共" + (uvMax - uvMin) + "已发<em id=idc-already></em>,成功<em id=idc-success></em>");
    var success = 0;
    for (var i = uvMin; i < uvMax; i++) {
        var k = i;
        window.setTimeout(function () {
            $.get(
                "http://liuliang.taobao.com/rest/coupon/sendlive?id=" + couponId + "&uv=" + (m++),
                {},
                function (r) {
                    if (r.message == "优惠券发送成功") {
                        success++;
                        $("#idc-success").text(success);
                    }
         
                }
                );
            $("#idc-already").text(m);
        }, 1000 * (k-uvMin));
    }
}