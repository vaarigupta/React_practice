import React from 'react';
// let App = () => {return(<h1>Hello Loki</h1>)}

class App extends React.Component
{
  render()
  { 
    return(
      <div>
          <h1>{this.props.text}</h1>
          <h3> {this.props.cat} </h3>
      </div>
        )
  }
}
App.defaultProps ={
   text : "Hey Loki",
   cat : 10
 }


export default App;

// there are two ways to export components either by making stateless function component using ()=>{} or by creating class component having render method in the React.Component library
//Everything in react is component similarly like we call elements for html
// we cannot return two jsx elements through render method bcz by doing this , jsx element cannot be translated to javascript it is like "React.createElement('h1',null,"Hilllo")",this statement is written two times ,then it cannot be translated to the javascript
//props are somewhat like attributes and values like text = "hello" , for evaluating this , we need to use reference pointer this along with "props" keyword and name of the props
//<h1>this.props.text</h1> this will render this.props.text not hello so we can say for evaluation of any props , we need to use curly braces always
 // React.createElement('h1',null,'hy') this is same as jsx element


// App.defaultProps is assigning the default values to the props when no value is assigned to them
// Bug in the following Code ->
// App.propTypes ={
//   text : React.PropTypes.string,
//   cat : React.PropTypes.number
// }



