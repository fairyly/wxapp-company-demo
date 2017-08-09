//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
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