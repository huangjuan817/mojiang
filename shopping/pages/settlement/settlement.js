// pages/settlement/settlement.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		peiSong: 0,
	},

	//配送方式/配送/自取
	clickTab: function(e) {
		console.log(e.currentTarget.dataset.current, '配送');
		this.setData({
			peiSong: e.target.dataset.current
		});
	},
	//跳转 地址列表页
	address: function() {
		wx.navigateTo({
			url: '/pages/addressList/addressList'
		})
	},
	//跳转 备注列表页
	note: function() {
		wx.navigateTo({
			url: '/pages/note/note'
		})
	},
	//跳转 导航栏
	linkTab: function(){
		wx.navigateTo({
			url: '/pages/take/take'
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
