import React, { CSSProperties } from 'react'
import { Button, Modal } from 'antd'

export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <div style={styles}>欢迎使用</div>
        <br />
        <div style={styles}>西瓜酒店管理系统</div>
        {/* <Button type="primary" onClick={() => this.login()}>登录</Button> */}
      </div>
    )
  }
  login() {
    
  }
}

const styles: CSSProperties = {
  "textAlign": "center",
  'fontSize': '36px'
}