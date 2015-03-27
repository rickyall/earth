  var viewer = new Cesium.Viewer('cesiumContainer',{

    imageryProvider : new Cesium.OpenStreetMapImageryProvider({
    url : 'http://a.tile.openstreetmap.org/'
}),
    baseLayerPicker:false

  });


  Cesium.InfoBoxViewModel.defaultSanitizer = undefined;
    



    //北京
    var china = viewer.entities.add({
        name : '中国',
        position: Cesium.Cartesian3.fromDegrees(108.95,34.3),
        ellipse : {
          semiMinorAxis : 300000,
          semiMajorAxis : 300000,
          material: "../Build/Cesium/Assets/image/china.jpg"
        }
    });
  
    china.description = '\
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
        href="http://money.163.com/15/0210/01/AI2BB0L000253B0H.html">网易财经</a>';
    






    //美国
    
 var  america= viewer.entities.add({
        name : '美国',
        position: Cesium.Cartesian3.fromDegrees(-97.02,41.51),
        ellipse : {
          semiMinorAxis : 600000,
          semiMajorAxis : 600000,
          material : new Cesium.Material({
           fabric:{

            type:"Color",
            uniforms:{
              color: new Cesium.Color.RED
            }
           }
          })
        }
    });
  
    america.description = '\
      <img\
      width="50%"\
      style="float:left; margin: 0 1em 1em 0;"\
      src="../Build/Cesium/Assets/image/weather/rain.gif"/>\
    <p>\
      　上周五（2月6日）公布的数据显示，美国1月非农就业人数增加25.7万人，超过预期增加23.5万人。尽管美国1月份失业率5.7%，高于预期的5.6%，但劳动参与率从62.7%升至62.9%。\
    </p>\
    <p>\
     美国劳工部还将12月非农就业人数上修至增加32.9万人。美国三个月非农就业人口增幅创1997年以来最大。尤其美国1月平均每小时工资月率增长0.5%，超过预期增长的0.3%；1月平均每小时工资年率上升2.2%，前值为上升1.9%。美国1月份平均时薪增幅创2008年11月来最大。\
    </p>\
    <p>\
      来源: \
      <a style="color: WHITE"\
        target="_blank"\
        href="http://gold.hexun.com/2015-02-10/173242843.html">和讯财经</a>';
    






//印度

var india = viewer.entities.add({
        name : '印度',
        position: Cesium.Cartesian3.fromDegrees(77.13,28.37),
        ellipse : {
          semiMinorAxis : 300000,
          semiMajorAxis : 300000,
          material : Cesium.Color.RED.withAlpha(0.5)
        }
    });
  
    india.description = '\
      <img\
      width="50%"\
      style="float:left; margin: 0 1em 1em 0;"\
      src="../Build/Cesium/Assets/image/india.jpg"/>\
    <p>\
      中新网2月10日电 据英国《金融时报》中文网站2月10日报道，官方数据显示，印度经济增长率已飙升至每年7%以上，但投资者和经济学家们表示，在近期调整之后，他们对最新统计数据抱有疑虑。\
    </p>\
    <p>\
  印度中央统计局(CentralStatisticsOffice)昨日宣布，在截至12月的三个月里，印度的国内生产总值(GDP)增长了7.5%，预计将在截至3月底的本财年增长7.4%。这将赶上中国在2014日历年7.4%的增长——中国24年来最慢的经济增速。\
    </p>\
    <p>\
      来源: \
      <a style="color: WHITE"\
        target="_blank"\
        href="http://news.163.com/15/0210/11/AI3E67OE00014JB6.html">网易新闻</a>';







//澳大利亚
var australia = viewer.entities.add({
        name : '澳大利亚',
        position: Cesium.Cartesian3.fromDegrees(136.5,-29.15),
        ellipse : {
          semiMinorAxis : 200000,
          semiMajorAxis : 200000,
          material : Cesium.Color.BLUE.withAlpha(0.5)
        }
    });
  
    australia.description = '\
      <img\
      width="50%"\
      style="float:left; margin: 0 1em 1em 0;"\
      src="../Build/Cesium/Assets/image/australia.jpg"/>\
    <p>\
      周二(2月3日)澳洲联储(RBA)加入全球央行的宽松阵营，降息25个基点至2.25%，为2013年8月来首次，震惊了大部分经济学家，但在债市意料之中。之前债市的走势已显示，澳洲联储宽松的几率将达到60%。\
    </p>\
    <p>\
 澳洲联储在今日公布的季度政策声明中，将澳大利亚2015年经济增速预期削减至1.75%至2.75%，去年11月的预期为2%-3%；并将2015年12月核心通胀预期削减至2%-3%，此前预期为2.25%-3.25%。\
    </p>\
    <p>\
      来源: \
      <a style="color: WHITE"\
        target="_blank"\
        href="http://money.163.com/15/0206/15/AHPGTP6R00253B0H.html">网易财经</a>';





