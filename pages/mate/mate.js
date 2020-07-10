// pages/mate/mate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cireList:[{
      id:0,
      top:"50%",
      left:"50%",
      val:"48%",
      time:60
    },{
      id:1,
      top:"52%",
      left:"30%",
      val:"50%",
      time:0
    },{
      id:2,
      top:"42%",
      left:"80%",
      val:"50%",
      time:30
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.animateFunc();

  },
  getFunc:function(e){
    if (e.currentTarget.dataset.time == 0) {
      let index = e.currentTarget.dataset.id;
      this.data.cireList.splice(index, 1);
      this.setData({
        cireList:this.data.cireList,
      })
    }    
  },
  animateFunc:function(){
    setInterval(() =>{
      this.animate('.cire', [
        { translateY: '0' },
        { translateY: '-10px' },
        { translateY: '0' },
      ], 2000, function () {
        // this.clearAnimation('.cire', function () {
        //   console.log("清除了.cire上的所有动画属性")
        // })
      }.bind(this));
    },2000);

    this.data.cireList.forEach((element,index) => {
      // let ele = `.cire${index}`;
      if (element.time != 0) {
        console.log("倒计时开始");
        let timer = setInterval(() =>{
          element.time--;
          if(element.time == 0) {
            clearInterval(timer);
          }
          this.setData({
            cireList:this.data.cireList
          });
        },1000)
      }       
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})