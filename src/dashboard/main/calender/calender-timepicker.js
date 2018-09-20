import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableBody from "@material-ui/core/TableBody"
import Calendar from "react-calendar"
import TextField from "@material-ui/core/TextField"
import moment from "moment";

class Timepicker extends React.Component {



	constructor (){
		super()
		this.state = {
			date : moment().format("YYYY-MM-DD[T]HH:mm:ss")
		}
		this.changeDate = this.changeDate.bind(this);
	}
	
	changeDate (e){
		this.setState({
			date :e.target.value

		});

	}

	render(){
		const classes = this.props.classes
		console.log(this.state.date)

		return(
			<Card>
				<CardContent>
					<CardHeader
						title="Date"
					>
					</CardHeader>
				</CardContent>
				<CardContent className={classes.calenderContainer} >
					<TextField
				        id="date"
				        label="Date"
				        type="datetime-local"
				        onChange={e  => this.changeDate(e)}
				        defaultValue={this.state.date}
				        className={classes.textField}
				        InputLabelProps={{
				          shrink: true,
				        }}
				    /> 
				</CardContent>
				<CardContent className={classes.calenderContainer} >
					<Calendar 
						activeStartDate = {moment(this.state.date).toDate()}

					/>
				</CardContent>
			</Card>
		);
	}
}


export default Timepicker;