import React from 'react'
import { withRouter } from 'react-router-dom'

//這是一個類別型元件，要夾在switch中
// 頁面切換時要用捲軸讓頁面回到最上方
class VScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(VScrollToTop)