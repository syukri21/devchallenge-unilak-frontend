import React from "react"
import {Route, Switch} from 'react-router-dom'
import Project from "./project/project"
import Calender from "./calender/calender"
import Team from "./team/team"


class Main extends React.Component {
	render(){
		return(
			<div style={{ width: "100%" }}>
				<Switch>
					<Route 
						exact
						path="/dashboard"
						component={Project}
					/>
					<Route  
						path="/dashboard/project"  
						component={Project} 
					/>
					<Route  
						path="/dashboard/team-peformance"  
						component={Team} 
					/>
					<Route  
						path="/dashboard/calender"  
						component={Calender} 
					/>
				</Switch>
			</div>
		);
	}
}


export default Main;