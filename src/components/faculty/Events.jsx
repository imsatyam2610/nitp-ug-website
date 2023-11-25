"use client";
import { useEffect, useState } from "react";
import { Table } from "antd";

export default function FacultyEvents() {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Event Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text, record) => formatDate(record.date),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    fetch(`${process.env.API_URL}event/get-all-events`)
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
