import { useState } from "react";
import { HiCode } from "react-icons/hi";
import { LuDot } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiSockThin } from "react-icons/pi";

const position = [
  {
    title: "Onlearn",
    post: "React Native Developer",
    year: "09.2024 - present",
    workActivities: [
      "I'm working as the head dev for both the app/web version of the Onlearn app",
      "Making use of react and react Native for all interface and Supabase to manage the backend",
      "Working along side with the UI/UX designer",
    ],
  },
  {
    title: "Upwork",
    post: "Freelancer",
    year: "11.2025 - present",
    workActivities: [
      "Created landing pages for clients and worked on UI/UX.",
      " Developed responsive web applications using React and Tailwind CSS.",
      "Implemented custom styling solutions with vanilla CSS.",
    ],
  },
];

function MyExperience() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="border-b border-border-btn z-10 h-auto">
      <div className="w-[70%] max-sm:w-[90%] mx-auto py-20 ">
        <h2 className="heading">Work Experience</h2>

        <div className="flex flex-col gap-5">
          {position.map((post, i) => (
            <Experience
              key={i}
              index={i}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title={post.title}
              post={post.post}
              year={post.year}
              workActivities={post.workActivities}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({
  index,
  activeIndex,
  setActiveIndex,
  title,
  post,
  year,
  workActivities,
}) {
  const isOpen = activeIndex === index;

  const toggle = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <div>
      <h3 className="mb-1 text-[0.9rem] font-medium">{title}</h3>
      <div className="mx-1.5 border-l-2 border-border-color px-2 py-1">
        <div className="flex items-center justify-between gap-1.5 bg-bg cursor-pointer">
          <div className="flex gap-1 ">
            <HiCode className="self-start opacity-[0.7]" />
            <div className="flex flex-col gap-2">
              <p className="flex flex-col ">
                <span className="text-[14px]">{post}</span>
                <span className="text-[12px] opacity-[0.7]">{year}</span>
              </p>

              <div
                className={`overflow-hidden transition-all duration-150 ease-in ${
                  isOpen ? "max-h-16" : "max-h-0"
                }`}
              >
                <ol className="text-[13px]">
                  {workActivities.map((works) => (
                    <li className="flex items-center">
                      <LuDot className="opacity-[0.7] text-[20px]" />
                      <span>{works}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <MdOutlineKeyboardArrowDown
            onClick={toggle}
            className={`self-start opacity-[0.4] text-[20px] transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default MyExperience;
