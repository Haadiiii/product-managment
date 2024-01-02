import React, { useEffect, useState } from "react";
import group from "../assets/Group.png";
import { FaStar } from "react-icons/fa";
const Listing = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/getData");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="justify-center items-start bg-white flex flex-col mt-20">
      <div className="self-stretch flex w-full flex-col items-center max-md:max-w-full">
        <div className="bg-gray-900 bg-opacity-50 self-stretch flex w-full flex-col justify-center items-stretch p-px max-md:max-w-full">
          <div className="flex-col overflow-hidden relative flex min-h-[358px] justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              srcSet={group}
              className="absolute h-full w-full object-cover object-center inset-0 opacity-60"
            />
            <div className="relative flex w-[833px] max-w-full flex-col items-center mt-6 mb-10">
              <div className="text-white text-center text-6xl font-bold uppercase w-full max-md:text-4xl">
                LISTING
              </div>
              <div className="text-white text-opacity-90 text-center text-base leading-7 self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tellus neque, malesuada sit amet auctor ac, euismod
                sed enim. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Donec sed ultricies
                libero. Morbi porttitor semper nibh, bibendum ultricies elit
                mollis id.
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-sm bg-white z-[1] flex mt-0 w-full max-w-[1361px] flex-col items-center pt-12 pb-8 px-16 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1120px] flex-col mt-1.5 max-md:max-w-full">
            <div className="text-blue-950 text-center text-3xl font-semibold leading-8 tracking-normal uppercase self-stretch max-md:max-w-full">
              LIST OF PRODUCTS
            </div>
            <div className="bg-slate-100 self-stretch flex w-full items-stretch justify-between  mt-7 pl-5  py-4 rounded-md max-md:max-w-full  max-md:pr-5">
              <div className="grid grid-cols-5 w-full gap-32 items-start max-md:max-w-full ">
                <div className="justify-center text-gray-600 text-xs font-semibold tracking-wide">
                  Name
                </div>
                <div className="justify-center text-gray-600 text-xs font-semibold tracking-wide">
                  Email
                </div>
                <div className="justify-center text-gray-600 text-xs font-semibold tracking-wide">
                  Product Name
                </div>
                <div className="justify-center text-gray-600 text-xs font-semibold tracking-wide">
                  RATING
                </div>
                <div className="justify-center text-gray-600 text-xs font-semibold tracking-wide">
                  ACTION
                </div>
              </div>
            </div>
            <div className="  mt-8 max-md:max-w-full max-md:flex-wrap">
              <div>
                {data?.data?.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between  items-start mb-4"
                  >
                    <div className="grid grid-cols-5 gap-20 items-center">
                      <div className="text-gray-600 text-sm font-semibold">
                        {item.name}
                      </div>

                      <div className="text-gray-600 text-sm font-semibold whitespace-nowrap">
                        {item.email}
                      </div>

                      <div className="text-gray-600 text-sm font-semibold whitespace-nowrap">
                        {item.product}
                      </div>
                      <div className="flex gap-2 cursor-pointer">
                        {[...Array(item.star_count)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="max-w-full text-xl text-yellow-400"
                          />
                        ))}
                        {[...Array(5 - item.star_count)].map((_, index) => (
                          <FaStar
                            key={item.star_count + index}
                            className="max-w-full text-xl text-gray-400"
                          />
                        ))}
                      </div>
                      <button className="text-white text-xs font-semibold  bg-pink-900 justify-center  p-3.5 rounded-md">
                        View Detail
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
