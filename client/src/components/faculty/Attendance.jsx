import { Select } from "antd";
const { Option } = Select;
export default function Attendance() {
  return (
    <>
      <div className="space-x-4 mb-4">
        <Select placeholder="Select Month" style={{ width: 130 }}>
          <Option value="January">January</Option>
          <Option value="February">February</Option>
          {/* Add more months here */}
        </Select>

        <Select placeholder="Select Year" style={{ width: 120 }}>
          <Option value="2023">2023</Option>
          <Option value="2022">2022</Option>
          {/* Add more years here */}
        </Select>

        <Select placeholder="Select Class" style={{ width: 140 }}>
          <Option value="classA">Class A</Option>
          <Option value="classB">Class B</Option>
          {/* Add more classes here */}
        </Select>

        <Select placeholder="Select Section" style={{ width: 140 }}>
          <Option value="sectionA">Section A</Option>
          <Option value="sectionB">Section B</Option>
          {/* Add more sections here */}
        </Select>

        <button className="p-1 rounded-md bg-violet-300">Apply Filter</button>
        <button className="p-1 rounded-md bg-blue-300">Export</button>
      </div>
    </>
  );
}
