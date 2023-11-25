"use client";
import { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { TiGroupOutline } from "react-icons/ti";

export default function FacultyClassRoutine() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URL}routine/get-all-routine`)
      .then((response) => response.json())
      .then((data) => {
        // Group routines by day
        const groupedData = groupDataByDay(data);
        console.log(data);
        setData(groupedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const groupDataByDay = (data) => {
    const groupedData = [];

    data.forEach((item) => {
      const existingGroup = groupedData.find((group) => group.day === item.day);

      if (existingGroup) {
        existingGroup.subjects.push({
          subject: item.subject,
          section: item.section,
          time: formatTime(item.time),
          teacher: item.teacher,
          classroom: item.classroom,
        });
      } else {
        groupedData.push({
          day: item.day,
          subjects: [
            {
              subject: item.subject,
              section: item.section,
              time: formatTime(item.time),
              teacher: item.teacher,
              classroom: item.classroom,
            },
          ],
        });
      }
    });

    return groupedData;
  };
  const formatTime = (timeArray) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };

    return timeArray.map((timeString) =>
      new Date(timeString).toLocaleTimeString("en-US", options)
    );
  };
  return (
    <>
      <div className="block">
        <ul>
          {data.map((group, groupIndex) => (
            <li key={groupIndex} className="items-center flex mb-2">
              <strong>{group.day}</strong>
              {group.subjects.map((subject, subjectIndex) => (
                <div
                  key={subjectIndex}
                  className="border mx-2 border-dashed border-blue-500 rounded-lg bg-blue-100 p-2"
                >
                  <p className="flex items-center">
                    <IoBookOutline className="mr-2" />
                    {subject.subject}
                  </p>
                  <p className="flex items-center">
                    <TiGroupOutline className="mr-2" />
                    Group: {subject.section}
                  </p>
                  <p className="flex items-center">
                    <IoIosTimer className="mr-2" />
                    {subject.time.join(" - ")}
                  </p>
                  <p className="flex items-center">
                    <LiaChalkboardTeacherSolid className="mr-2" />
                    {subject.teacher}
                  </p>
                  <p className="flex items-center">
                    <CiHome className="mr-2" />
                    {subject.classroom}
                  </p>
                  {subjectIndex < group.subjects.length - 1}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
