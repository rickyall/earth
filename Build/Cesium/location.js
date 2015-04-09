var viewer = new Cesium.Viewer('cesiumContainer',{

imageryProvider : new Cesium.OpenStreetMapImageryProvider({
url : 'http://a.tile.openstreetmap.org/'
}),
baseLayerPicker:false

});


Cesium.InfoBoxViewModel.defaultSanitizer = undefined;




//北京
chinas = [{
baseInfo: {
name : '中国',
position: Cesium.Cartesian3.fromDegrees(108.95,34.3),
ellipse : {
semiMinorAxis : 300000,
semiMajorAxis : 300000,
material: "../Build/Cesium/Assets/image/china.jpg"
}
},
description: '\
<img\
width="50%"\
style="float:left; margin: 0 1em 1em 0;"\
src="../Build/Cesium/Assets/image/china.jpg"/>\
<p>\
2月8日，海关总署公布的数据显示，今年1月份，我国进出口总值为2.09万亿元，比去年同期下降10.8%。其中，出口为1.23万亿元，下降3.2%；进口为0.86万亿元，下降19.7%；贸易顺差为3669亿元，扩大87.5%。\
</p>\
<p>\
这组数据说明，进口持续不振反映出的是内需疲弱，顺差续增则进一步推升人民币实际有效汇率，从而反过来抑制出口的增长。归根结底就是外贸形势严峻。\
</p>\
<p>\
来源: \
<a style="color: WHITE"\
target="_blank"\
href="http://money.163.com/15/0210/01/AI2BB0L000253B0H.html">网易财经</a>'
},
{
baseInfo: {
name : '中国',
position: Cesium.Cartesian3.fromDegrees(108.95,34.3),
ellipse : {
semiMinorAxis : 300000,
semiMajorAxis : 300000,
material: "../Build/Cesium/Assets/image/beijing.jpg"
}
},
description: 'hahaha'
}
];
chinasPoint = 0;
china = viewer.entities.add(chinas[chinasPoint].baseInfo);
china.description = chinas[chinasPoint].description;

function refresh(){
// alert(viewer.entities);
viewer.entities.removeById(china._id);
china = viewer.entities.add(chinas[chinasPoint].baseInfo);
china.description = chinas[chinasPoint].description;
chinasPoint = (chinasPoint + 1) % chinas.length;
}

setInterval('refresh()',5000);

