import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CardContent from "@material-ui/core/CardContent";

const temp = [
  {
    nama: "Budi Artanto",
    stream: "Backend",
    pointBurn: 105,
    pointRemaining: 30,
    pointQueue: 30
  },
  {
    nama: "Tono Budiman",
    stream: "Backend",
    pointBurn: 102,
    pointRemaining: 32,
    pointQueue: 12
  },
  {
    nama: "Wawan Aja",
    stream: "Frontend",
    pointBurn: 109,
    pointRemaining: 35,
    pointQueue: 25
  }
];

class BestTalentPeformance extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title="Best Talent Peformance" />
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell numeric={true} padding="dense">
                  No
                </TableCell>
                <TableCell>Nama</TableCell>
                <TableCell>Stream</TableCell>
                <TableCell numeric={true} padding="dense">
                  Point Burn
                </TableCell>
                <TableCell numeric={true} padding="dense">
                  Point Remaining
                </TableCell>
                <TableCell numeric={true} padding="dense">
                  Point Queue
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {temp.map((e, i) => (
                <TableRow
                  key={i}
                  style={{ background: i % 2 === 0 ? "lightskyblue" : "white" }}
                >
                  <TableCell numeric={true} padding="dense">
                    {i + 1}
                  </TableCell>
                  <TableCell>{e.nama}</TableCell>
                  <TableCell>{e.stream}</TableCell>
                  <TableCell numeric={true} padding="dense">
                    {e.pointBurn}
                  </TableCell>
                  <TableCell numeric={true} padding="dense">
                    {e.pointRemaining}
                  </TableCell>
                  <TableCell numeric={true} padding="dense">
                    {e.pointQueue}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default BestTalentPeformance;
