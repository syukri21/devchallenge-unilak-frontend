import React from "react"
import {withStyles} from "@material-ui/core/styles";
import {teamStyles} from "../../../styles"
import BestTalentPeformance from "./team-best-talent-peformance";
import TeamProject from "./team-project";


class Team extends React.Component {
	render(){
		const {classes} = this.props
		return(
			<div className={classes.grid}>
				<TeamProject classes={classes} />
				<BestTalentPeformance classes={classes}  />				
			</div>
		);
	}
}

export default withStyles(teamStyles)(Team);