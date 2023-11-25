"use client";
import { useEffect, useState } from "react";
import { Table } from "antd";

export default function FacultyHolidays() {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Holiday Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  useEffect(() => {
    fetch(`${process.env.API_URL}holiday/get-all-holidays`)
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
