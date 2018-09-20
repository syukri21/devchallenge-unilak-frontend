import React from "react";
import {withStyles} from "@material-ui/core/styles"
import {headerStyles} from "../../styles"
import AppBar from "@material-ui/core/AppBar";
import classNames from "classnames";

class Header extends React.Component {

	state = {
		open : false
	}

	render(){
		const {classes} = this.props;
		return(

			<AppBar
		        position="absolute"
		        className={classNames(
		          classes.appBar,
		          !this.state.open && classes.appBarShift
		        )}
		    >

		    </AppBar>

		)
	}
}


export default withStyles(headerStyles)(Header);