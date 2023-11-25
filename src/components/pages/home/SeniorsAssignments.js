"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const SeniorsAssisgnment = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    // Fetch materials from your backend API
    fetch(
      `${process.env.API_URL}material/by-material-type/Senior%20Material`
    )
      .then((response) => response.json())
      .then((data) => {
        setMaterials(data);
      })
      .catch((error) => {
        console.error("Error fetching materials:", error);
      });
  }, []);

  return (
    <>
      <div className="p-1 border rounded-md shadow-lg bg-white">
        <h3 className="text-amber-800 text-xl">Seniors Materials</h3>
        <div className="rounded-xl p-2 border">
          <ul className="list-[square] mx-1 list-inside">
            {materials.map((material) => (
              <li
                key={material._id}
                className="border-b py-1 bg-slate-100 rounded-lg mb-1 px-2"
              >
                <Link
                  href={material.fileUrl}
                  className="text-blue-700 capitalize"
                >
                  {material.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SeniorsAssisgnment;
