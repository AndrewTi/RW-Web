import React from 'react';
import { Paper, withStyles, Grid, TextField, Button} from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'

import {Link} from 'react-router-dom'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit,
        width: "500px",
        height: "350px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    
    },
    button:{
        marginTop: "50px"
    },
    input: {
        fontSize: "14px"
    },
    h1: {
        textAlign: "center",
        color: "#7e9cdc"
    }
});

class LoginTab extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <h1 className={classes.h1}>Authorization</h1>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className={classes.input} id="username" label="Username" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className={classes.input} id="username" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                </div>
                    <Grid className={classes.button} container justify="center">
                        <Link to="/main-page">
                            <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                        </Link>
                    </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(LoginTab);