import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function BasicTable({ rows, headers, title }: any) {
  const rowKeys = Object.keys(rows[0]);
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header: string, index: number) => (
                <TableCell
                  sx={{ fontWeight: "bold" }}
                  align={"center"}
                  key={index}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, index: string) => (
              <TableRow key={index}>
                {rowKeys.map((key: string, index: number) => (
                  <TableCell key={index} align={"center"}>
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
