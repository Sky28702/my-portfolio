const TableRow = (props) => {
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{props.address}</td>
        <td>{props.phone}</td>
        <td>{props.website}</td>
        <td>{props.company}</td>
        {/* company and address giving issues  */}
      </tr>
    </>
  );
};

export default TableRow;
