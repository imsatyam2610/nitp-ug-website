"use client";
import { Drawer, Form, Input, Select, DatePicker } from "antd";
const { Option } = Select;

export default function AddHolidays({ handleOk, handleCancel }) {
  const [form] = Form.useForm();

  const handleFormSubmit = async () => {
    try {
      const formData = await form.validateFields();
      console.log(formData);

      const response = await fetch(`${process.env.API_URL}holiday/create`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        form.resetFields();
        const responseData = await response.json();
        console.log("Holiday created successfully:", responseData);
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error("Error creating Holiday:", errorData);
      }
    } catch (error) {
      console.error("Error creating Holiday:", error);
    }
  };
  return (
    <>
      <Drawer
        title="Add Holiday"
        open={handleOk}
        onClose={handleCancel}
        placement="right"
        width={400}
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <Form.Item
            label="Holiday Title"
            name="title"
            rules={[
              {
                required: false,
                message: "Please enter Holiday title",
              },
            ]}
          >
            <Input placeholder="Enter Holiday title" />
          </Form.Item>
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
            <DatePicker placeholder="Select Date" />
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
              Add Holiday
            </button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
