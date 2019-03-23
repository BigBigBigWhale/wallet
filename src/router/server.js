/**
 * Created by 15755 on 2018/6/29.
 */
import ajax from './ajax'
let ROOT = 'http://ethlopin.eth-e.net/api/';

let getPhoneCode = ROOT + 'login/get_code';
let server={
	getPhoneCode: function (data) {
		return ajax({
			url: getPhoneCode,
			data: data
		});
	},


};
export default server;