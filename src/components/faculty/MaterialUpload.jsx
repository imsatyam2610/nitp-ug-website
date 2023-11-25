"use client";
import { useState } from "react";
import { Drawer, Form, Input, Select } from "antd";
import { Toaster } from "react-hot-toast";

const { Option } = Select;
const FILE_SIZE_LIMIT = 2 * 1024 * 1024; // 2MB

export default function MaterialUpload({ handleOk, handleCancel }) {
  const [form] = Form.useForm();
  const [title, setTitle] = useState("");
  const [classValue, setClassValue] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const [material, setMaterial] = useState("");
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const handleFormSubmit = async () => {
    try {
      if (file && file.size > FILE_SIZE_LIMIT) {
        setFileError("File size exceeds the limit (2MB).");
        return;
      } else {
        setFileError("");
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("Studentclass", classValue);
      formData.append("section", section);
      formData.append("subject", subject);
      formData.append("material", material);
      formData.append("file", file);

      const response = await fetch(
        `${process.env.API_URL}material/create`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 201) {
        form.resetFields();
        setTitle("");
        setClassValue("");
        setSection("");
        setSubject("");
        setMaterial("");
        setFile(null);
        setFileError("");
        const responseData = await response.json();
        console.log("Material created successfully:", responseData);
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error("Error creating material:", errorData);
      }
    } catch (error) {
      console.error("Error creating material:", error);
    }
  };

  return (
    <>
      <Drawer
        title="Upload Materials"
        open={handleOk}
        onClose={handleCancel}
        placement="right"
        width={400}
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter material title",
              },
            ]}
          >
            <Input
              placeholder="Enter Material Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Class"
            name="class"
            rules={[
              {
                required: true,
                message: "Please choose your class",
              },
            ]}
          >
            <Select
              placeholder="Select a option to choose class"
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
                required: true,
                message: "Please choose your section",
              },
            ]}
          >
            <Select
              placeholder="Select a option to choose section"
              value={section}
              onChange={(value) => setSection(value)}
            >
              <Option value="A">Section A</Option>
              <Option value="B">Section B</Option>
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
            <Select
              placeholder="Select a option to choose subject"
              value={subject}
              onChange={(value) => setSubject(value)}
            >
              <Option value="Engineering Physics">Engineering Physics</Option>
              <Option value="Communicative English">
                Communicative English
              </Option>
              <Option value="Engineering Mechanics">
                Engineering Mechanics
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Material Category"
            name="material"
            rules={[
              {
                required: true,
                message: "Please choose material category",
              },
            ]}
          >
            <Select
              placeholder="Select a option to choose material category"
              value={material}
              onChange={(value) => setMaterial(value)}
            >
              <Option value="Faculty Material">Faculty Material</Option>
              <Option value="Books">Books</Option>
              <Option value="PYQs">PYQs</Option>
              <Option value="Study Material">Study Material</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="File Link"
            name="filelink"
            rules={[
              {
                required: false,
                message: "Please enter file link",
              },
            ]}
          >
            <Input placeholder="Enter File Link" />
          </Form.Item>
          <Form.Item
            label="Upload"
            name="upload"
            rules={[
              {
                required: false,
                message: "Please upload file",
              },
            ]}
            help={fileError}
            validateStatus={fileError ? "error" : ""}
          >
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="bg-green-600 text-white rounded-lg p-2"
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </Drawer>
      <Toaster />
    </>
  );
}
