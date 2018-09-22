import React from "react"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import {withStyles} from "@material-ui/core/styles"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ApolloConsumer } from 'react-apollo';
import {getDescription} from "../../../gql";
import {Query} from "react-apollo";

const styles = theme => ({

})

class TeamDescription extends React.Component {

	state = {
		value : null,
		isLoad : false
	}

	displayTeamDescription(){

		return ( 
		<div>
		 	<Query
		    query={getDescription}
		    variables={{ "id" : this.state.value }}
		  	>
			    {({ loading, error, data, refetch, networkStatus }) => {
				     return (
					<TableBody  >
					     	<TableRow  >
								<TableCell padding="dense" >Description</TableCell>
								<TableCell padding="dense" type="number" >:</TableCell>
								<TableCell> <p> {!loading && data.project != null && data.project.description} </p></TableCell>
							</TableRow>
						   	<TableRow>
								<TableCell padding="dense" >Stake Holder</TableCell>
								<TableCell padding="dense" type="number" >:</TableCell>
								<TableCell  style={{minWidth: "300px"}} > {!loading && data.project != null && data.project.stakeholder} </TableCell>
							</TableRow>
						   	<TableRow>
								<TableCell padding="dense" >Stream</TableCell>
								<TableCell padding="dense" type="number" >:</TableCell>
								<TableCell> {!loading && data.project != null && data.project.sprint} </TableCell>
							</TableRow>
						   	<TableRow>
								<TableCell padding="dense" >Start Date</TableCell>
								<TableCell padding="dense" type="number" >:</TableCell>
								<TableCell> {!loading && data.project != null && data.project.stardate} </TableCell>
							</TableRow>
						   	<TableRow>
								<TableCell padding="dense" >End Date</TableCell>
								<TableCell padding="dense" type="number" >:</TableCell>
								<TableCell> {!loading && data.project != null && data.project.enddate} </TableCell>
							</TableRow>
					</TableBody>
				     	
					);
			    }}
			</Query>
	  	</div>
		  )
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			value : nextProps.passValue,
			isLoad : true
		});
	}

	render(){

		const {classes} = this.props
		return(
			<div  >
				<Table   >
					{ this.displayTeamDescription() }
				</Table>
			</div>
		);
	}
}


export default TeamDescription