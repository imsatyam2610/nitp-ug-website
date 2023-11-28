"use client";
import { useState } from "react";
import { Select, message, List } from "antd";
const { Option } = Select;
export default function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2023"); // Set a default year or handle it as needed
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendanceData, setAttendanceData] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dates = Array.from({ length: 31 }, (_, index) =>
    (index + 1).toString()
  );

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch(
        `${process.env.API_URL}attendance/attendance-report?date=${selectedDate}&month=${selectedMonth}&year=${selectedYear}&department=${selectedDepartment}&section=${selectedSection}&group=${selectedGroup}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setAttendanceData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
      message.error("Error fetching attendance data");
    }
  };

  const handleFindData = () => {
    // Add any additional validation or checks before fetching data
    fetchAttendanceData();
  };

  return (
    <>
      <div className="space-x-4 mb-4 flex">
        <Select
          placeholder="Select Date"
          style={{ width: 100 }}
          onChange={(value) => setSelectedDate(value)}
        >
          {dates.map((date) => (
            <Option key={date} value={date}>
              {date}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="Select Month"
          style={{ width: 130 }}
          onChange={(value) => setSelectedMonth(value)}
        >
          {months.map((month) => (
            <Option key={month} value={month}>
              {month}
            </Option>
          ))}
        </Select>

        <Select
          placeholder="Select Year"
          style={{ width: 120 }}
          onChange={(value) => setSelectedYear(value)}
        >
          <Option value="2023">2023</Option>
        </Select>

        <Select
          placeholder="Select Department"
          style={{ width: 165 }}
          onChange={(value) => setSelectedDepartment(value)}
        >
          <Option value="Civil Engineering">Civil Engineering</Option>
        </Select>

        <Select
          placeholder="Select Section"
          style={{ width: 140 }}
          onChange={(value) => setSelectedSection(value)}
        >
          <Option value="A">A</Option>
          <Option value="B">B</Option>
        </Select>

        <Select
          placeholder="Select Group"
          style={{ width: 130 }}
          onChange={(value) => setSelectedGroup(value)}
        >
          <Option value="A1">A1</Option>
          <Option value="A2">A2</Option>
          <Option value="B1">B1</Option>
          <Option value="B2">B2</Option>
        </Select>

        <button
          className="p-1 rounded-md bg-violet-300"
          onClick={handleFindData}
        >
          Find Data
        </button>
        <button className="p-1 rounded-md bg-blue-300">Export</button>
      </div>
      {attendanceData && (
        <>
          <h2>Attendance Report</h2>
          <List
            itemLayout="horizontal"
            dataSource={attendanceData}
            renderItem={(record) => (
              <List.Item>
                <List.Item.Meta
                  title={`${record.studentName} (${
                    record.studentRoll
                  }) (${new Date(record.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })})`}
                  description={`Status: ${
                    record.isPresent ? "Present" : "Absent"
                  }`}
                />
              </List.Item>
            )}
          />
        </>
      )}
    </>
  );
}
