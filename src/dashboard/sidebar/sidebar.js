import React from "react"
import Drawer from '@material-ui/core/Drawer';
import {withStyles} from "@material-ui/core/styles";
import {sidebarStyles} from "../../styles";
import classNames from 'classnames';
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';
import SidebarMenu from "./sidebarmenu";

class Sidebar extends React.Component {
	render(){
		const {classes} = this.props;
		const openState = false;
		return (
			   <Drawer  
		       variant="permanent" 
		         classes=
		        {{
		          paper: classNames(classes.drawerPaper, openState && classes.drawerPaperClose),
		        }}  
		       >
	               <div className={classes.blank}> 
	               		{!openState && <Typography variant="headline" align="center" >KodeX</Typography> }
	               		<Typography variant="subheading" align="right">
		               		Powered By  <Typography component={"span"}  variant="subheading">Telkom</Typography>
	               		</Typography>
	               </div>
			       <Divider  className={classes.divider} />
			       <SidebarMenu />
		       </Drawer>
		)
	}
}


export default withStyles(sidebarStyles)(Sidebar)