import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
class Schedule extends React.Component {
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
					<CardContent className={classes.scheduleDetail} >
						<div>
							<div className="chip-">
								<Chip className="chip" label="1" />
							</div>
							<Typography
								variant="body1"
								>
								4 Juni 10.00 AM
							</Typography>
						</div>
						<div>
							<Typography
								variant="subheading"
								style={{padding: "10px"}}
								>
								Bertemu dengan pak rudi di bandara halim membawa dokumen terkait project
							</Typography>
							<CardActions>
								<Typography variant="caption" align="left">
									Bandara Halim Kusuma
								</Typography>
								<Typography variant="body2" align="right">
									<Button  variant="raised" color="primary" >
									See More
									</Button>
								</Typography>
							</CardActions>
						</div>	
					</CardContent>
					<CardContent className={classes.scheduleDetail} >
						<div>
							<div className="chip-container" > 
								<Chip className="chip" label="1" />
							</div>
							<Typography
								variant="body1"
								>
								4 Juni 10.00 AM
							</Typography>
						</div>
						<div>
							<Typography
								variant="subheading"
								style={{padding: "10px"}}
								>
								Bertemu dengan pak rudi di bandara halim membawa dokumen terkait project
							</Typography>
							<CardActions>
								<Typography variant="caption" align="left">
									Bandara Halim Kusuma
								</Typography>
								<Typography variant="body2" align="right">
									<Button  variant="raised" color="primary" >
									See More
									</Button>
								</Typography>
							</CardActions>
						</div>	
					</CardContent>
				</CardContent>
			</Card>
		)
	}
}


export default Schedule;