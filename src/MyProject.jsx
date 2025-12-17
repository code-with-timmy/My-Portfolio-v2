import { FaGreaterThan } from "react-icons/fa6";
import Card from "./Card";
import { MdArrowForwardIos } from "react-icons/md";

function MyProject() {
  return (
    <section className="border-b border-border-btn">
      <div className="w-[70%] max-sm:w-[90%] mx-auto py-20 ">
        <h2 className="heading flex items-center justify-start gap-1.5 ">
          <MdArrowForwardIos className="text-[20px] font-extrabold text-[#1DB954]" />{" "}
          <span>Things I've built</span>
        </h2>
        <div className="grid grid-cols-1 max-sm:grid-cols-1 gap-10">
          <Card
            title="Kanban task management"
            imgLink="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/hlb8i2xkwhhdevpbx1jb.jpg"
            description="A clean, fast Kanban tool for managing tasks and organizing your workflow with ease, built with a modern UI, responsive design, and smooth interactions to support efficient task tracking and collaboration."
            stacks={["REACT", "VITE", "ZUSTAND", "TAILWINDCSS"]}
            liveLink="https://your-goto-kanban-app.vercel.app/"
          />
          <Card
            title="Designo multi-page website"
            imgLink="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/blitjo9cbnmtbaybeiys.jpg"
            description="A landing page for a branding setup that showcases brand identity, messaging, and offerings through a clean design, strong visuals, and a user-focused experience."
            stacks={["REACT", "VITE", "TAILWINDCSS"]}
            liveLink="https://designno.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
}

export default MyProject;
