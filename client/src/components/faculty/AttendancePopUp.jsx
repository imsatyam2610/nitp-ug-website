"use client";
import { useState, useEffect } from "react";
import { Drawer, Table, DatePicker, Select, Radio, Form } from "antd";

const { Option } = Select;
const dateFormat = "DD/MM/YYYY";

const AttendancePopUp = ({ visible, handleOk, handleCancel }) => {
  const [classValue, setClassValue] = useState("");
  const [sectionValue, setSectionValue] = useState("");
  const [groupValue, setGroupValue] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState({});

  const fetchStudentList = async () => {
    // Make an API request to your backend with the selected options
    const response = await fetch(
      `http://localhost:5001/api/student/attendance?studentclass=${classValue}&section=${sectionValue}&group=${groupValue}`
    );
    const data = await response.json();
    console.log(data);
    setStudentList(data); // Assuming your API returns an array of students
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Roll",
      dataIndex: "roll",
      key: "roll",
    },
    {
      title: "Status",
      key: "status",
      render: (text, record) => (
        <Radio.Group
          value={attendanceStatus[record._id]}
          onChange={(e) => {
            const newStatus = { ...attendanceStatus };
            newStatus[record._id] = e.target.value;
            setAttendanceStatus(newStatus);
          }}
        >
          <Radio value="Present">Present</Radio>
          <Radio value="Absent">Absent</Radio>
        </Radio.Group>
      ),
    },
  ];

  return (
    <Drawer
      title="Take Attendance"
      open={visible}
      placement="right"
      onClose={handleCancel}
      width={600}
    >
      <Form className="space-y-4">
        <DatePicker
          placeholder="Select date"
          style={{ width: "90%" }}
          format={dateFormat}
        />
        <Select
          placeholder="Select class"
          style={{ width: "90%" }}
          value={classValue}
          onChange={(value) => setClassValue(value)}
        >
          <Option value="Civil Engineering">Civil Engineering</Option>
        </Select>

        <Select
          placeholder="Select section"
          style={{ width: "90%" }}
          value={sectionValue}
          onChange={(value) => setSectionValue(value)}
        >
          <Option value="A">A</Option>
          <Option value="B">B</Option>
        </Select>
        <Form.Item placeholder="Select Group" rules={[{ required: true }]}>
          <Select
            style={{ width: "90%" }}
            value={groupValue}
            onChange={(value) => setGroupValue(value)}
          >
            <Option value="A1">A1</Option>
            <Option value="A2">A2</Option>
            <Option value="B1">B1</Option>
            <Option value="B2">B2</Option>
          </Select>
        </Form.Item>
        <button
          className="rounded-md bg-blue-600 p-2 text-white"
          onClick={fetchStudentList}
          type="submit"
        >
          Show Student List
        </button>
        <button className="rounded-md bg-orange-200 p-2">Present All</button>
        <button className="rounded-md bg-orange-200 p-2">Absent All</button>
        <Table columns={columns} dataSource={studentList} />
        <button className="rounded-md bg-orange-200 p-2">
          Update Attendance
        </button>
      </Form>
    </Drawer>
  );
};

export default AttendancePopUp;
