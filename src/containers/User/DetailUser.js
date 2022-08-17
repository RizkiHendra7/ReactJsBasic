import React, { Component } from 'react';
import {Container} from 'reactstrap'
import BackComponents from '../../components/BackComponents'


class DetailUser extends Component {
    render() {
        return (
            <Container>
                <BackComponents></BackComponents>
                <h1>Detail User</h1>
            </Container>
        );
    }
}

export default DetailUser;