// pages/take/take.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	//去下单
	take_tabBar: function() {
		wx.switchTab({
			url: '/pages/index/index'
		})
	},
	
	//去历史订单
	take_history: function() {
		wx.navigateTo({
			url: '/pages/orderList/orderList'
		})
	},
	
	//拨打电话
	mobile: function(){
		wx.makePhoneCall({
		  phoneNumber: '1340000' //仅为示例，并非真实的电话号码
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
