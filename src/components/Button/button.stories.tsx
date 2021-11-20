/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-18 14:29:55
 */
import React from 'react'
import { storiesOf,addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
 import {withInfo } from '@storybook/addon-info'
import Button from './button'
 addDecorator(withInfo)
const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </>
)
storiesOf('Button Component', module)
  .addDecorator(withInfo)
  .addParameters({
    info:{
      text:'this is a very nice component',
        inline:true
    }
  })
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)
