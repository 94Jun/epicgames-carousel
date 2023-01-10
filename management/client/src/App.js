import "./App.css";
import Customer from "./components/Customer";
import { Table, TableBody, TableHead, TableCell, TableRow, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import CustomerAdd from "./components/CustomerAdd";

function App() {
  const [customers, setCustomers] = useState(null);
  const [completed, setCompleted] = useState(0);
  const getCustomers = async () => {
    const response = await fetch("api/customers");
    const data = await response.json();
    setCustomers(data);
  };
  const progress = () => {
    setCompleted((prev) => {
      return completed >= 100 ? 0 : prev + 1;
    });
  };
  console.log(customers)
  useEffect(() => {
    getCustomers();
  }, []);
  // useEffect(() => {
  //   const interval = setInterval(progress, 500);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers ? (
            customers.map((customer) => {
              return <Customer customer={customer} key={customer.id} />;
            })
          ) : (
            <TableCell colSpan={6} align="center"><CircularProgress value={completed} /></TableCell>
          )}
        </TableBody>
      </Table>
      <CustomerAdd/>
    </div>
  );
}

export default App;
