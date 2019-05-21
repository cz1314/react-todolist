import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    const { handleItemDelete, index } = this.props
    handleItemDelete(index)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  render() {
    console.log('child render')
    const { content } = this.props
    return (
      <div
        onClick={this.handleClick}
      >
        {content}
      </div>
    )
  }
  //当一个组件从父组件接受了参数
  //只要父组件的render函数被重新执行了，这个就会执行
  //如果第一次存在父组件中，不会执行，第二次才会执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  //销毁
  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }
}

TodoItem.propTypes = {
  // test: PropTypes.string.isRequired,
  content: PropTypes.string,
  handleItemDelete: PropTypes.func,
  index: PropTypes.number
}

// TodoItem.defaultProps = {
//   test: 'hello world'
// }

export default TodoItem