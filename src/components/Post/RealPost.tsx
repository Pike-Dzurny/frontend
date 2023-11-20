"use client";

import React, { useContext } from 'react';
import clsx from 'clsx';

type Post = {
  user_poster_id: number;
  content: string;
  date_of_post: string;
  id: number;
};


interface RealPostProps {
  post: Post;
  className?: string;
}

export const RealPost: React.FC<RealPostProps> = ({ post, className }) => {
  let paddingClass = 'pr-4 pb-4 pl-2';
  if (post.content.length > 50) paddingClass = 'pr-4 pb-4 pl-2';
  if (post.content.length > 100) paddingClass = 'pr-4 pb-6 pl-2';

  return (
    <div>
      <div className={clsx(paddingClass, "rounded grid grid-cols-[auto,1fr] items-start text-slate-700", className, " ")}>

        <div className="p-1 pb-3 pr-2 flex items-center">
          <img className="rounded-full h-12 w-12 shadow-sm" src="/../static/pfp.png" alt="Author" />
        </div>
        
        <div className="flex flex-col justify-between overflow-hidden">
          <div>
            <div className='flex flex-row justify-between'>
              <div className="font-medium">{post.user_poster_id}</div>
              <div className="ml-2 text-right font-light font-mono">{post.date_of_post}</div>
            </div>
            <div className="overflow-hidden overflow-wrap break-words pb-2">
              <p className="hyphens-auto">{post.content}</p>
            </div>
          </div>
        </div>

      </div>
      <hr className="border-slate-300 border-1" />
    </div>
  );
};