"use client";
import { useEffect, useState } from "react";
import { Table } from "antd";
import Link from "next/link";

export default function FacultySyllabus() {
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
      title: "Tilte",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Syllabus",
      dataIndex: "fileUrl",
      key: "fileUrl",
      render: (fileUrl) => (
        <Link
          type="link"
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-orange-500 text-white p-2"
        >
          View
        </Link>
      ),
    },
  ];
  useEffect(() => {
    fetch(`${process.env.API_URL}syllabus/get-all-syllabus`)
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
