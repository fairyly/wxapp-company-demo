//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    // 侧边栏
    open: false,
    mark: 0,
    newmark: 0,
    istoright:true,
    // swiper
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    dotactivecolor: '#1aad19',
    markers: [{
        title:'之梦',
        content:'之梦',
        iconPath: "/resources/others.png",
        id: 0,
        latitude: 30.280921,
        longitude: 120.12855,
        width: 50,
        height: 50,
        bgColor: '#777777',
        color: '#ffffff',
        fontSize: '13px',
        display:'ALWAYS',
        callout:{content:'之梦', color: '#ffffff', fontSize: '13px', borderRadius:'5px', bgColor: '#777777', display:'ALWAYS'}
    }],
    polyline: [{
      points: [{
        longitude: 120.12855,
        latitude: 30.280921
      }, {
        longitude: 120.12855,
        latitude: 30.280921
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tap_ch: function(e){
    console.log(this.data.open);
    if(this.data.open){
      this.setData({
        open : false
      });
    }else{
      this.setData({
        open : true
      });
    }
  },

  // tap_start:function(e){
  //   // touchstart事件
  //   this.data.mark = this.data.newmark = e.touches[0].pageX;
  // },
  // tap_drag: function(e){
  //     // touchmove事件

  //     /*
  //      * 手指从左向右移动
  //      * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
  //      */
  //     this.data.newmark = e.touches[0].pageX;
  //     if(this.data.mark < this.data.newmark){
  //       this.istoright = true;
  //     }
      
  //      * 手指从右向左移动
  //      * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
       
  //     if(this.data.mark > this.data.newmark){
  //       this.istoright = false;

  //     }
  //     this.data.mark = this.data.newmark;
  // },
  // tap_end: function(e){
  //     // touchend事件
  //     this.data.mark = 0;
  //     this.data.newmark = 0;
  //     if(this.istoright){
  //       this.setData({
  //         open : true
  //       });
  //     }else{
  //       this.setData({
  //         open : false
  //       });
  //     }
  // },

  //转发
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '之梦科技',
      path: '/pages/index/index?id=123',
      success: function(res) {
        // 转发成功

      },
      fail: function(res) {
        // 转发失败
      }
    }
  },

  //页面滚动
  onPageScroll: function() {
    // Do something when page scroll
  },

  //地图
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  // 跳转
  tap_index(e) {
    this.tap_ch();
    console.log(e);
    wx.switchTab({
      url: '../index/index'
    })
  },
  tap_about(e) {
    // this.tap_ch();
    wx.switchTab({
      url: '../about/about'
    })
  },
  tap_product(e) {
    this.tap_ch();
    wx.switchTab({
      url: '../product/product'
    })
  },
  tap_center(e) {
    this.tap_ch();
    wx.switchTab({
      url: '../center/center'
    })
  },
  tap_join(e) {
    this.tap_ch();
    wx.redirectTo({
      url: '../join/join'
    })
  },
  tap_contact(e) {

    this.tap_ch();
    wx.redirectTo({
      url: '../contact/contact'
    })
  },
  //更多跳转

  redirect_join() {
    wx.redirectTo({
      url: '../join/join'
    })
  },
  redirect_join() {
    wx.redirectTo({
      url: '../contact/contact'
    })
  },
  redirect_product() {
     wx.switchTab({
      url: '../product/product'
    })
  },
  redirect_about() {
    wx.switchTab({
      url: '../about/about'
    })
  },
  redirect_news() {
    wx.redirectTo({
      url: '../news/news'
    })
  },
})
