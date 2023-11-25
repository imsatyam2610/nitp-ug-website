"use client";
import { Table } from "antd";
import { useState, useEffect } from "react";

export default function FacultyStudents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URL}student/get-student-faculty`)
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
      <div className="block">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}
