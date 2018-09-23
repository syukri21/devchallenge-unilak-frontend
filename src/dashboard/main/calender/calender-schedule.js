import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import {Query} from "react-apollo"
import {getDateEvent} from "../../../gql"
import Loader from "../loader/loader"
import moment from "moment"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Grid from '@material-ui/core/Grid';

class Schedule extends React.Component {


	displayEventSchedule(classes){
		return(<Query
			query={getDateEvent}
			>
			{
				({loading, data, error}) => {

					if (loading) return <div style={{position:"relative"}} > <Loader /> </div>;
					if (error) return <Typography variant="caption"> error.. </Typography>;
					return(
						<div  style={{marginTop:"20px"}} >
						{data.events.map((e, i) => {
						return(<Grid container key={i} spacing={24}  >
										<Grid item xs={1} >
										<Chip className="chip" label={i+1} />
										</Grid>
										<Grid item xs={3}  >
											<CardContent>
											<Typography
												variant="body1"
												>
												{moment(e.date).format("DD MMMM YYYY")}
											</Typography>
											</CardContent>
										</Grid>
										<Grid  item xs={8} >
											<Card style={{background: "#E0E0E077"}} >
												<CardContent>
												<Typography
													variant="subheading"
													>
													{e.description}
												</Typography>
												<CardActions>
													<Typography variant="caption" align="left">
														{e.location}
													</Typography>
															<Typography variant="body2" align="right">
																<Button  variant="raised" color="primary" >
													See More
													</Button>
												</Typography>
												</CardActions>
												</CardContent>
											</Card>
										</Grid>
									</Grid>
						)})}

							</div>

					)
				}
			}	

		</Query>)
	}
	render(){
		const classes = this.props.classes
		return(
			<Card>
				<CardContent>
					<CardHeader 
						title="Rabu, 6 Juni 2018"
						action={
							<Button
								variant="raised"
								size="large"
								color="primary"
								>
								Save
							</Button>
						}
						className={classes.scheduleTitle}
					>
					</CardHeader>
					<CardContent>
						<TextField
					          id="note"
					          label="Notes"
					          className={classes.userid}
					          margin="normal"
					          fullWidth={true}
					          multiline={true}
					          placeholder="Click here to write a note"
					          autoFocus={true}
						/>
					</CardContent>
				</CardContent>
				<CardContent>
					<Typography
						variant="subheading"
						color="secondary"
					>
						Event
					</Typography>
					
					{this.displayEventSchedule(classes)}
				</CardContent>
			</Card>
		)
	}
}


export default Schedule;