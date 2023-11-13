"use client";


import React, { useEffect } from 'react';
import { PFP } from '../../components/pfp';

import { QueryClient, useInfiniteQuery } from 'react-query';
import { useIntersection } from '@mantine/hooks';
import { RealPost } from '../../components/RealPost'; // Import RealPost at the top of your file

import backgroundImage from '../../static/backgroundpattern.png';

const fetchPost = async (page: number) => {
  const response = await fetch(`http://127.0.0.1:8000/getfeed?page=${page}&size=1`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  const items = data.items;
  return data;
};



export default function Home() {


  const queryClient = new QueryClient();
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
      ['query'],
      async ({ pageParam = 1 }) => {
        const response = await fetchPost(pageParam);
        return response;
      },
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.page < lastPage.pages) {
            return lastPage.page + 1;
          }
          return false;
        },
      }
  );
  const lastPostRef = React.useRef<HTMLDivElement>(null)

  const {ref, entry} = useIntersection({
    threshold: 1,
  })

  useEffect(() => {
    if(entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry, fetchNextPage]);

  const _posts = data?.pages.flatMap((page) => page)


let items: any;
let author: string;
let body: string;
let title: string;
let id: number;
let real_post: any;

  return (
    <div>
      <div className="flex">
        <div className="flex flex-col flex-1 items-start justify-center align">
        </div>
        <div className="flex border-l border-r border-base-200 shadow-lg shadow-base-200 min-h-screen flex-col flex-1 items-center justify-between p-8 mx-auto z-0 overflow-auto bg-base-200">
          <main className="w-full">
            <div className="flex items-center justify-center w-full pb-4">
              <PFP/>
            </div>
            {/*<div className='justify-center content-center'>
              <input type="text" placeholder="Type here" className="justify-center input input-bordered input-primary w-full max-w-xs" />
            </div> */}
              {_posts?.map((post, i) => {
                items = post.items[0];

                author = items.author;
                body = items.body;
                title = items.title;
                id = items.id;
                
                real_post = {id: id, title: title, body: body, author: author};

                
                if(i === _posts.length-1) {

                  return <div className="h-100 mb-4" ref={ref} key={post.id}><RealPost post={real_post} /> </div>
                }
                return ( 
                <div className="h-100 mb-4" key={post.id}><RealPost post={real_post} /></div>)
              })}
            <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
              {
                isFetchingNextPage
                ? 'Loading more...'
                : (data?.pages.length ?? 0) < 6
                ? 'Load More'
                : 'Nothing more to load'
              }
            </button>
          </main>
        </div>
        <div className="flex flex-col flex-1 items-center">
        </div>
      </div>
    </div>
  );
}

