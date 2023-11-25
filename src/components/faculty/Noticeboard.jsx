"use client";
import { useEffect, useState } from "react";
import { Table } from "antd";

export default function FacultyNoticeboard() {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "address",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Assignment",
      dataIndex: "assignment",
      key: "assignment",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  useEffect(() => {
    fetch(`${process.env.API_URL}notice/get-all-notices`)
      .then((response) => response.json())
      .then((data) => {
        // Add serial numbers to the data
        const dataWithSerialNumbers = data.map((item, index) => ({
          ...item,
          key: index + 1,
        }));
        setData(dataWithSerialNumbers);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="block">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}
