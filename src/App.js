// import React, { Component } from 'react'
// import PropsDemo from './PropsDemo'
// import CondationLoop from './CondationLoop'

// export default class App extends Component {
//     constructor(props){//构造函数 
//         super(props)//这里继承了父组建
//         this.state={
//             msg1:"woshilalal",
//             count:0
//         }
//     }
//     //这里这么写也是可以的
//     // state={
//     //     msg1:'你好呀我是来来来'
//     // }
//     componentDidMount(){//生命周期
//         this.setState({
//             count:this.state.count+1
//         },()=>{
//             console.log(this.state.count)
//         })
//         console.log(this.state.count)
//     }
//     render() {
//         const msg= '12345'//直接赋值
//         return (
//         <div>
//             <p>我是你爹</p>
//             {msg}
//             <h1>{this.state.msg1}</h1>
//             <h2>{this.state.count}</h2>
//             <PropsDemo title="woshinidie123324324"></PropsDemo>
//             <CondationLoop title="条件渲染"></CondationLoop>
//         </div>
//         )
//     }
// }

// import React, { Component } from 'react'
// import Button from 'antd/lib/button'
// import 'antd/dist/antd.less'
// export default class 
//  extends Component {
//   render() {
//     return (
//       <div>
//        <h1>演示ANTD组件库的使用</h1> 
//        <button type='primary'></button>
//       </div>
//     )
//   }
// }

