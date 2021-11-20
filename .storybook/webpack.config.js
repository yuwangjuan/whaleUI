/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-18 14:15:23
 */
/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-18 14:15:23
 */
// module.exports = ({ config }) => {
//     config.module.rules.push({
//       test: /\.tsx?$/,
//       use: [
//         {
//           loader: require.resolve("babel-loader"),
//           options: {
//             presets: [require.resolve("babel-preset-react-app")]
//           }
//         }, 
//         {
//           loader: require.resolve("react-docgen-typescript-loader"),
//           options: {
//             shouldExtractLiteralValuesFromEnum: true,
//             propFilter: (prop) => {
//               if (prop.parent) {
//                 return !prop.parent.fileName.includes('node_modules')
//               }
//               return true            
//             }
//           }
//         }
//       ]
//     });
  
//     config.resolve.extensions.push(".ts", ".tsx");
  
//     return config;
//   };