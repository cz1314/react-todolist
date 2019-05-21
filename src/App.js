import React, { Fragment } from 'react'
import './style.css'
import './TodoItem.js'
// import axios from 'axios'
import TodoItem from './TodoItem'
// import Test from './Test'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  handleInputChange(e) {
    // const value = e.target.value
    const value = this.input.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          content={item}
          key={index}
          index={index}
          handleItemDelete={this.handleItemDelete}
        />
      )
    })
  }
  render() {
    console.log('render')
    return (
      <Fragment>
        <div>
          <label html="insertArea">输入内容</label>
          <input
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        {/* <Test content={this.state.inputValue} /> */}
      </Fragment>
    );
  }
  // 挂载前
  componentWillMount() {
    console.log('componentWillMount')
  }
  // 挂载后,ajax放在这里
  componentDidMount() {
    console.log('componentDidMount')
    // axios.get('/api/todolist')
    //   .then((res) => {
    //     this.setState(() => {
    //       return {
    //         list: [...res.data]
    //       }
    //     })
    //   })
    //   .catch(() => {alert('error')})
  }
  // 组件更新前，自动执行,false为不更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  //组件更新前，shouldComponentUpdate返回true执行
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  //组件更新完成后执行
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  //顶层组件不执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
}
export default App;
