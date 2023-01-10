import { TableCell, TableRow } from "@mui/material";
const Customer = (props) => {
  return (
    <TableRow>
      <TableCell>{props.customer.id}</TableCell>
      <TableCell>
        <img src={props.customer.image} />
      </TableCell>
      <TableCell>{props.customer.name}</TableCell>
      <TableCell>{props.customer.birthday}</TableCell>
      <TableCell>{props.customer.gender}</TableCell>
      <TableCell>{props.customer.job}</TableCell>
    </TableRow>
  );
};

export default Customer;
