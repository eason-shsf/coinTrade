var util = require('./util');

// util.httpsRequest({}, 'get_account_info');

var paramsGetOrders = {
    'coin_type': 1
}
util.httpsRequest(paramsGetOrders, 'get_orders');