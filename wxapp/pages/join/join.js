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
      '../../images/banner_1.jpg',
      '../../images/banner_2.jpg',
      '../../images/banner_3.jpg'
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
        latitude: 30.27455,
        longitude: 120.12211,
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
        longitude: 120.12211,
        latitude: 30.27455
      }, {
        longitude: 120.12211,
        latitude: 30.27455
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
  redirect_contact() {
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
  show_detail(){
    console.log(0)
    wx.redirectTo({
      url: '../details/details'
    })
  }
})
