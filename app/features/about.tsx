import assets from "../assets/assets";
import Card from "../components/reusable/card";
import SmallCard from "../components/reusable/smallCard";

export default function About() {
    return (
      <div className="w-ful relative py-[50px]">
       {/* <div className="flex justify-center m-10px items-center"><h3 className="text-[80px] font-[800] font-mona">What we do ?</h3></div> */}

       <div className="flex  w-full item-center sm:flex-col   gap-[346px] px-[100px] ">
       <div className="flex flex-col sm:flex gap-[90px]">
           <Card title="Prime It Club" imageUrl={assets.ItclubLogo} subtitle="Promising Future"  />
           <Card title="Creative Hub" imageUrl={assets.CreativeLogo} subtitle="Wing of the Prime Club"  />

        </div>
        <div className="flex gap-[5px] flex-col ">
            <div > <h2 className="text-[64px] font-[700]  text-[#F8F8FF] ">What we do?</h2>
                <p className="text-[20px] font-[400] ">Creative Hub empowers students to explore design, collaborated on multimedia projects, and innovate through creative expression, all as part of Prime IT Club's mission to shape the future of technology and creativity.</p>
                </div>

            <div className="my-[24px] grid mx-2 grid-cols-3 sm:grid-cols-2  p-[20px] " > 
                <SmallCard  imageUrl={assets.developIcon} title="Develop" />
                <SmallCard  imageUrl={assets.innovateIcon}  title="Innovate" />
                <SmallCard  imageUrl={assets.collaborateIcon} title="Collaborate" />
                <SmallCard  imageUrl={assets.workshopIcon} title="WorkShop" />
                <SmallCard  imageUrl={assets.knowledgeIcon} title="Knowledge Sharing Session" />
                <SmallCard  imageUrl={assets.mentorIcon} title="Mentor" />
                
            </div>
            <button  className=" flex px-[15px] m-auto  rounded-[10px] justify-center align-middle  border border-solid border-[#0797A0]"> <p className="text-[14px]">View More</p></button>
        </div >

       </div>
       <div className="absolute w-[280px] h-[280px] inset-0 bg-gradient-to-br from-[#0f172a] via-[#216de7] to-[#0a0f16] -z-1" />

      
        
      </div>

    )
}