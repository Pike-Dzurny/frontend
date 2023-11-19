"use client";


import React, { useEffect, useState } from 'react';
import { PFP } from '../../components/pfp';

import { QueryClient, useInfiniteQuery } from 'react-query';
import { useIntersection } from '@mantine/hooks';
import { RealPost } from '../../components/Post/RealPost'; // Import RealPost at the top of your file

import backgroundImage from '../../static/backgroundpattern.png';
import Image from 'next/image'

import { Dropdown } from '../../components/Dropdown/Dropdown';

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
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


let items: any;
let author: string;
let body: string;
let title: string;
let id: number;
let real_post: any;

  return (
    <div>

          <main className="w-full">
              
              
          <div className="relative rounded-t-2xl">
            <div className="absolute inset-0 z-0 rounded-2xl" style={{backgroundImage: "url('/../static/trees.jpg')", backgroundSize: 'cover'}}></div>
            <div className="flex pl-4 pr-4 pb-16 pt-16 justify-center rounded-t-2xl backdrop-blur-xl z-10">
              <div className="relative flex flex-col justify-center items-center bg-sky-50 border border-sky-200 backdrop-blur-xl p-20 rounded-3xl w-5/6">  
                <div className='absolute -left-4 transform hover:scale-110 transition-transform'>
                  <PFP/>
                </div>
                <button className="absolute -bottom-4 -right-4 bg-blue-500 border-blue-300 hover:bg-blue-400 hover:shadow-sm shadow-lg  text-white rounded-full py-4 px-6 text-2xl">+</button>
              </div>
            </div>
          </div>

              
            <div className='backdrop-blur-sm border-slate-300 border-b border-t sticky top-0 z-10'>
              <Dropdown />
            </div>

            <div className='p-8 flex-col-reverse overflow-auto'>

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
            </div>
          </main>
        </div>


  );
}

