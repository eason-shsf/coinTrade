var httpUtil = require("./HttpRequest");

var apiKey = "";
var secretKey = "";
var urlPrex = "www.okcoin.cn";

/**
	 * 现货行情URL
	 */
	var TICKER_URL = "/api/v1/ticker.do?";
	
	/**
	 * 现货市场深度URL
	 */
	var DEPTH_URL = "/api/v1/depth.do?";
	
	/**
	 * 现货历史交易信息URL
	 */
	var TRADES_URL = "/api/v1/trades.do?";
	
	/**
	 * 现货获取用户信息URL
	 */
	var USERINFO_URL = "/api/v1/userinfo.do?";
	
	/**
	 * 现货 下单交易URL
	 */
	var TRADE_URL = "/api/v1/trade.do?";
	
	/**
	 * 现货 批量下单URL
	 */
	var BATCH_TRADE_URL = "/api/v1/batch_trade.do";
	
	/**
	 * 现货 撤销订单URL
	 */
	var CANCEL_ORDER_URL = "/api/v1/cancel_order.do";
	
	/**
	 * 现货 获取用户订单URL
	 */
	var ORDER_INFO_URL = "/api/v1/order_info.do";
	
	/**
	 * 现货 批量获取用户订单URL
	 */
	var ORDERS_INFO_URL = "/api/v1/orders_info.do";
	
	/**
	 * 现货 获取历史订单信息，只返回最近七天的信息URL
	 */
	var ORDER_HISTORY_URL = "/api/v1/order_history.do";

exports.ticker = function (symbol) {
    var params = "&symbol=" + symbol;
    var result = httpUtil.requestHttpGet(urlPrex, TICKER_URL, params);
}