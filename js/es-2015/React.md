# Installing
## Installing react and babel
```bash
npm init
npm install --save react react-dom babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0
```

## Configure .babelrc
```json
{
  "presets": ["es2015", "react", "stage-0"],
  "compact": true
}
```

## Hello world component
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

# Component style
## Function based component
```javascript
import React from 'react';

export default = () => <h1>Hello world</h1>
```
## Class based component
```javascript
import React from 'react'

export default class Example extends React.Component{
  render(){
    return <h1>Hello world</h1>
  }
}
```

# Component Lifecycle
## Mounting
These methods are called when an instance of a component is being created and inserted into the DOM:

* constructor(props)
* componentWillMount()
* render()
* componentDidMount()

## Updating
An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

* componentWillReceiveProps(nextProps)
* shouldComponentUpdate(nextProps, nextState)
* componentWillUpdate(nextProps, nextState)
* render()
* componentDidUpdate(prevProps, prevState)

## Unmounting
This method is called when a component is being removed from the DOM:

* componentWillUnmount()

## Changing object's state

* setState(updater, [callback])
