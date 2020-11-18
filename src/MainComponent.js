import React , {Component}from "react";
import UserTable from "./Components/UserTable";
import AddUser from "./Components/AddUser";
// import {connect} from "react-redux";
import  {Person} from './Modals/Person' ;
import {Container , Row } from "react-bootstrap";


class Main extends Component {

    constructor(){
        super(); 
        this.replace = this.replace.bind(this); 
        this.add = this.add.bind(this);
    }

    state = {persons : 
        [
            new Person("max", "sss", 23),
            new Person("Elyess", "sss", 24)
        ]
    }
        
    add = (person) => {
        this.state.persons.push(person)
        this.setState({...this.state.persons})
    }

    replace = (newPersons) => {
        this.setState({
            persons : newPersons
        })
    } 


    render() {
        return (
            <Container fluid="md" style={{ marginTop: '8rem' }}>
                <Row md={{ span: 4, offset: 4 }}>
                    <AddUser add={this.add}/>
                </Row>
                <Row >
                    <UserTable persons={this.state.persons} replaceState={this.replace}/>
                </Row>
            </Container>
        )
    }
}

// const mapDispatchToProps = dispatch => {
    // return {
        // add : (p) => dispatch({type : 'CREATEUSER' , payload : p })
    // }
// }

// const mapStateToProps = state => {
    // return {
        // persons : state
    // };
// };

// replacing the component, strong coupling is the problem 

export default Main   ;