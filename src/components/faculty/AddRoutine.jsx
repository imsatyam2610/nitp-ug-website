"use client";
import { Drawer, Form, Input, Select, TimePicker } from "antd";
const { Option } = Select;

export default function AddRoutine({ handleOk, handleCancel }) {
  const [form] = Form.useForm();

  const handleFormSubmit = async () => {
    try {
      const formData = await form.validateFields();
      console.log(formData);

      const response = await fetch(`${process.env.API_URL}routine/create`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        form.resetFields();
        const responseData = await response.json();
        console.log("Notice created successfully:", responseData);
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error("Error creating notice:", errorData);
      }
    } catch (error) {
      console.error("Error creating notice:", error);
    }
  };

  return (
    <>
      <Drawer
        title="Add Notice"
        open={handleOk}
        onClose={handleCancel}
        placement="right"
        width={400}
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <Form.Item
            label="Department"
            name="department"
            rules={[
              {
                required: true,
                message: "Please choose your department",
              },
            ]}
          >
            <Select placeholder="Select a option to choose class">
              <Option value="Civil Engineering">Civil Engineering</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Section"
            name="section"
            rules={[
              {
                required: true,
                message: "Please choose your section",
              },
            ]}
          >
            <Select placeholder="Select a option to choose class">
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="A1">A1</Option>
              <Option value="A2">A2</Option>
              <Option value="B1">B1</Option>
              <Option value="B2">B2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="day"
            name="day"
            rules={[
              {
                required: true,
                message: "Please choose your section",
              },
            ]}
          >
            <Select placeholder="Select a option to choose day">
              <Option value="Monday">Monday</Option>
              <Option value="Tuesday">Tuesday</Option>
              <Option value="Wednesday">Wednesday</Option>
              <Option value="Thrusday">Thrusday</Option>
              <Option value="Friday">Friday</Option>
              <Option value="Saturday">Saturday</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please choose your subject",
              },
            ]}
          >
            <Select placeholder="Select a option to choose subject">
              <Option value="Physics">Physics</Option>
              <Option value="Mechanics">Mechanics</Option>
              <Option value="English">English</Option>
              <Option value="IT">IT</Option>
              <Option value="Workshop">Workshop</Option>
              <Option value="EAA">EAA</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
                message: "Please choose your time",
              },
            ]}
          >
            <TimePicker.RangePicker use12Hours format="HH:mm A" />
          </Form.Item>
          <Form.Item
            label="Teacher"
            name="teacher"
            rules={[
              {
                required: true,
                message: "Please choose your teacher",
              },
            ]}
          >
            <Select placeholder="Select a option to choose teacher">
              <Option value="Subrata Majumder">Subrata Majumder</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Class Room"
            name="classroom"
            rules={[
              {
                required: true,
                message: "Please choose your classroom",
              },
            ]}
          >
            <Select placeholder="Select a option to choose subject">
              <Option value="Common Room">Common Room</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="p-2 bg-green-700 text-white rounded-lg"
            >
              Add routine
            </button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}