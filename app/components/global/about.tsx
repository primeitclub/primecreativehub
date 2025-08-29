import assets from "../../assets/assets";
import Card from "../reusable/card";
import SmallCard from "../reusable/smallCard";
import DataFlowConnector from "./DataFlowConnector";


export default function About() {
  return (
    <div id="about" className="w-full relative py-[8vw] overflow-hidden sm:gap-[191px] m-auto px-4 sm:px-10 lg:px-28">
      {/* Heading for large screens */}
      <div className="flex lg:hidden justify-center mb-12">
        <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-mona text-[#F8F8FF] text-center ">
          <span className="text-[#0797A0]">Who</span> We Are & <br></br>
          <span className="text-[#0797A0]">What</span> We Do
        </h3>
      </div>

      {/* Responsive main flex layout */}
  <div className="flex flex-col lg:flex-row items-stretch gap-24 lg:gap-28 px-0 xl:px-[8%] 2xl:px-[15%] py-10 lg:py-0  min-h-[500px]">

        {/* Cards Section */}
  <div className="w-full lg:w-1/3 ">
          <div className="relative flex justify-between lg:justify-between items-center lg:flex-col w-full m-auto  h-full" >
            <Card
              title="Prime IT Club"
              imageUrl={assets.ItclubLogo}
              subtitle="Processing Future"
              className="relative"
            />
            <DataFlowConnector className="scale-[0.6] sm:scale-100 -rotate-90 lg:rotate-0 absolute lg:absolute lg:top-[30%] z-[-1]" />
            <Card
              title=" Prime Creative Hub"
              imageUrl={assets.CreativeLogo}
              className=" relative bottom-[0px] lg:bottom-[0px]"
              subtitle="Wing of the Prime Club"
            />
          </div>
 </div>

        {/* Info + Small Cards Section */}
  <div className="flex flex-col gap-4 w-full lg:w-2/3 h-fit ">
          {/* Heading for mobile */}
            <h2 className="hidden lg:block text-3xl sm:text-4xl md:text-[64px] font-bold text-[#F8F8FF] mb-4 leading-18">
              <span className="text-[#0797A0]">Who</span> We Are & <br />
              <span className="text-[#0797A0]">What</span> We Do
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-normal text-gray-300">
              A wing of Prime IT Club, driving innovation through knowledge sharing and collaboration.
            </p>

          {/* Small Cards Grid */}
          <div className="md:mt-14 grid left-0 grid-cols-2 sm:grid-cols-3 gap-8 md:gap-4 md:p-0 p-6">
            <SmallCard className="" imageUrl={assets.developIcon} title="Develop" />
            <SmallCard className="" imageUrl={assets.innovateIcon} title="Innovate" />
            <SmallCard className="" imageUrl={assets.collaborateIcon} title="Collaborate" />
            <SmallCard className="" imageUrl={assets.workshopIcon} title="WorkShops" />
            <SmallCard className="" imageUrl={assets.knowledgeIcon} title="Knowledge Sharing" />
            <SmallCard className="" imageUrl={assets.mentorIcon} title="Mentor" />
          </div>

        </div>
      </div>

      {/* Background Circle */}
      {/* <div className="absolute w-56 h-56 left-[-50px] top-[150px] lg:w-72 lg:h-72  m-auto bg-gradient-to-br from-[#0f172a] via-[#0797A0] to-[#0a0f16] rounded-full blur-[125px] -z-10"></div>
      <div className="absolute w-56 h-56 right-[-50px] top-[150px] lg:w-72 lg:h-72  m-auto bg-gradient-to-br from-[#0f172a] via-[#0797A0] to-[#0a0f16] rounded-full blur-[125px] -z-10"></div> */}
    </div>
  );
}
