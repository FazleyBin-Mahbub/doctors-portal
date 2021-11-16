import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Appoinments = ({ date }) => {
  const { user, token } = useAuth();
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/appointments?patientEmail=${user.email}&date=${date}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppoinments(data));
  }, [date]);
  return (
    <div>
      <h1>Appoinments: {appoinments.length}</h1>
      <TableContainer component={Paper}>
        <Table aria-label="appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Schedule</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appoinments.map((appoinment) => (
              <TableRow
                key={appoinment?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {appoinment?.patientName}
                </TableCell>
                <TableCell align="right">{appoinment?.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appoinments;
