"use client";

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import clsx from 'clsx';
import { Cookie } from 'next/font/google';

const MyPage = () => {

  const handleConfirmClick = () => {
    console.log('Confirm clicked');
    Cookies.set('hasClicked', 'true', { expires: 7 });
  };
  
  const handleUnconfirmClick = () => {
    console.log('Unconfirm clicked');
    Cookies.set('hasClicked', 'false', { expires: 7 });
  };


  return (
    <div className="flex items-center justify-center w-full">
      {/* Other elements... */}
      <div className={clsx(
        "fixed top-1/2 transform -translate-y-1/2 w-1/2 h-2/3 p-8 overflow-auto rounded shadow-lg hover:sha border flex flex-col justify-between bg-base-200 border-base-100"
      )}>
        {/* Other elements... */}
        <button onClick={handleConfirmClick}>Confirm</button>
        <button onClick={handleUnconfirmClick}>Unconfirm</button>
          <a href="/">home Up</a>
        </div>
    </div>
  );
};

export default MyPage;