import React, {Component} from "react";
import {connect} from "react-redux";
import Button from 'react-bootstrap/Button';
import {Table} from "react-bootstrap";

const generateHeader = () => {
    return (
        <thead>
        <th>Name</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Actions</th>
        </thead>
    )
}

class UserTable extends Component {

    addMoney = (index) => {
        let newState = this.props.persons ;
        newState[index].paycheck();
        this.props.replaceState(newState);
    }

    CheckSavings = (e,index) => {
        e.preventDefault()
        let result =( this.props.persons[index].checkIfAvailable((e.target.previousElementSibling.value)));
        if (result) {
            (e.target.nextElementSibling.textContent="Yess, du hast genung Geld")
        } else {
            (e.target.nextElementSibling.textContent="nope, nope, nope mehr Geld brauchst du")
        }
        }


    render() {
        return (
        <Table striped bordered hover >
            {generateHeader()}  {console.log(this.state)}  {console.log(this.props.persons)}

           <tbody>
            {this.props.persons.map((person, index) =>  {

                return(
                    <tr>
                        <td>{person.getName()}</td>
                        <td>{person.getLastName()}</td>
                        <td>{person.getAge()}</td>
                        <td>
                            <Button onClick={()=> this.addMoney(index)}>PayCheck</Button>
                            <form>
                            <input id={index} type="number"  />
                            <Button onClick={(e) => this.CheckSavings(e,index)}>CheckSavings</Button>
                            <span></span>
                            </form>
                        </td>
                    </tr>
                )
            })
            }
            </tbody>
        </Table>
    )
}
}

const mapdispatchToProps = dispatch => {
    return {
        replaceState : (state) => dispatch({type : 'REPLACESTATE', payload: state})
    }
}

const mapStateToProps = state  => {
    return {
        persons : state.users
    }
}

export default connect(mapStateToProps,mapdispatchToProps)(UserTable) ;