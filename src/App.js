import logo from './logo.svg';
import './App.css';
import {Button} from "antd";
import TodoList from "./TodoList";
import { Typography } from 'antd';
import AddToDoForm from "./AddToDoForm";

// TODO remove mock data
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
function App() {

  return (
   <div>
       <Typography.Title>My todo list</Typography.Title>
       <AddToDoForm onAddTodo={(value) => {
           console.log(value);
       }}/>
       <TodoList data={data}/>

   </div>
  );
}

export default App;
