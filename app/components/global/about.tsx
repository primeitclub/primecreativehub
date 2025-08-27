import assets from "../../assets/assets";
import Card from "../reusable/card";
import SmallCard from "../reusable/smallCard";
import DataFlowConnector from "./DataFlowConnector";


export default function About() {
  return (
    <div className="w-full relative py-[8vw] px-10 overflow-hidden sm:px-10 lg:px-20">
      {/* Heading for large screens */}
      <div className="flex lg:hidden justify-center mb-12">
        <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-mona text-[#F8F8FF] text-center">
          <span className="text-[#0797A0]">Who</span> We Are &{" "}
          <span className="text-[#0797A0]">What</span> We Do
        </h3>
      </div>

      {/* Responsive main flex layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-28">

        {/* Cards Section */}
        <div className="w-full lg:w-1/3">
          <div className="relative flex sm:flex-col flex-row gap-8  w-[276px] h-[60vh] m-auto " >
            <Card
              title="Prime IT Club"
              imageUrl={assets.ItclubLogo}
              subtitle="Promising Future"
              iwidth={94}
              iheight={41}
              className="absolute w-full top-0"
            />
            <DataFlowConnector className="top-[27%] -z-1" />
            <Card
              title=" Prime Creative Hub"
              imageUrl={assets.CreativeLogo}
              iwidth={94}
              iheight={41}
              className="absolute w-full bottom-0"
              subtitle="Wing of the Prime Club"
            />
          </div>
        </div>

        {/* Info + Small Cards Section */}
        <div className="flex flex-col gap-8 w-full lg:w-2/3">
          {/* Heading for mobile */}
          <div>
            <h2 className="hidden lg:block text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F8FF] mb-4">
              <span className="text-[#0797A0]">Who</span> We Are & <br />
              <span className="text-[#0797A0]">What</span> We Do
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-normal text-gray-300">
              A wing of Prime IT Club, driving innovation through knowledge sharing and collaboration.
            </p>
          </div>

          {/* Small Cards Grid */}
          <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <SmallCard imageUrl={assets.developIcon} title="Develop" />
            <SmallCard imageUrl={assets.innovateIcon} title="Innovate" />
            <SmallCard imageUrl={assets.collaborateIcon} title="Collaborate" />
            <SmallCard imageUrl={assets.workshopIcon} title="WorkShop" />
            <SmallCard imageUrl={assets.knowledgeIcon} title="Knowledge" />
            <SmallCard imageUrl={assets.mentorIcon} title="Mentor" />
          </div>

          {/* Button */}
          <button className="px-6 py-3 mx-auto w-[140px] rounded-lg border border-[#0797A0] text-[#0797A0] hover:bg-[#0797A0] hover:text-white transition">
            View More
          </button>
        </div>
      </div>

      {/* Background Circle */}
      <div className="absolute w-56 h-56 left-[-50px] top-[150px] lg:w-72 lg:h-72  m-auto bg-gradient-to-br from-[#0f172a] via-[#0797A0] to-[#0a0f16] rounded-full blur-[125px] -z-10"></div>
      <div className="absolute w-56 h-56 right-[-50px] top-[150px] lg:w-72 lg:h-72  m-auto bg-gradient-to-br from-[#0f172a] via-[#0797A0] to-[#0a0f16] rounded-full blur-[125px] -z-10"></div>
    </div>
  );
}
