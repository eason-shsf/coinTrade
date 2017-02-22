var util = require('./util');


//获取账户详情
// util.httpsRequest({}, 'get_account_info');

//获取订单详情
var paramsGetOrders = {
    'coin_type': 1
}
util.httpsRequest(paramsGetOrders, 'get_orders');

//限价买入
// var paramsBuy = {
//     'coin_type': 1,
//     'price': 5001,
//     'amount': 0.001
// };
// util.httpsRequest(paramsBuy, 'buy');

//取消订单
//id为买入卖出单的id
// var paramsCancelOrder = {
//     'coin_type': 1,
//     'id': 3975488073
// };
// util.httpsRequest(paramsCancelOrder, 'cancel_order');