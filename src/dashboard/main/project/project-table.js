import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CardContent from "@material-ui/core/CardContent";


const temp = [
	{
		nama : "Teman Berbagi",
		unit : "TNT",
		stakeholder : "TNT",
		sprint : 15,
		status : "Complete",
	},
	{
		nama : "IndiHome",
		unit : "Consumer",
		stakeholder : "Consumer",
		sprint : 12,
		status : "Rejected",
	},
	{
		nama : "Bulir",
		unit : "TNT",
		stakeholder : "TNT",
		sprint : 15,
		status : "On Going",
	},
	{
		nama : "Dashboard Clap",
		unit : "Consumer",
		stakeholder : "Consumer",
		sprint : 12,
		status : "In Queue",
	},
];


class Tables extends React.Component {
	render(){
		const classes = this.props.classes;
		return(
			<Card  className={classes.table} >
				<CardHeader 
				title="Queue All Project"
				>
				</CardHeader>
				<CardContent>
					 <Table>
				        <TableHead>
				          <TableRow>
				            <TableCell numeric={true}   padding="dense" >No</TableCell>
				            <TableCell>Nama Project</TableCell>
				            <TableCell>Unit</TableCell>
				            <TableCell>Stakeholder</TableCell>
				            <TableCell numeric={true}   padding="dense" >Sprint</TableCell>
				            <TableCell>Status</TableCell>
				          </TableRow>
				        </TableHead>
				        <TableBody>
				          {temp.map((e, i) => (
				            <TableRow 
				            	key={i} 
				            	style={{background: i%2===0 ? "lightskyblue" : "white" }} 
				            	>				            
				              <TableCell numeric={true}   padding="dense" >{i+1}</TableCell>
				              <TableCell>{e.nama}</TableCell>
				              <TableCell>{e.unit}</TableCell>
				              <TableCell>{e.stakeholder}</TableCell>
				              <TableCell numeric={true}   padding="dense" >{e.sprint}</TableCell>
				              <TableCell>{e.status}</TableCell>
				            </TableRow>
				          ))}
				        </TableBody>
				      </Table>
				</CardContent>

			</Card>
		);
	}
}

export default Tables;