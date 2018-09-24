import React from "react"
import {withStyles} from "@material-ui/core/styles";
import {teamStyles} from "../../../styles"
import BestTalentPeformance from "./team-best-talent-peformance";
import TeamProject from "./team-project";
import TeamMemberDescription from "./team-member-description"


class Team extends React.Component {

	constructor(){
		super()
		this.state = {
			data : null,
			open: false
		}
		this.getUid = this.getUid.bind(this)
	}

	displayMember(e, nama){
		this.setState({
			open: e,
			nama: nama
		});
	}

	getUid(e){
		this.setState({
			data : e
		});
	}

	render(){
		const {classes} = this.props
		return(
			<div className={classes.grid}>
				<TeamProject classes={classes}  getUid={(e) => this.getUid(e)} />
				<BestTalentPeformance classes={classes} passUid={this.state.data}  displayMember={(e, nama) => this.displayMember(e, nama)} />	
				<TeamMemberDescription open={this.state.open}   handleClose={() => {this.setState({open: false});}} user={this.state.nama} />			
			</div>
		);
	}
}

export default withStyles(teamStyles)(Team);
