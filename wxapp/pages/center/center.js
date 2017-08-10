//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    useraddress:''
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
      console.log(userInfo);
    })

    var address =  wx.setStorageSync('adds');
    if(address){
       that.setData({
            useraddress:address
        }) 
    }else{
        wx.getLocation({
            type: 'gcj02',
            success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
                console.log(res);
                wx.chooseLocation({
                    success:function(res){
                        console.log(res);
                        var ads = res.address;
                        wx.setStorageSync('adds',ads);
                        that.setData({
                            useraddress:ads
                        })
                    }
                })
            }
        })
    }

    wx.getSetting({
        success(res) {
            if (!res.authSetting['scope.record','scope.userLocation','scope.address','scope.writePhotosAlbum']) {
                wx.authorize({
                    scope: 'scope.record',
                    success() {
                        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                        // wx.startRecord()
                    }
                })
                wx.authorize({
                    scope: 'scope.userLocation',
                    success() {
                        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                        // wx.getLocation(
                        //   {
                        //   success: function (res) {
                        //     console.log(res.userName)
                        //     console.log(res.postalCode)
                        //     console.log(res.provinceName)
                        //     console.log(res.cityName)
                        //     console.log(res.countyName)
                        //     console.log(res.detailInfo)
                        //     console.log(res.nationalCode)
                        //     console.log(res.telNumber)
                        //   }
                        // })
                        
                    }
                })
                wx.authorize({
                    scope: 'scope.address',
                    success() {
                        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                        // wx.chooseAddress()
                        console.log( wx.chooseAddress())
                    }
                })
            }
        }
    })
  },

  get_address(){
    var that = this
    var address =  wx.setStorageSync('adds');
    if(address){
        that.setData({
            useraddress:address
        }) 
    }else{
        wx.getLocation({
            type: 'gcj02',
            success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
                console.log(res);
                wx.chooseLocation({
                    success:function(res){
                        console.log(res);
                        var ads = res.address;
                        wx.setStorageSync('adds',ads);
                        that.setData({
                            useraddress:ads
                        })
                    }
                })
            }
        })
      }
  }
})
