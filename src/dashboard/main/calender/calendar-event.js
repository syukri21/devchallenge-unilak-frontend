
import React from "react"
import Calendar from "react-calendar"
import moment from "moment"
import {getDateEvent} from "../../../gql"
import {graphql} from "react-apollo"
import _ from "lodash"
const styled =  ({
	position: "absolute",
	width: "30px",
	height: "30px",
	background: "#FF7777",
	borderRadius: "100%",
	transform: "translateY(-22.25px) translateX(4px)",
	opacity: "0.4"
})

class CalendarEvent extends React.Component {

	constructor(){
		super()
		this.state = {
			data : [],
		}
		this.cekTileContent = this.cekTileContent.bind(this);

	}

	componentDidMount() {
		const data = this.props.data
		let arrayDate = [];
		if(!data.loading) {
			data.events.map((e, i) => arrayDate.push(moment(e.date).format("YYYY-MM-DD") ) )
			this.setState({
				data : arrayDate
			})
			
		}
	}

	componentWillReceiveProps(nextProps) {
		const data = nextProps.data
		let arrayDate = [];
		if(!data.loading) {
			data.events.map((e, i) => arrayDate.push(moment(e.date).format("YYYY-MM-DD") ) )
			this.setState({
				data : arrayDate
			})
			
		}

	}

	cekTileContent(date, view){



		if (this.state.data.length != 0){

			return  view === 'month' && _.includes(this.state.data,  moment(date).format("YYYY-MM-DD")) 

		}

	
		
	}


	render(){
		console.log(this.state.data)
		return(
		<Calendar 
				activeStartDate = {moment(this.props.date).toDate()}
				onChange = {e => this.props.onChange(e)}
				tileClassName = "tileDate"
				tileContent = {({ date, view }) => this.cekTileContent(date, view) ? <div style={styled} >  </div> : null }
			/>

		)
	}
}


export default graphql(getDateEvent)(CalendarEvent);