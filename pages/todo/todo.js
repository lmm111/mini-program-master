// pages/todo/todo.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    intupbase:'',
    test:''
  },
   /**
   * 完成
   */
  onsuccess:function(e){
    let $index = e.currentTarget.dataset.id
    this.data.list.filter((item,index) =>{
      if (index == $index) {
        item.isdone = true
      }
    });
    this.setData({
      list:this.data.list
    })
  },
  /**
   * 删除
   */
  ondel:function(e){
    let index = e.currentTarget.dataset.id
    this.data.list.splice(index, 1);
    this.setData({
      list:this.data.list,
    })
  },
  /**
   * 获取输入框的值
   */
  oninput:function(e){
    const baseValue= e.detail.value;
   //通过this.setData()将数据渲染到视图层
     this.setData({
      test:baseValue,
     });   
   },
  /**
    * 点击添加
    */
  onclick:function(){
    if(this.data.test != ''){
      this.data.list.push({
        isdone:false,
        txt:this.data.test
      });
    }
    this.setData({
      list:this.data.list,
      intupbase:'',
      test:''
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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