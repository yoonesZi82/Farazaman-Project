import React from "react";
export default function mainItem({ }: any) {
    return(
 <><div className="countainer3 relative top-0 flex justify-center items-center w-full h-10 bg-black mt-3 text-aliceblue"> Slider Start Up! </div><div className="countainer4 relative top-0 w-full h-[500px] bg-dark z-10">
            <div className="about-box absolute right-[130px] top-[40px] w-[643px] h-[415px] bg-glass z-20 flex justify-center items-center">
                <div className="subject absolute top-[25px] w-full h-5 flex justify-center items-center text-aliceblue">
                    <p className="value-subject"> ارتباط با ما </p>
                </div>
                <label className="neme-efect absolute right-[15px] top-[92px] text-[20px] text-white">
                    : نام
                </label>
                <input dir="rtl" type="text" placeholder="نام خود را وارد کنید" className="name absolute right-[90px] top-[100px] bg-aliceblue w-35% h-5 text-[15px] text-slate-950 indent-[10px] border-none" required/>
                    <label className="email-efect absolute right-[15px] top-[132px] text-[20px] text-white" >
                    : ایمیل
                </label>
                <input dir="rtl" type="email" placeholder="ایمیل خود را وارد کنید" className="email absolute right-[90px] top-[140px] bg-aliceblue w-35% h-5 text-[15px] text-slate-950 indent-[10px] border-none" required />
                <label className="request-efect absolute right-[15px] top-[172px] text-[20px] text-white">
                    : متن
                </label>
                <textarea dir="rtl" placeholder="متن درخواست..." className="request absolute right-[90px] top-[180px] bg-aliceblue w-50% h-[185px] text-[15px] text-slate-950 indent-[10px] resize-none overflow-auto border-none" required> </textarea>
                <input type="submit" value="ارسال" className="record flex justify-center items-center absolute left-[75px] bottom-[50px] w-12% h-[30px] bg-red-600 text-aliceblue border-none cursor-pointer rounded-[5px]" />

            </div>
            <div className="icone absolute left-[252px] top-[45px] text-aliceblue border-none flex justify-center items-center p-[15px] m-[10px] text-[180px]">
                <i className="fa fa-envelope-o text-[180px]"></i>
            </div>
            <div className="social-media relative top-[370px] left-[180px] w-25% h-10 bg-glass backdrop-blur-[1px] z-40 flex justify-center items-cente rounded-[6px] gap-[60px]">
                <div className="box-icone1 relative top-1 flex justify-center items-center border-none rounded-[50%] w-[32px] h-[32px] bg-aliceblue text-[25px] cursor-pointer">
                    <i className=" instagram fa fa-instagram absolute text-pink-700 text-[25px]">  </i>
                </div>
                <div className="box-icone2 relative top-1 flex justify-center items-center border-none rounded-[50%] w-[32px] h-[32px] bg-aliceblue text-[25px] cursor-pointer">
                    <i className="telegram fa fa-telegram absolute text-sky-600 text-[25px]">  </i>
                </div>
                <div className="box-icone3 relative top-1 flex justify-center items-center border-none rounded-[50%] w-[32px] h-[32px] bg-aliceblue text-[25px] cursor-pointer">
                    <i className="whatsapp fa fa-whatsapp absolute text-green-600 text-[25px]">  </i>
                </div>
                <div className="box-icone4 relative top-1 flex justify-center items-center border-none rounded-[50%] w-[32px] h-[32px] bg-aliceblue text-[25px] cursor-pointer">
                    <i className="twitter fa fa-twitter absolute text-sky-700 text-[25px]">  </i>
                </div>
            </div>
        </div><script src="./js/app.js"></script></>
)} ;

