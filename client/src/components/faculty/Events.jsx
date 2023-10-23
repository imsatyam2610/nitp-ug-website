import { Table } from "antd";

export default function FacultyEvents() {
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Event Title",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Date",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <>
      <div className="block">
        <Table columns={columns} />
      </div>
    </>
  );
}
