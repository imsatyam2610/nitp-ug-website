"use client";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ClassRoutine = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Define your API endpoint
    const apiUrl =
      `${process.env.API_URL}notice/getnotice/Civil%20Engineering`;

    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data);
        setNotices(data.notices);
      } catch (error) {
        console.error("Error fetching class routine data:", error);
      }
    }; // Call the fetchData function
    fetchData();
  }, []);

  return (
    <>
      <div className="p-2 mb-2 rounded-md bg-red-100 w-fit flex items-center">
        Civil Engineering <IoIosArrowDown />
      </div>
      {notices.length > 0 ? (
        notices.map((notice) => (
          <div
            key={notice._id}
            className="p-1 rounded-md border-dashed border border-gray-700 mb-2"
          >
            <div className="flex items-center">
              <span>Class: </span>
              <h2 className="ml-2 w-fit p-1 rounded-md bg-amber-100">
                {notice.subject}
              </h2>
            </div>
            <p className="p-1">
              Ongoing Topic:{" "}
              <span class="p-1 rounded-md bg-violet-100">{notice.topic}</span>
            </p>
            <p className="p-1">
              Assignment:{" "}
              <span class="p-1 rounded-md bg-blue-100">
                {notice.assignment}
              </span>
            </p>
            <p className="p-1">
              Submission Date:
              <span class="p-1 rounded-md bg-green-100">
                {new Date(notice.submissionDate).toLocaleDateString()}
              </span>
            </p>
          </div>
        ))
      ) : (
        <p>No notices available</p>
      )}
    </>
  );
};
export default ClassRoutine;
