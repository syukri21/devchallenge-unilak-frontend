import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { graphql } from "react-apollo";
import { getBestProduct } from "../../../gql";
import Loader from "../loader/loader";


class BestProduct extends React.Component {
  bestProductDisplay() {
    let data = this.props.data;
    if (data.loading) {
      return <Loader />;
    } else {
      return (
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
              <TableCell numeric={true} padding="dense">
                {e.rating}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      );
    }
  }
  render() {
    const classes = this.props.classes;
    return (
      <Card className={classes.bproduck}>
        <CardHeader title="Best Product Performance" />
        <CardContent style={{ position: "relative" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell numeric={true} padding="dense">
                  No
                </TableCell>
                <TableCell>Nama Project</TableCell>
                <TableCell numeric={true} padding="dense">
                  Rate
                </TableCell>
              </TableRow>
            </TableHead>
            {this.bestProductDisplay()}
          </Table>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button variant="raised" color="primary">
            More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default graphql(getBestProduct)(BestProduct);
