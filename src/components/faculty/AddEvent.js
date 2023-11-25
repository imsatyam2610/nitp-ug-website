"use client";
import { Drawer, Form, Input, Select, DatePicker } from "antd";
const { Option } = Select;

export default function AddEvent({ handleOk, handleCancel }) {
  const [form] = Form.useForm();

  const handleFormSubmit = async () => {
    try {
      const formData = await form.validateFields();
      console.log(formData);

      const response = await fetch(`${process.env.API_URL}event/create`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        form.resetFields();
        const responseData = await response.json();
        console.log("event created successfully:", responseData);
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error("Error creating event:", errorData);
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  return (
    <>
      <Drawer
        title="Add Event"
        open={handleOk}
        onClose={handleCancel}
        placement="right"
        width={400}
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <Form.Item
            label="Event Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter event title",
              },
            ]}
          >
            <Input placeholder="Enter event title" />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please select date",
              },
            ]}
          >
            <DatePicker placeholder="Select Date" />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[
              {
                required: true,
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
              Add Event
            </button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
