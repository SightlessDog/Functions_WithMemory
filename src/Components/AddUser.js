import React, {useState} from "react";
import {Person} from '../Modals/Person' ;
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {connect} from "react-redux"; 

function AddUser (props) {
    const [name, setName] = useState();
    const [lastname, setLastName] = useState();
    const [age, setAge] = useState();

    const changeHandler = (e, toDo) => {
        toDo(e.target.value);
    }

    const submitHandler = () =>  {
        let p = new Person(name, lastname, age);
        props.add(p);
    }

    return (
        <InputGroup action="">
            <label>First name:</label>
            <FormControl type="text"  name="name" onChange={( e )=> changeHandler(e,setName)}/>
            <label >First name:</label>
            <FormControl type="text"  name="lastname" onChange={( e )=> changeHandler(e,setLastName)}/>
            <label >Age:</label>
            <FormControl type="number" name="age" onChange={( e )=> changeHandler(e,setAge)}/>
            <Button onClick={submitHandler} >Submit </Button>
        </InputGroup>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        add : (p) => dispatch({type : 'CREATEUSER', payload : p})
    }
}

export default connect(null, mapDispatchToProps)(AddUser) ;