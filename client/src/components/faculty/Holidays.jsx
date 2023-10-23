import { Table } from "antd";

export default function FacultyHolidays() {
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Holiday Title",
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
