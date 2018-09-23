import React from "react";
import {withStyles}  from "@material-ui/core/styles";
import {loaderStyles} from "../../../styles";
import LinearProgress from "@material-ui/core/LinearProgress"
class Loader extends React.Component {
 	render(){
 		const {classes} = this.props;
		return(	
			<div className={classes.root}>
		        <LinearProgress 
		            classes={{
		              colorPrimary: classes.colorPrimary,
		              barColorPrimary: classes.barColorPrimary
		            }}
	          	/>
        	</div>
		);
	}
}

export default withStyles(loaderStyles)(Loader);