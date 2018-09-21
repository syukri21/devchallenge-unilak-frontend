import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { graphql } from "react-apollo";
import { getQueryTempUser } from "../../../gql";
import Loader from "../loader/loader";

class TeamProject extends React.Component {
  constructor() {
    super();
    this.tempGetter = this.tempGetter.bind(this);
  }

  tempGetter() {
    let data = this.props.data;
    if (data.loading) {
      return (
        <Loader />
      );
    } else {
      return (
        <TableBody>
          {data.users.map((e, i) => (
            <TableRow
              key={i}
              style={{
                background: i % 2 === 0 ? "lightskyblue" : "white"
              }}
            >
              <TableCell numeric={true} padding="dense">
                {i + 1}
              </TableCell>
              <TableCell>{e.namalengkap}</TableCell>
              <TableCell>{e.stream}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      );
    }
  }

  render() {
    const classes = this.props.classes;
    return (
      <Card className={classes.teamProjectContainer}>
        <CardContent>
          <CardHeader
            title="Project"
            action={
              <TextField
                id="userid"
                label="Team"
                defaultValue="My Indihome Consumen"
                margin="normal"
              />
            }
          />
          <CardContent className={classes.containerItem}>
            <Typography variant="subheading" className={classes.l}>
              Description
            </Typography>
            <Typography variant="subheading" className={classes.m}>
              {" "}
              :{" "}
            </Typography>
            <Typography variant="subheading" className={classes.r}>
              {" "}
              This is a sample description about project{" "}
            </Typography>
          </CardContent>
          <CardContent className={classes.containerItem}>
            <Typography variant="subheading" className={classes.l}>
              Stack Holder
            </Typography>
            <Typography variant="subheading" className={classes.m}>
              {" "}
              :{" "}
            </Typography>
            <Typography variant="subheading" className={classes.r}>
              DEGM
            </Typography>
          </CardContent>
          <CardContent className={classes.containerItem}>
            <Typography variant="subheading" className={classes.l}>
              Sprint Now
            </Typography>
            <Typography variant="subheading" className={classes.m}>
              {" "}
              :{" "}
            </Typography>
            <Typography variant="subheading" className={classes.r}>
              4
            </Typography>
          </CardContent>
          <CardContent className={classes.containerItem}>
            <Typography variant="subheading" className={classes.l}>
              Start Date
            </Typography>
            <Typography variant="subheading" className={classes.m}>
              {" "}
              :{" "}
            </Typography>
            <Typography variant="subheading" className={classes.r}>
              06 December 2018
            </Typography>
          </CardContent>
          <CardContent className={classes.containerItem}>
            <Typography variant="subheading" className={classes.l}>
              End Date
            </Typography>
            <Typography variant="subheading" className={classes.m}>
              {" "}
              :{" "}
            </Typography>
            <Typography variant="subheading" className={classes.r}>
              22 December 2018
            </Typography>
          </CardContent>
        </CardContent>
        <CardContent>
          <CardHeader title="Member" />
          <CardContent>
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
