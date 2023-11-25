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
export default function StudentAdd() {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const formData = await form.validateFields();
      console.log(formData);

      const response = await fetch(
        `${process.env.API_URL}student/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Check the response status or handle accordingly
      if (response.ok) {
        form.resetFields();
        console.log("Data saved successfully!");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  return (
    <>
      <Drawer
        title="Add a new student"
        width={720}
        open={true}
        extra={
          <Space>
            <Button>Cancel</Button>
          </Space>
        }
      >
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
              <Form.Item
                name="roll"
                label="Roll"
                rules={[
                  {
                    required: true,
                    message: "Please enter roll",
                  },
                ]}
              >
                <Input placeholder="Please enter roll" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
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
                <Input type="email" placeholder="Enter college email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="class"
                label="Class"
                rules={[
                  {
                    required: true,
                    message: "Please choose the class",
                  },
                ]}
              >
                <Select placeholder="Please choose the class">
                  <Option value="Civil Engineering">Civil Engineering</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="section"
                label="Section"
                rules={[
                  {
                    required: true,
                    message: "Please choose the Section",
                  },
                ]}
              >
                <Select placeholder="Please choose the section">
                  <Option value="A">A</Option>
                  <Option value="B">B</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="group"
                label="Group"
                rules={[
                  {
                    required: true,
                    message: "Please choose the group",
                  },
                ]}
              >
                <Select placeholder="Please choose the group">
                  <Option value="A1">A1</Option>
                  <Option value="A2">A2</Option>
                  <Option value="B1">B1</Option>
                  <Option value="B2">B2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
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
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
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
            </Col>
          </Row>
          <Form.Item>
            <button
              type="submit"
              className="p-2 bg-[#1677ff] text-white rounded-lg"
            >
              Add Student
            </button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
