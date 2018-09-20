import React from "react"
import {withStyles} from "@material-ui/core/styles"
import {projectStyles} from "../../../styles";
import Tables from "./project-table";
import Talent from "./project-talent";
import BestProduct from "./project-best-product";
import BestSquad from "./project-best-squad.js";

class Project extends React.Component {
	render(){

		const {classes} = this.props;

		return(
			<div className={classes.grid}>
				<Tables  classes={classes} />
				<BestSquad   classes={classes} />
				<BestProduct  classes={classes} />
				<Talent  classes={classes} />
			</div>
		);
	}
}


export default withStyles(projectStyles)(Project);