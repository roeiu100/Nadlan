import React from "react";
import { Facebook,Instagram,WhatsApp } from "@mui/icons-material";


import { Divider } from "@mui/material";
const Footer = () => {
  return (
    <div className="mt-2">
      <Divider />
      <footer className="block py-4 pt-12  bg-slate-50 relative ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4 "> 
              <h4 className="text-3xl fonat-semibold text-blueGray-700 ml-[245px]">
                בואו נשמור על קשר
              </h4>
           
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600 ">
            תמצאו אותנו באחת מהפלטפורמות הבאות ותקבלו ייעוץ בחינם באותו היום.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 ">
                <button
                  className="bg-white shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                  type="button"
                >
                  <a className="text-green-400 " rel="noreferrer" href="https://wa.me/+905391182712?text=היי%20לאון,%20אני%20רוצה%20להתייעץ%20איתך%20בנוגע%20לנדל''ן%20בצפון%20קפריסין" target="_blank">
                    <WhatsApp/>
                  </a>
                </button>
                <button
                  className="bg-white shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                  type="button"
                >
                  <a
                    className="text-pink-300" rel="noreferrer"
                    href="https://instagram.com/nadlan_cafrisin?igshid=YmMyMTA2M2Y="
                    target="_blank"
                  >
                    <Instagram />
                  </a>
                </button>
                <button
                  className="bg-white shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                  type="button"
                >
                  <a
                    className="text-blue-800" rel="noreferrer"
                    href="https://m.facebook.com/profile.php?id=100090614795463"
                    target="_blank"
                  >
                    <Facebook />
                  </a>
                </button>
              
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
            
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                <hr className="my-4 border-white" />
                Copyright © <span id="get-current-year">2023</span> belongs to
                the authors
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;