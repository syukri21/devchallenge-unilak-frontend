import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";


const temp = [
	{
		nama : "Myindihome",
		rate : 3,
	},
	{
		nama : "Sobat BUMN",
		rate : 1,
	},
	{
		nama : "Open Trip",
		rate : 2,
	},
	{
		nama : "ODP Hunter",
		rate : 5,
	},
	{
		nama : "SIIS",
		rate : 6,
	},

]

class BestProduct extends React.Component {
	render(){
		const classes = this.props.classes;
		return(
			<Card className={classes.bproduck}  >
				<CardHeader 
					title="Best Product Performance"
					>
				</CardHeader>
				<CardContent>
					<Table>
				        <TableHead>
				          <TableRow>
				            <TableCell numeric={true}   padding="dense" >No</TableCell>
				            <TableCell>Nama Project</TableCell>
				            <TableCell numeric={true}   padding="dense" >Rate</TableCell>
				          </TableRow>
				        </TableHead>
				        <TableBody>
				          {temp.map((e, i) => (
				            <TableRow 
				            	key={i} 
				            	style={{background: i%2===0 ? "lightskyblue" : "white" }} 
				            	>				            
				              <TableCell numeric={true} padding="dense" >{i+1}</TableCell>
				              <TableCell>{e.nama}</TableCell>
				              <TableCell numeric={true}   padding="dense" >{e.rate}</TableCell>
				            </TableRow>
				          ))}
				        </TableBody>
				      </Table>
				</CardContent>
				<CardActions className={classes.actions}>
					<Button  variant="raised" color="primary"  >More</Button>
				</CardActions>
			</Card>
		);
	}
}


export default BestProduct;