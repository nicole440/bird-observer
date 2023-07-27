const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8082
  },
  publicPath: 'http://recording-fee-calculator.s3-website-us-east-1.amazonaws.com',
});
