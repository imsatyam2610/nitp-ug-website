"use client";
import {
  Drawer,
  Row,
  Select,
  Input,
  Col,
  Form,
  Space,
  Button,
  Radio,
} from "antd";
const { Option } = Select;
export default function FacultyAdd({ visible, hide }) {
  return (
    <>
      <Drawer
        title="Add a new faculty"
        width={420}
        open={visible}
        onClose={hide}
        extra={
          <Space>
            <Button onClick={hide}>Cancel</Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter user name",
              },
            ]}
          >
            <Input placeholder="Please enter user name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter an email",
              },
            ]}
          >
            <Input
              type="email"
              placeholder="Enter college email"
              addonAfter="@nitp.ac.in"
            />
          </Form.Item>

          <Form.Item
            name="department"
            label="Department"
            rules={[
              {
                required: true,
                message: "Please choose the department",
              },
            ]}
          >
            <Select placeholder="Please choose the department">
              <Option value="Physics">Physice</Option>
              <Option value="English">English</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "please choose gender",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "please enter password",
              },
            ]}
          >
            <Input.Password placeholder="enter password" />
          </Form.Item>
          <button
            type="submit"
            className="bg-green-600 p-2 text-white rounded-lg"
          >
            Submit
          </button>
        </Form>
      </Drawer>
    </>
  );
}
