import Link from "next/link";

const Events = () => {
  const EventList = [
    {
      title: "GDSC Event 1",
      date: "12 Nov, 2023",
    },
    {
      title: "GDSC Event 2",
      date: "12 Nov, 2023",
    },
    {
      title: "GDSC Event 3",
      date: "12 Mar, 2023",
    },
  ];
  const HolidayList = [
    {
      title: "Diwali",
      date: "12 Nov, 2023",
    },
    {
      title: "Chat Puja",
      date: "12 Nov, 2023",
    },
    {
      title: "Holi",
      date: "12 Mar, 2023",
    },
  ];

  return (
    <>
      <div className="py-5 bg-green-50">
        <section className="container mx-auto">
          <h3 className="text-3xl text-center mb-4">Upcomig events</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#f3416c] rounded-lg p-5">
              <h2 className="text-white text-xl">General Events</h2>
              <div className="pt-2">
                <ul className="flex flex-col">
                  {EventList.map((event, index) => (
                    <li
                      key={index}
                      className="relative pl-[19px] mb-[20px] before:bg-[#fb7d9c] before:absolute before:top-0 before:left-0 before:w-[5px] before:rounded-[14px] before:h-full"
                    >
                      <div className="block">
                        <p className="text-lg text-white">{event.title}</p>
                        <p className="text-[#fcb7c8]">{event.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="float-right">
                <Link
                  href="#"
                  className="border border-red-300 p-1 text-white rounded-md"
                >
                  See all
                </Link>
              </div>
            </div>
            <div className="bg-[#00a3ff] rounded-lg p-5">
              <h2 className="text-white text-xl">Holidays</h2>
              <div className="pt-2">
                <ul>
                  {HolidayList.map((holiday, index) => (
                    <li
                      key={index}
                      className="relative pl-[19px] mb-[20px] before:bg-[#54d7ff] before:absolute before:top-0 before:left-0 before:w-[5px] before:rounded-[14px] before:h-full"
                    >
                      <div className="block">
                        <p className="text-lg text-white">{holiday.title}</p>
                        <p className="text-[#b7ecfc]">{holiday.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="float-right">
                <Link
                  href="#"
                  className="border border-blue-300 p-1 text-white rounded-md"
                >
                  See all
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Events;
