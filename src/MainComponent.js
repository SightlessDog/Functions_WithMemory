import React , {Component}from "react";
import UserTable from "./Components/UserTable";
import AddUser from "./Components/AddUser";
import {Container , Row } from "react-bootstrap";

class Main extends Component {

    render() {
        return (
            <Container fluid="md" style={{ marginTop: '8rem' }}>
                <Row md={{ span: 4, offset: 4 }}>
                    <AddUser />
                </Row>
                <Row >
                    <UserTable />
                </Row>
            </Container>
        )
    }
}

export default Main   ;