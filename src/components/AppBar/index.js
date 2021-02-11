import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import classes from "*.module.css";

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
})

function CreateAppBar(props){

    return(
        <AppBar 
            position="fixed"
            className={classes.appBar}
        
        />
    );
}