"use client";
import Image from 'next/image'
import React, { useContext } from 'react';
import clsx from 'clsx';

export const PFP: React.FC = () => {

  return (
    <div className="p-16 relative">
      <div className={clsx(
        "rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto motion-safe:animate-spin-slow motion-safe:animate-pulse blur-lg",)}>
        <Image
          src="/../static/pfp.png" // Source of the image
          alt="User's profile picture" // Alt text
          width={200} // Width of the image
          height={200} // Height of the image
          className="rounded-full" // Makes the image circular
        />
      </div>
      <div className={clsx(
        "rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto",
      )}>
        <Image
          src="/../static/pfp.png" // Source of the image
          alt="User's profile picture" // Alt text
          width={200} // Width of the image
          height={200} // Height of the image
          className="rounded-full" // Makes the image circular
        />
      </div>
    </div>
  );
};