const Scholarships = () => {
  const ScholarshipList = [
    {
      title: "DRCC Loan",
      startdate: "30 Oct 2023",
      enddate: "12 Mar 2024",
    },
    {
      title: "Post Matric Scholarship",
      startdate: "30 Oct 2023",
      enddate: "12 Mar 2024",
    },
    {
      title: "Medavi Engineering Scholarship",
      startdate: "30 Oct 2023",
      enddate: "12 Mar 2024",
    },
  ];
  return (
    <>
      <div className="py-4 my-4">
        <h3 className="text-cyan-800 text-3xl mb-4">Scholarships & Loan</h3>
        <div className="grid grid-cols-3 gap-4">
          {ScholarshipList.map((scholarship, index) => (
            <div key={index} className="rounded-xl p-2 shadow-2xl">
              <h3 className="text-xl">{scholarship.title}</h3>
              <p>
                <span>Start Date:</span>{" "}
                <span className="px-2 rounded-full text-sm bg-cyan-50">
                  {scholarship.startdate}
                </span>
              </p>
              <p>
                <span>End Date:</span>{" "}
                <span className="px-2 rounded-full text-sm bg-cyan-50">
                  {scholarship.enddate}
                </span>
              </p>
              <div className="float-right px-2 rounded-full bg-gray-200">
                View details
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Scholarships;
