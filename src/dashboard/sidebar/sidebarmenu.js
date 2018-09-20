import React from "react"
import Button from "@material-ui/core/Button";
import {withStyles}  from "@material-ui/core/styles";
import {sidebarMenuStyles} from "../../styles.js";
import {Link} from "react-router-dom"

class SidebarMenu extends React.Component {

	render(){

		const {classes} = this.props;

		return(
			<div className={classes.root}  >
				<Button fullWidth  
						component={Link}  
						to="/dashboard/project"         
						>
						Project
				</Button>
				<Button fullWidth  
						component={Link}  
						to="/dashboard/team-peformance" 
						>
						Team Performance
				</Button>
				<Button fullWidth  
						component={Link}  
						to="/dashboard/calender"        
						>
						Calender
				</Button>
			</div>
		)
	}
}


export default   withStyles(sidebarMenuStyles)(SidebarMenu);