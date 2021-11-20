/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-16 15:41:31
 */
import '../src/styles/index.scss'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}