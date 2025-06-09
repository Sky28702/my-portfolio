import Nav from "@/components/Nav";
import UserTable from "@/components/ContactTable";

const contactData = () => {
  const userData = data;

  return (
    <>
      <Nav />
      <section className="  ">
        <thead className="flex flex-row justify-between">
          <div>
            <h1 className="font-semibold text-xl">Users</h1>
            <p className="text-sm  text-slate-400 mb-2">Total Roam Users: 13</p>
          </div>
        </thead>
        <table className="border rounded-5   [&>tr>td]:p-4 [&>tr>td]:font-normal [&>tr>td]:border-b [&>tr>td]:border-slate-200 border-slate-200">
          <tr className="[&>th]:font-normal text-slate-400 border-b border-slate-200">
            <th className="  p-4">Id</th>
            <th>Name</th>

            <th>E-Mail</th>

            <th>Message</th>
          </tr>
          {userData.map((item, index) => (
            <TableRow
              name={item.name}
              username={item.username}
              email={item.email}
              address={item.address.city}
              phone={item.phone}
              website={item.website}
              company={item.company.name}
            />
          ))}
        </table>
      </section>
    </>
  );
};

export default contactData;
