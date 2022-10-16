import React, { Component } from 'react'
export default class 条件渲染
 extends Component {
    constructor(props){
        super(props)
        this.state={
            showTitle:true
        }
        // setTimeout(() => {
        //     this.setState=({
        //         showTitle:false
        //     })
        // }, 2000)
        
    }
  render() {
    let a= this.state.showTitle?<h2>{this.props.title}</h2>:null
    return (
      <div>
        <h1>条件渲染与数据循环</h1>
        {/* {this.state.showTitle?<h2>{this.props.title}</h2>:null} */}
        {a}
      </div>
    )
  }
}
