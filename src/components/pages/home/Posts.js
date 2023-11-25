import Image from "next/image";

const Posts = () => {
  const PostList = [
    {
      title: "The ISRO's research and development operations",
      image: "https://drive.google.com/uc?export=view&id=1EaNUmzuuXya0nPF8Czv8iyQBLjsI8XC9",
      date: "12 Nov 2023",
    },
    {
      title: "Establishment of American Society of Civil Engineering (ASCE) Student Chapter NIT Patna",
      image: "https://drive.google.com/thumbnail?id=11LDUaxPcrKuLZg8rPr7QF-DTotBDDbLY",
      date: "12 Nov 2023",
    },
  ];
  return (
    <>
      <div className="py-5">
        <h3 className="text-amber-800 text-3xl">Posts</h3>
        <div className="grid grid-cols-3 gap-4">
          {PostList.map((post, index) => (
            <div key={index} className="rounded-xl p-2 shadow-xl">
              <Image
                src={post.image}
                alt=""
                width={120}
                height={100}
                className="rounded-tl-lg rounded-tr-lg w-full max-h-[120px]"
                
              />
              <span className="text-sm px-2 bg-gray-50 rounded-full">
                {post.date}
              </span>
              <h3 className="text-xl">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Posts;
