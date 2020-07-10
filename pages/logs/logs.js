//logs.js
const util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
    logs: [],
    userInfo:null,
    grids: [{
      txt:'滴滴出行',
      icon:'icon0',
      appid:'wxaf35009675aa0b2a'
    },{
      txt:'京东购物',
      icon:'icon1',
      appid:'wx91d27dbf599dff74'
    },
    {
      txt:'下厨房',
      icon:'icon3',
      appid:'wxb11f14b08a38ba44'
    },
    {
      txt:'吃喝玩乐',
      icon:'icon2'
    },{
      txt:'转转二手',
      icon:'icon2'
    },
    {
      txt:'贝壳找房',
      icon:'icon2'
    },
    {
      txt:'蘑菇街女装',
      icon:'icon2'
    },
    {
      txt:'酒店',
      icon:'icon2'
    },{
      txt:'电影票',
      icon:'icon2'
    }
  ]
  },
  getUserInfo:function(e){
    console.log(e);
    this.setData({
      userInfo:e.detail.userInfo
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    });
    if (app.globalData.userInfo) {
      console.log("已授权信息");
      this.setData({
        userInfo:app.globalData.userInfo
      })
    }   
  }
})
