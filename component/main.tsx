import React from "react";
export default function mainItem({ }: any) {
    return(
        <div className="countainer1 relative top-[100px] h-[392px] -m-2">
        <div className="header">

        </div>
        <div className="box relative -top-2 left-0 w-full h-[400px] z-10 text-aliceblue bg-dark">
            <div className="image-box absolute top-[75px] left-20 w-25% h-60% m-0 z-20 ">
            <img src="./image/Startup.jpg" alt="" title="StratUP" className="startup-image w-full h-full"/>
            </div>
            <div className="description-box flex justify-center items-center absolute w-50% right-[125px] top-[100px] max-h-40% overflow-hidden">
                <p className="description text-[20px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore fuga eveniet dicta possimus sed alias 
                    ipsam facere voluptatibus ullam at aperiam vitae, veniam nesciunt doloribus provident blanditiis dolor consequuntur?
                </p>
            </div>
        </div>
        <div className="investment-button absolute left-[940px] bottom-[87px] flex justify-center items-center border-none z-30">
            <a href="#" className="investment-link list-none no-underline">
               <button className="investment w-[130px] h-[40px] flex justify-center items-center text-[15px] overflow-hidden 
               border-none rounded-[5px] cursor-pointer bg-gray text-black shadow-shadow1 shadow-aliceblue hover:scale-[1.2] duration-500">
                    سرمایه گذاری شخصی
               </button>
            </a>
        </div>
    </div>
    ) ;
};
