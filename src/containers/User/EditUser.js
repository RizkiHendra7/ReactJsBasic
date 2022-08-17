import React, { Component } from 'react';
import {Container} from 'reactstrap'
import BackComponents from '../../components/BackComponents'

class UserDetail extends Component {
    render() {
        return (
            <Container>
                <BackComponents></BackComponents>
                <h1>Edit User</h1>
            </Container>
        );
    }
}

export default UserDetail;