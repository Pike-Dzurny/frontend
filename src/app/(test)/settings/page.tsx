"use client";
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { themeChange } from 'theme-change'



const AboutPage = () => {

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  

  return (
    <div className="flex pt-16">
    {/*<div className="flex flex-col flex-1 items-start justify-center align">
      <Sidebar />
    </div> */}
    <div className="flex flex-col flex-1 items-start justify-center align">
    </div>
    <div className="flex min-h-screen flex-col flex-1 items-center justify-between p-8 mx-auto z-0 overflow-auto">
      <main className="w-full">

        <div className="flex items-center justify-center w-full">
        </div>
        
        <div className={clsx(
          "fixed top-1/2 transform -translate-y-1/2 w-1/2 h-2/3 p-8 overflow-auto rounded shadow-lg hover:sha transition-colors border flex flex-col justify-between bg-base-200 border-base-100 shadow-lg"
        )}>
          <div className="relative inline-flex items-center cursor-pointer">
            <select data-choose-theme>
              <option value="">Default</option>
              <option value="dark">Dark</option>
              <option value="retro">Retro</option>
              <option value="black">Retro</option>
              <option value="light">Light</option>

            </select>
          </div>
        </div>
      </main>
    </div>
    <div className="flex flex-col flex-1 items-center">
      { }
    </div>
  </div>
  );
};

export default AboutPage;