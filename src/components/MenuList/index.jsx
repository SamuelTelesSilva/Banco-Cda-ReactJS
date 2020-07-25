import React from 'react';
import {Container, Button} from './styles';

const MenuList = () => {
    return (
        <Container>
            <Button>Home</Button>
            <Button>Consultar Saldo</Button>
            <Button>Sacar</Button>
            <Button>Depositar</Button>
            <Button>Extrato</Button>
        </Container>
    );
};
export default MenuList;