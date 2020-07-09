import React , {Component}from "react";
import UserTable from "./Components/UserTable";
import AddUser from "./Components/AddUser";
import {connect} from "react-redux";
import  {Person} from './Modals/Person' ;
import {Container , Row , Col} from "react-bootstrap";


const persons = [
    new Person("salim","sss",23),
    new Person("Elyess", "sss" , 24)
]





class Main extends Component {

    render() {
        return (
            <Container fluid="md" style={{ marginTop: '8rem' }}>
                <Row md={{ span: 4, offset: 4 }}>
                    <AddUser add = {this.props.add}/>
                </Row>
                <Row >
                    <UserTable />
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add : (p) => dispatch({type : 'CREATEUSER' , payload : p })
    }
}

const mapStateToProps = state => {
    return {
        persons : state
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)   ;