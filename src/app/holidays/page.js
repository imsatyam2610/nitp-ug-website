"use client";
import Navbar from "@/components/navbar/Navbar";
import { useState, useEffect } from "react";

export default function Holidays() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.API_URL}holiday/get-all-holidays`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((event) => {
          const date = new Date(event.date);
          const formattedDate = `${date.toLocaleString("default", {
            month: "short",
          })} ${date.getDate()}, ${date.getFullYear()}`;
          return { ...event, formattedDate };
        });

        setData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-dlmode container mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold my-2">Holidays</h1>
        <div className="bg-[#00a3ff] rounded-lg p-5">
          <div className="pt-2">
            <ul className="flex flex-col">
              {data.map((event, index) => (
                <li
                  key={index}
                  className="relative pl-[19px] mb-[20px] before:bg-[#54d7ff] before:absolute before:top-0 before:left-0 before:w-[5px] before:rounded-[14px] before:h-full"
                >
                  <div className="block">
                    <p className="text-lg text-white">{event.title}</p>
                    <p className="text-[#b7ecfc]">{event.formattedDate}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
