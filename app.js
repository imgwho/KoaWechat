'use strict'
var Koa = require('koa')
var path = require('path')
var util = require('./libs/util')
var wechat = require('./wechat/g')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
var config = {
	wechat: {
		appID: 'wx8c43554401145f18',
		appSecret: '14f53993f118e7b3b79df20bbadfbe8f',
		token: 'imgwho',
		getAccessToken: function () {
			return util.readFileAsync(wechat_file)
		},
		saveAccessToken: function (data) {
			data = JSON.stringify(data)
			return util.writeFileAsync(wechat_file, data)
		}
	}
}
var app = new Koa()
app.use(wechat(config.wechat))
app.listen(1234)
console.log('listening：1234')