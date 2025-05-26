import { button, p } from "framer-motion/client";
import React from "react";

const Blog = [
  {
    id: 200,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuU3vgIlQDXkkCF_sX2IDeuLhD3quukijQf0cVvv5LQvmoeqKGnQZ2mVyuYs81nQv9hE&usqp=CAU",
    button: "Read More",
    text: "This case report discusses a man who tested positive for IgLON5-IgG antibody after intermittent episodes of paresthetic feeling involving",
  },
  {
    id: 201,
    button: "Read More",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuU3vgIlQDXkkCF_sX2IDeuLhD3quukijQf0cVvv5LQvmoeqKGnQZ2mVyuYs81nQv9hE&usqp=CAU",
    text: "This case report discusses a man who tested positive for IgLON5-IgG antibody after intermittent episodes of paresthetic feeling involving",
  },
];

const Blogs = () => {
  return (
    <div className="w-fll h-[60vh] grid grid-cols-12 ">
      <div className="col-span-6 pl-44 relative">
        <div className="w-[300px] h-[350px] rounded-[30px] bg-[#3EC8BD] absolute    z-0"></div>
        <img
          src="https://www.klehospital.org/wp-content/uploads/2023/04/neurology.jpg"
          alt=""
          className="w-[300px] h-[350px] rounded-[30px]  -mt-3 relative z-10 translate-x-4"
        />
      </div>
      <div className="col-span-6">
        <h1 className=" text-[35px] text-black font-medium  ibrand-font">
          Our Latest <span className="text-[#3EC8BD]">Blogs</span>
        </h1>
        <p className="text-[10px]">
          read Our lates blogas here which is only available on our official
          website
        </p>
        <div className="mt-6">
          {Blog.map((blogs, index) => (
            <div key={index} className="flex w-[600px] p-3 ">
              <img
                src={blogs.src}
                className="w-[100px] h-[100px] object-cover rounded-md mr-4"
              ></img>

              <div className="text-[12px] p-2">
                <p>{blogs.text}</p>
                <button className="mt-3 bg-[#3EC8BD] p-1 w-[20%] rounded-[5px] text-[10px] text-white">
                  {blogs.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
