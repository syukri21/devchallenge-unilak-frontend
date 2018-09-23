import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {calenderStyles} from "../../../styles";
import Timepicker from "./calender-timepicker";
import Schedule from "./calender-schedule";


class Calender extends React.Component {


	constructor(){
		super()
		this.state = {
			date: null,
		}
		this.getDate = this.getDate.bind(this);
	}


	getDate(e){
		this.setState({
			date : e,
		});
	}

	render(){
		const {classes} = this.props;
		return(
			<div className={classes.grid}>
				<Timepicker classes={classes} getDate={this.getDate} />
				<Schedule classes={classes}  />				
			</div>
		)
	}	
}


export default  withStyles(calenderStyles)(Calender);