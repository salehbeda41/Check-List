import React,{Component} from 'react';
import TodoItems from './Components/todo items/todoitems';
import AddItem from './Components/add item/additem';
class App extends Component{
  state = {
     items:[
      {id:1,name:"saleh",age:22},
      {id:2,name:"mohamed",age:20},
      {id:3,name:"mahmoud",age:20}

     ]
  }

  deleteItem=(id)=>{
      // let items=this.state.items;
      // let i =items.findIndex(item => item.id === id);
      // items.splice(i,1);
      // this.setState(items);
      let items =this.state.items.filter(item => {
        return item.id !== id;
      })
      this.setState({items});


  }

  addItem=(item)=>{
    item.id=Math.random();
      let items =this.state.items;
      items.push(item);
      this.setState(items); 
  } 

  render(){
    return (
      <div className="App container">
        <h1 className='text-center'>Check List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
  
}

export default App;
