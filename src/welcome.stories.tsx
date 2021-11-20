/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-20 17:07:17
 */
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到whaleUI组件库</h1>
        <p>whaleUI 目前还在孵化阶段，欢迎大家积极参与开发</p>
        <h3>安装试试</h3>
        <code>
          npm install whaleUI --save
        </code>

        
        <h3>使用</h3>
        <p> 加载样式</p>
        <code>
         
          import 'whaleUI/dist/index.css'
         
        </code>
        <p> 引入组件
        </p>
        <code>  import "{" Button "}" from 'whaleUI'</code>
      </>
    )
  }, { info : { disable: true }})