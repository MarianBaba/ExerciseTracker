
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../images/unnamed.png";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    rootDiv: {
        backgroundColor:"rgb(30,30,30)",
    },
    root: {
        textAlign:"center",
        paddingTop:20,
        textDecoration:"none"
    },
    container: {
        textAlign:"center", 
        marginTop:30, 
        paddingBottom:5
    },
    headLink: {
        fontFamily: "Jura",
        fontSize:60, 
        textDecoration:"none", 
        color:"rgb(255,180,0)", 
        padding:60,
        "&:hover": {
            textDecoration:"none",
            color:"rgb(255, 120, 0)"
        }
    },
    gridItems: {
        marginBottom:10
    },
    navButtons: {
        fontSize: 18,
        backgroundColor:"rgb(40,40,40)",
        padding: 10, 
        border:"1px solid rgb(255,120,0)",
        "&:hover": {
            border:"1px solid rgb(255,200,0)",
            backgroundColor:"rgb(30,30,30)"
        }
    },
    buttonLinks: {
        color:"rgb(255,180,0)",
        "&:hover":{
        textDecoration:"none",
        color:"rgb(255,180,0)"
        }
    }
})

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
                <div className={classes.rootDiv}>
                    <Grid container className={classes.root}>
                        <Grid item xs={12} sm={4}>
                            <img src={img} height="120px"></img>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Link className={classes.headLink} to="/">
                                ExercTracker
                            </Link>    
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <img src="https://i.dlpng.com/static/png/6489567_preview.png" height="135px"></img>
                        </Grid>
                    </Grid>               
                    <Grid container className={classes.container}>
                        <Grid item xs={12} sm={4} className={classes.gridItems}>
                            <Button className={classes.navButtons}>
                                <Link className={classes.buttonLinks} to="/">
                                    View Exercises
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.gridItems}>
                            <Button className={classes.navButtons}>
                                <Link className={classes.buttonLinks} to="/create">
                                    Create Exercise
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.gridItems}>
                            <Button className={classes.navButtons}>
                                <Link className={classes.buttonLinks} to="/user">
                                    Create User
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
        )
    }
}

export default withStyles(styles)(Navbar);