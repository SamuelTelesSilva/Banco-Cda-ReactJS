import React from 'react';
import {Grid} from './styles';
import AreaTexto from '../AreaTexto/index';
import MenuList from '../MenuList/index';
import AreaLogo from '../AreaLogo/index';
import AreaForm from '../AreaForm';

const Layout = () => {
    return (
        <Grid>
           <AreaTexto/>
           <MenuList />
           <AreaLogo />
           <AreaForm />
        </Grid>
    );
};
export default Layout;