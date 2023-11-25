"use client";
import { Drawer, Form, Input, Select, DatePicker } from "antd";
const { Option } = Select;

export default function AddSyllabus({ handleOk, handleCancel }) {
  const [form] = Form.useForm();

  const handleFormSubmit = async () => {
    try {
      const formData = await form.validateFields();
      console.log(formData);

      const response = await fetch(
        "http://localhost:5001/api/syllabus/create",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        form.resetFields();
        const responseData = await response.json();
        console.log("syllabus created successfully:", responseData);
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error("Error creating syllabus:", errorData);
      }
    } catch (error) {
      console.error("Error creating syllabus:", error);
    }
  };
  return (
    <>
      <Drawer
        title="Add Syllabus"
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
              <Option value="A1">A1</Option>
              <Option value="A2">A2</Option>
              <Option value="B1">B1</Option>
              <Option value="B2">B2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Subject"
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
            label="Title"
            name="title"
            rules={[
              {
                required: false,
                message: "Please enter title",
              },
            ]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>
          <Form.Item
            label="File Link"
            name="fileUrl"
            rules={[
              {
                required: false,
                message: "Please enter file link",
              },
            ]}
          >
            <Input placeholder="Enter File Link" />
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="p-2 bg-green-700 text-white rounded-lg"
            >
              Add syllabus
            </button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
