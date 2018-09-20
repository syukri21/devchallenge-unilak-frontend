import React from "react"
import Sidebar from "./sidebar/sidebar"
import {dashboardStyles} from "../styles";
import {withStyles} from "@material-ui/core/styles";
import Main from "./main/main"

class Dashboard extends React.Component {

	render(){
		const { classes } = this.props;
		return (
	     <div className={classes.root}>
	        <Sidebar  />
	        <div className={classes.content}>
	          <Main />
	        </div>
	      </div>
		);
	}
}

export default withStyles(dashboardStyles)(Dashboard);