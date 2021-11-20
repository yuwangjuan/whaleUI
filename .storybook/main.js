/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-16 15:41:31
 */
module.exports = {
  "stories": [
    "../src/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/Button/*.stories.mdx",
    "../src/components/Button/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/Input/*.stories.mdx",
    "../src/components/Input/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app" ////安装才有样式
  ],
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  //   },
  // },
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['css-loader', 'sass-loader'],
  //     include: path.resolve(__dirname, '../'),
  //   });

  //   // Return the altered config
  //   return config;
  // },
}