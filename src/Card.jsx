import { HiArrowLongRight } from "react-icons/hi2";

function Card({ title, description, stacks, imgLink, liveLink }) {
  return (
    <div className="project-card">
      <div className="card-img-container">
        <img className="h-full w-full object-cover" src={imgLink} />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <p className="text-[11px] opacity-[0.5] font-semibold">
          FEATURED PROJECT
        </p>
        <h3 className="text-[16px] font-bold uppercase">{title}</h3>
        <p className="text-[13px] opacity-[0.7] mt-1.5">{description}</p>
        <div className="flex flex-col gap-2">
          <p className="text-[11px] opacity-[0.5] font-semibold">
            TECHNOLOGIES
          </p>
          <div className="flex gap-1">
            {stacks.map((stack) => (
              <span className="card-tag">{stack}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-[12px] opacity-[0.7] font-medium">
          <p>All Systems operational</p>
          <div>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-0.5 card-view"
            >
              <span>View Details</span>
              <HiArrowLongRight className="text-[17px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
