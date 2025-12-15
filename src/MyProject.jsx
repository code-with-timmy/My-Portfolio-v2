import Card from "./Card";

function MyProject() {
  return (
    <section className="border-b border-border-btn">
      <div className="w-[70%] max-sm:w-[90%] mx-auto py-20 ">
        <h2 className="heading">Projects</h2>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10">
          <Card
            title="Kanban task management"
            imgLink="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/hlb8i2xkwhhdevpbx1jb.jpg"
            description="A clean, fast Kanban tool for managing tasks and organizing your
            workflow with ease."
            stacks={["REACT", "VITE", "ZUSTAND"]}
            liveLink="https://your-goto-kanban-app.vercel.app/"
          />
          <Card
            title="Designo multi-page website"
            imgLink="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/blitjo9cbnmtbaybeiys.jpg"
            description="A landing page for a branding setup"
            stacks={["REACT", "VITE"]}
            liveLink="https://designno.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
}

export default MyProject;
