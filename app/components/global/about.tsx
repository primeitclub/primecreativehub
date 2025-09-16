import assets from "../../assets/assets";
import Card from "../reusable/card";
import SmallCard from "../reusable/smallCard";
import DataFlowConnector from "./DataFlowConnector";


export default function About() {
  return (
    <div id="about" className="w-full relative py-[8vw] overflow-hidden sm:gap-[191px] m-auto px-4 sm:px-10 lg:px-28">
      {/* Heading for large screens */}
      <div className="flex lg:hidden justify-center mb-12">
        <h3 className="text-[20px] md:text-[28px] 2xl:text-[48px] font-extrabold font-mona text-[#F8F8FF] text-center ">
          <span className="text-[#0797A0]">Who</span> We Are & <br></br>
          <span className="text-[#0797A0]">What</span> We Do
        </h3>
      </div>

      {/* Responsive main flex layout */}
  <div className="flex flex-col lg:flex-row items-stretch gap-24 md:gap-18 2xl:gap-28  xl:px-[0] 2xl:px-[8%] py-10 lg:py-0  min-h-[500px]">

        {/* Cards Section */}
  <div className="w-full lg:w-1/3 ">
          <div className="relative flex justify-between lg:justify-between items-center lg:flex-col w-full m-auto  h-full" >
            <Card
              title="Prime IT Club"
              imageUrl={assets.ItclubLogo}
              subtitle="Processing Future"
              className="relative"
            />
            <DataFlowConnector className="scale-[0.6] sm:scale-100 -rotate-90 lg:rotate-0 absolute lg:absolute lg:top-[27%] 2xl:top-[30%] z-[-1]" />
            <Card
              title=" Prime Creative Hub"
              imageUrl={assets.CreativeLogo}
              className=" relative bottom-[0px] lg:bottom-[0px]"
              subtitle="Wing of the Prime Club"
            />
          </div>
 </div>

        {/* Info + Small Cards Section */}
  <div className="flex flex-col gap-2 2xl:gap-4 w-full lg:w-2/3 h-fit 2xl:pr-20 lg:pr-10 md:pr-0">
          {/* Heading for mobile */}
            <h2 className="hidden lg:block text-[20px] md:text-[28px] lg:leading-0 leading-0  2xl:text-[48px] font-bold text-[#F8F8FF] mb-4 2xl:leading-12">
              <span className="text-[#0797A0]">Who</span> We Are & <br />
              <span className="text-[#0797A0]">What</span> We Do
            </h2>
            <p className="text-[12px] sm:text-[12px]  lg:text-[16px] 2xl:text-[20px] font-normal text-gray-300">
              A wing of Prime IT Club, driving innovation through knowledge sharing and collaboration.
            </p>

          {/* Small Cards Grid */}
          <div className="2xl:mt-14 lg:mt-10 grid left-0 grid-cols-2 sm:grid-cols-3 gap-8 md:gap-4 md:p-0 p-6">
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
      <div className="absolute w-56 h-56 left-[-180px] top-[30%] lg:w-96 lg:h-96  m-auto bg-gradient-to-br from-[#0f172a] via-[#0796a044] to-[#0a0f16] rounded-full blur-[950px] -z-10"></div>
      <div className="absolute w-56 h-56 right-[-220px] top-[20%] lg:w-[400px] lg:h-[460px]  m-auto bg-[#0796a049] rounded-full blur-[1050px] -z-10"></div>
    </div>
  );
}
