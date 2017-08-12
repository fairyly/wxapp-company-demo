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
