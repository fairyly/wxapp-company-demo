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
      '../../images/banner_4.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    dotactivecolor: '#1aad19',
    
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
    wx.redirectTo({
      url: '../details/details'
    })
  }
})
