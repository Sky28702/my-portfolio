const ContactData = (props) => {
  return (
    <>
      <tr>
        <td> </td>
        <td>{props.name}</td>

        <td>{props.email}</td>

        <td>{props.message}</td>
        {/* company and address giving issues  */}
      </tr>
    </>
  );
};

export default ContactData;
