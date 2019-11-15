// pages/vip/vip.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		vouchers: [
			{id: "", name: "优先券", src: "/images/vip-icon.jpg"},
			{id: "", name: "免运费券", src: "/images/vip-icon2.jpg"}
		],
		discounts: [
			{id: "", name: "优先券", src: "/images/preferential1.jpg"},
			{id: "", name: "免运费券", src: "/images/preferential2.jpg"},
			{id: "", name: "买一赠一券", src: "/images/preferential3.jpg"},
			{id: "", name: "买二赠一券", src: "/images/preferential4.jpg"}
		],
		listTap: [
			{name: "查看猩球会员权益", url: "/pages/vipright/vipright", text: "" },
			{name: "等级说明", url: "/pages/viplevel/viplevel", text: "" }
		]
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
