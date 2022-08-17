import React, { Component } from 'react';
import {Container} from 'reactstrap';
import BackComponents from '../../components/BackComponents'

class Index extends Component {
    render() {
        return (
            <Container>
                <BackComponents></BackComponents>
                <h1>Create User</h1>
            </Container>
        );
    }
}

export default Index;