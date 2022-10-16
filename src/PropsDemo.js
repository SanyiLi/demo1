// import React, { Component } from 'react' 子组建的传递方法

// export default class PropsDemo extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.title}
//       </div>
//     )
//   }
// }

//函数的传递方法
// import React from 'react'

// export default function PropsDemo(props) {
//   return (
//     <div>PropsDem
//         {props.title}
//         o</div>
//   )
// }

//利用es6语句进行单独参数传递 接收参数的传递方法
import React from 'react'

export default function PropsDemo({title}) {
  return (
    <div>PropsDemo
        {title}
    </div>
  )
}
