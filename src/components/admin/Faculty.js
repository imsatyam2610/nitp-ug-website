"use client";
import { Table } from "antd";

export default function FacultyList() {
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Student Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Roll",
      dataIndex: "roll",
      key: "roll",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Section",
      dataIndex: "section",
      key: "section",
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
    },
  ];
  return (
    <>
      <div className="">
        <Table columns={columns} />
      </div>
    </>
  );
}
