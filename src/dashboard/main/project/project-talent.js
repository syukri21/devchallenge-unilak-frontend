import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const floatingItem = [
	{
		type : "UX",
		number : 1,
	},
	{
		type : "FE",
		number : 2,
	},
	{
		type : "BE",
		number : 0,
	},
	{
		type : "QA",
		number : 0,
	},

];

const vacantItem = [
	{
		type : "QA",
		number : 1,
	},
	{
		type : "FE",
		number : 2,
	},
	{
		type : "BE",
		number : 2,
	},
	{
		type : "MOBILE",
		number : 0,
	},

];


class Talent extends React.Component {
	render(){
		const classes = this.props.classes;

		return(
			<Card  className={classes.talent} >
				<CardHeader 
					title="Talent"
					>
				</CardHeader>
				<CardContent className={classes.talentContainer} >
					<CardContent className={classes.talentItem} >
						<Typography variant="subheading" align="center" >Floating</Typography>
						<Table>
							<TableBody>
							{floatingItem.map((e, i) => (
								<TableRow key={i}
										  style={{background: i%2===0 ? "lightskyblue" : "white" }} 
										   >
									<TableCell numeric={true} padding="dense"  >{e.type}</TableCell>
									<TableCell numeric={true} padding="dense"  >{e.number}</TableCell>
								</TableRow>
								))}
							</TableBody>
						</Table>
						<CardActions className={classes.actions}>
							<Button  variant="raised" color="primary"  >More</Button>
						</CardActions>
					</CardContent>
					<CardContent className={classes.talentItem} >
						<Typography variant="subheading" align="center"  >Vacant</Typography>
						<Table>
							<TableBody>
							{vacantItem.map((e, i) => (
								<TableRow key={i}
										  style={{background: i%2===0 ? "lightskyblue" : "white" }} 
										   >
									<TableCell numeric={true} padding="dense"  >{e.type}</TableCell>
									<TableCell numeric={true} padding="dense"  >{e.number}</TableCell>
								</TableRow>
								))}
							</TableBody>
						</Table>
						<CardActions className={classes.actions}>
							<Button  variant="raised" color="primary"  >More</Button>
						</CardActions>
					</CardContent>
				</CardContent>
			</Card>
		);
	}
}


export default Talent;