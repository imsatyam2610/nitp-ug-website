"use client";
import { useState, useEffect } from "react";
import { Drawer, Table, DatePicker, Select, Radio, Form, message } from "antd";

const { Option } = Select;
const dateFormat = "DD/MM/YYYY";

const AttendancePopUp = ({ handleOk, handleCancel }) => {
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [classValue, setClassValue] = useState("");
  const [sectionValue, setSectionValue] = useState("");
  const [groupValue, setGroupValue] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState({});

  const checkAllPresent = () => {
    const allPresentStatus = {};
    studentList.forEach((student) => {
      allPresentStatus[student._id] = "Present";
    });
    setAttendanceStatus(allPresentStatus);
  };

  const checkAllAbsent = () => {
    const allAbsentStatus = {};
    studentList.forEach((student) => {
      allAbsentStatus[student._id] = "Absent";
    });
    setAttendanceStatus(allAbsentStatus);
  };

  const fetchStudentList = async () => {
    // Make an API request to your backend with the selected options
    const response = await fetch(
      `http://localhost:5001/api/student/attendance?studentclass=${classValue}&section=${sectionValue}&group=${groupValue}`
    );
    const data = await response.json();
    console.log(data);
    setStudentList(data);
  };

  const updateAttendance = async () => {
    try {
      const attendanceData = {
        date: selectedDate,
        department: classValue,
        section: sectionValue,
        group: groupValue,
        attendanceList: Object.keys(attendanceStatus).map((studentId) => ({
          student: studentId,
          isPresent: attendanceStatus[studentId] === "Present",
        })),
      };

      const response = await fetch(
        `${process.env.API_URL}attendance/add-attendance`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(attendanceData),
        }
      );

      if (response.ok) {
        handleCancel();
        message.success("Attendance recorded successfully");
        setSelectedDate(null);
        setClassValue("");
        form.resetFields();
      } else {
        message.error("Failed to record attendance");
      }
    } catch (error) {
      console.error("Error updating attendance:", error);
    }
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
      open={handleOk}
      placement="right"
      onClose={handleCancel}
      width={400}
    >
      <Form className="space-y-4" form={form}>
        <Form.Item
          label="Date"
          name="date"
          rules={[
            {
              required: false,
              message: "Please select date",
            },
          ]}
        >
          <DatePicker
            placeholder="Select date"
            format={dateFormat}
            onChange={(date) => {
              setSelectedDate(date);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Class"
          name="class"
          rules={[
            {
              required: false,
              message: "Please select class",
            },
          ]}
        >
          <Select
            placeholder="Select class"
            value={classValue}
            onChange={(value) => setClassValue(value)}
          >
            <Option value="Civil Engineering">Civil Engineering</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Section"
          name="section"
          rules={[
            {
              required: false,
              message: "Please select date",
            },
          ]}
        >
          <Select
            placeholder="Select section"
            value={sectionValue}
            onChange={(value) => setSectionValue(value)}
          >
            <Option value="A">A</Option>
            <Option value="B">B</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Group"
          name="group"
          rules={[
            {
              required: false,
              message: "Please select date",
            },
          ]}
        >
          <Select
            placeholder="Select Group"
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
        <button
          className="rounded-md bg-orange-200 p-2 mx-3"
          onClick={checkAllPresent}
        >
          Present All
        </button>
        <button
          className="rounded-md bg-orange-200 p-2"
          onClick={checkAllAbsent}
        >
          Absent All
        </button>
        <Table columns={columns} dataSource={studentList} />
        <Form.Item>
          <button
            className="rounded-md bg-orange-200 p-2"
            onClick={updateAttendance}
          >
            Update Attendance
          </button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AttendancePopUp;
