"use client";
import { Drawer, Form, Input, Select, DatePicker } from "antd";
const { Option } = Select;

export default function CreateNotice({ handleOk, handleCancel }) {
  const [form] = Form.useForm();

  const handleFormSubmit = async () => {
    try {
      const formData = await form.validateFields();
      console.log(formData);

      const response = await fetch(`${process.env.API_URL}notice/create`, {
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
            label="Subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please choose your Subject",
              },
            ]}
          >
            <Select placeholder="Select a option to choose class">
              <Option value="Physics">Physics</Option>
              <Option value="Physics Lab">Physics Lab</Option>
              <Option value="Mechanics">Mechanics</Option>
              <Option value="Workshop Theory">Workshop Theory</Option>
              <Option value="Workshop Lab">Workshop Lab</Option>
              <Option value="IT Theory">IT Theory</Option>
              <Option value="IT Lab">IT Lab</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Topic"
            name="topic"
            rules={[
              {
                required: false,
                message: "Please enter ongoing topic",
              },
            ]}
          >
            <Input placeholder="Enter Ongoing Topic" />
          </Form.Item>
          <Form.Item
            label="Assignment"
            name="assignment"
            rules={[
              {
                required: false,
                message: "Please enter assignment topic",
              },
            ]}
          >
            <Input placeholder="Enter Assignment Topic" />
          </Form.Item>
          <Form.Item
            label="Submission Date"
            name="submissionDate"
            rules={[
              {
                required: false,
                message: "Please select submission date",
              },
            ]}
          >
            <DatePicker placeholder="Select Submission Date" />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[
              {
                required: false,
                message: "Please choose your status",
              },
            ]}
          >
            <Select placeholder="Select a option to choose class">
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="p-2 bg-green-700 text-white rounded-lg"
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
