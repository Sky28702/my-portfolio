import Nav from "@/components/Nav";
import TableRow from "@/components/TableRow";

const User = () => {
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
            <th>Username</th>
            <th>E-Mail</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          <TableRow />
        </table>
      </section>
    </>
  );
};

export default User;
