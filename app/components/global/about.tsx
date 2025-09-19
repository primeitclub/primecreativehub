import assets from "../../assets/assets";
import Card from "../reusable/card";
import SmallCard from "../reusable/smallCard";
import DataFlowConnector from "./DataFlowConnector";
import SectionHeading from "../reusable/SectionHeading";
export default function About() {
  return (
    <div
      id="about"
      className=" relative py-[90px] sm:py-[8vw] overflow-hidden sm:gap-[191px] m-auto px-4 sm:px-10 lg:px-28"
    >
      <div className="lg:max-w-[1028px] 2xl:max-w-[1240px] md:max-w-[766px] mx-auto 2xl:px-0 lg:px-10">
        {/* Heading for large screens */}
        <div className="flex lg:hidden justify-center mb-6">
          <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-mona text-[#F8F8FF] text-center">
            <span className="text-[#0797A0]">Who</span> We Are & <br></br>
            <span className="text-[#0797A0]">What</span> We Do
          </h3>
        </div>

        {/* Responsive main flex layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-16 md:gap-34 2xl:gap-4s  xl:px-[0]  py-10 lg:py-0  min-h-[500px] justify-between">
          {/* Cards Section */}
          <div className="  ">
            <div className="relative flex justify-between lg:justify-between items-center lg:flex-col w-full m-auto  h-full px-[16px] sm:px-0">
              <Card
                title="Prime IT Club"
                imageUrl={assets.ItclubLogo}
                subtitle="Processing Future"
                className="relative"
              />
              <DataFlowConnector className="scale-[0.7] sm:scale-[1.2] -rotate-90 lg:rotate-0 absolute lg:absolute lg:top-[27%] 2xl:top-[30%] z-[-1]" />
              <Card
                title=" Prime Creative Hub"
                imageUrl={assets.CreativeLogo}
                className=" relative bottom-[0px] lg:bottom-[0px]"
                subtitle="Wing of the Prime Club"
              />
            </div>
          </div>

          {/* Info + Small Cards Section */}
          <div className="flex flex-col  2xl:gao-6 w-full lg:w-2/3 h-fit">
            {/* Heading for mobile */}
            {/* <h2 className="hidden lg:block text-3xl sm:text-4xl lg:text-[42px] 2xl:text-[48px] font-bold text-[#F8F8FF] mb-4 leading-12">
              <span className="text-[#0797A0]">Who</span> We Are & <br />
              <span className="text-[#0797A0]">What</span> We Do
            </h2> */}
            <SectionHeading
              text={`Who We Are &\nWhat We Do`}
              spanIndex={[1, 5]}
              className="hidden lg:block leading-[1.1] text-left "
            />

            <p className="text-base sm:text-lg  lg:text-lg 2xl:text-xl font-normal text-gray-300 lg:w-[90%]">
              A wing of Prime IT Club, driving innovation through knowledge
              sharing and collaboration.
            </p>

            {/* Small Cards Grid */}
            <div className="2xl:mt-22 lg:mt-16 grid left-0 grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5 md:p-0 p-6 2xl:pr-[70px]">
              <SmallCard
                className=""
                imageUrl={assets.developIcon}
                title="Develop"
              />
              <SmallCard
                className=""
                imageUrl={assets.innovateIcon}
                title="Innovate"
              />
              <SmallCard
                className=""
                imageUrl={assets.collaborateIcon}
                title="Collaborate"
              />
              <SmallCard
                className=""
                imageUrl={assets.workshopIcon}
                title="WorkShops"
              />
              <SmallCard
                className=""
                imageUrl={assets.knowledgeIcon}
                title="Knowledge Sharing"
              />
              <SmallCard
                className=""
                imageUrl={assets.mentorIcon}
                title="Mentor"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-b from-transparent h-[15%] lg:h-[15%]  via-[#020e0f]/80 via-[55%]  to-[#020e0f] absolute inset-0 z-[-12]  "></div>
        <div className="absolute blurred-bg inset-0 z-[-13] [clip-path:inset(0_0_88%_0)] ">
          <div className="bg-grads absolute h-full w-[50%] left-0 top-0 z-10 -scale-y-100"></div>
          <div className="bg-grads  absolute h-full w-[50%] right-0 top-0 z-10 -scale-x-100 -scale-y-100"></div>
          <div className="bg_top_graident z-10 absolute top-0 left-0 w-full h-full -scale-y-100"></div>
        </div>

        {/* <div
        className="
    pointer-events-none
    absolute inset-0
    z-[-9]
    bg-white/0
    backdrop-blur-md
    [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)] 
    [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)]
  "
      />

      <div className="absolute inset-0 z-[-10] [clip-path:inset(0_0_93%_0)]">
        <div className="bg-grads absolute h-full w-[50%] left-0 top-0 -scale-y-100"></div>
        <div className="bg-grads absolute h-full w-[50%] right-0 top-0 -scale-x-100 -scale-y-100"></div>
        <div className="bg_top_graident absolute inset-0 -scale-y-100"></div>
      </div> */}

        {/* Background Circle */}
        <div className="absolute w-56 h-56 left-[-180px] top-[30%] lg:w-[413px] 2xls:w-[620px] lg:h-[500px]  m-auto bg-[#0796a049] rounded-full 2xl:blur-[200px]  blur-[100px] -z-10"></div>
        <div className="absolute w-56 h-56 right-[-220px] top-[20%] lg:w-[400px] lg:h-[460px]  m-auto bg-[#0796a049] rounded-full 2xl:blur-[100px]  blur-[100px] -z-10"></div>
      </div>
    </div>
  );
}
