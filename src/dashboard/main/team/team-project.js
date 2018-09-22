import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { graphql, compose } from "react-apollo";
import { getQueryTempUser, getDescription, getOneUser, getUidProject } from "../../../gql";
import Loader from "../loader/loader";
import TeamSelectDropdown from "./team-select-dropdown";
import TeamDescription from "./team-description";
import {Query} from "react-apollo";


class TeamProject extends React.Component {
  constructor() {
    super();
    this.tempGetter = this.tempGetter.bind(this);
    this.state = {
      value : null,
      data : null
    };
    this.getValue = this.getValue.bind(this);
    this.getUid = this.getUid.bind(this);
  }

  getValue(e) {
    this.setState({
      value : e
    });
  }




  getUid(data){
    if(data.project === null)return <span>Choose Project ..</span>
    return(
        data.project.uid.map((e, i) => 
       <Query 
          query={getOneUser}
          variables={{
                "id": "papamintasaham"
              }}
            >
            {
              ({loading, data}) => 
              ( 
              <TableRow key={i} >
                {console.log(e)}
              </TableRow>
              )
            }
        </Query>
         )
    )

    }


  tempGetter() {
      return (
        <TableBody>
          <Query
          query={getUidProject}
          variables={{
            "id": this.state.value
          }}
          >
          {({loading, data, error}) => {
            if (loading) return <Typography variant="caption" > loading... </Typography>
            return (
              <div>
              {this.getUid(data)}
              </div>
            )
          }
          }
          </Query>
        </TableBody>
      );
    }
  

  render() {
    const classes = this.props.classes;
    return (
      <Card className={classes.teamProjectContainer}>
        <CardContent  >
          <CardHeader
            title="Project"
            action={<TeamSelectDropdown getValue={this.getValue} />}
          />
          <TeamDescription classed={classes} passValue={this.state.value} />
        </CardContent>
        <CardContent>
          <CardHeader title="Member" />
          <CardContent style={{ position: "relative" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell numeric={true} padding="dense">
                    No
                  </TableCell>
                  <TableCell>Nama</TableCell>
                  <TableCell>Stream</TableCell>
                </TableRow>
              </TableHead>
              {this.tempGetter()}
            </Table>
          </CardContent>
        </CardContent>
      </Card>
    );
  }
}

export default graphql(getQueryTempUser)(TeamProject);
