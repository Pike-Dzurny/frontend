"use client";

import React, { useContext } from 'react';
import clsx from 'clsx';

interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
}

interface RealPostProps {
  post: Post;
  className?: string;
}

export const RealPost: React.FC<RealPostProps> = ({ post, className }) => {
  let paddingClass = 'pt-4 pr-4 pb-4 pl-4';
  if (post.body.length > 50) paddingClass = 'pt-4 pr-4 pb-4 pl-4';
  if (post.body.length > 100) paddingClass = 'pt-6 pr-4 pb-4 pl-4';

  return (
    <div className='p-1'>
      <div className={clsx(paddingClass, "rounded grid grid-cols-[auto,1fr] items-start bg-base-300 border-base-100", className, " ")}>
        <div className="p-1 pb-3 pr-2 flex items-center">
          <img className="rounded-full h-12 w-12" src="/../static/pfp.png" alt="Author" />
        </div>
        <div className="flex flex-col justify-between overflow-hidden">
          <div>
            <div className="text-base-content font-bold">{post.author}</div>
            <div className="overflow-hidden overflow-wrap break-words pb-2">
              <p className="text-base-content">{post.body}</p>
            </div>
          </div>
          <hr className="border-neutral mb-4" />
          <div className="text-base-300-content">test 123:3333</div>
        </div>
      </div>
    </div>
  );
};