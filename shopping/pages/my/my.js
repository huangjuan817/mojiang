// pages/my/my.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		discounts: [
			{id: "", name: "优先券", url: "/pages/openvip/openvip", src: "/images/preferential1.jpg"},
			{id: "", name: "免运费券", url: "/pages/openvip/openvip", src: "/images/preferential2.jpg"},
			{id: "", name: "买一赠一券", url: "/pages/openvip/openvip", src: "/images/preferential3.jpg"},
			{id: "", name: "买二赠一券", url: "/pages/openvip/openvip", src: "/images/preferential4.jpg"}
		],
		listTap: [
			{name: "历史订单", url: "/pages/orderList/orderList", text: "" },
			{name: "会员码", url: "/pages/null/null", text: "门店扫码积分或尛匠钱包支付" },
			{name: "兑换中心", url: "/pages/exchange/exchange", text: "兑换猩球会员" },
			{name: "联系客服", url: "/pages/null/null", text: "" }
		]
	},
	//跳转开通会员
	openvip: function() {
		wx.navigateTo({
			url: '/pages/openvip/openvip'
		})
	},
	//跳转任务中心
	task: function() {
		wx.navigateTo({
			url: '/pages/task/task'
		})
	},
	//跳转会员权益
	vip: function() {
		wx.navigateTo({
			url: '/pages/vip/vip'
		})
	},
	//联系客服

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
