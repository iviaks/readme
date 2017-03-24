```javascript
import React from 'react'

class CustomComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        // State of component
    }
  }

  componentWillMount(){
    // Code will execute before mounting component
  }

  componentDidMount(){
    // Code will execute after mounting component
  }


  componentWillUnmount(){
    // Code will execute when component unmount
  }

  render(){
    // Rendered component code
  }
}

export default CustomComponent;
```
