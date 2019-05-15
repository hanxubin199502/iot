'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_ROOT: '"192.168.7.152:8970"',   //dev
    // API_ROOT: '"192.168.14.127:8970"',   

 
})
