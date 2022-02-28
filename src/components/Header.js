import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@mui/material/';

class Header extends React.Component {
    render() {
        return(
            <Grid container className="header">
                <Grid item md={10} sm={8} xs={8} style={{paddingTop:'1%'}}>
                    <span style={{color:'#128DD2',fontSize:'2em',fontWeight:'650',paddingLeft:'5%'}}>Signal2Fix</span>
                </Grid>
                <Grid item md={2} sm={4} xs={4} style={{paddingTop:'1%'}}>
                    <Link to="/logout" ><span>Déconnexion</span></Link>
                </Grid>
            </Grid>
        );
    }
}

export default Header;