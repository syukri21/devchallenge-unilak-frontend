import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CardContent from "@material-ui/core/CardContent";
import { graphql } from "react-apollo";
import { getQueueAllProjects } from "../../../gql";
import Loader from "../loader/loader";

class Tables extends React.Component {
  getQueueAllProjectsDisplay() {
    let data = this.props.data;
    if (data.loading) {
      return <Loader />;
    } else {
      return (

              <Table>
            <TableHead>
              <TableRow>
                <TableCell numeric={true} padding="dense">
                  No
                </TableCell>
                <TableCell>Nama Project</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Stakeholder</TableCell>
                <TableCell numeric={true} padding="dense">
                  Sprint
                </TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
                    <TableBody>
          {data.projects.map((e, i) => (
            <TableRow
              key={i}
              style={{ background: i % 2 === 0 ? "lightskyblue" : "white" }}
            >
              <TableCell numeric={true} padding="dense">
                {i + 1}
              </TableCell>
              <TableCell>{e.projectnama}</TableCell>
              <TableCell>{e.unit}</TableCell>
              <TableCell>{e.stakeholder}</TableCell>
              <TableCell numeric={true} padding="dense">
                {e.sprint}
              </TableCell>
              <TableCell>{e.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>

          </Table>

      );
    }
  }
  render() {
    const classes = this.props.classes;
    return (
      <Card className={classes.table}>
        <CardHeader title="Queue All Project" />
        <CardContent className={classes.contentTable}>
        {this.getQueueAllProjectsDisplay()}
        </CardContent>
      </Card>
    );
  }
}

export default graphql(getQueueAllProjects)(Tables);
