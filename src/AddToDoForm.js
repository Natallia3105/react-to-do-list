import {Button, Input} from "antd";
import {useState} from "react";

const AddToDoForm = ({onAddTodo}) => {
    const [value, setValue] = useState();

    return <div style={{maxWidth:300, marginBottom:50}}>
        <Input onChange={(e) => setValue(e.target.value)} placeholder="Add todo"/>
        <Button onClick={() => {onAddTodo(value)}} type="primary" style={{marginTop:20}}>Add</Button>
    </div>
}
export default AddToDoForm