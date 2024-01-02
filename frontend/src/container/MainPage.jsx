import { useEffect, useState } from "react";
import reactangleImage from "../assets/Rectangle.png";
import { FaStar, FaUser, FaWallet } from "react-icons/fa";
import Modal from "../component/Modal";
function MainPage() {
  const [selectedStars, setSelectedStars] = useState({
    productManagementTool: 0,
    inventoryManagementProduct: 0,
    hospitalManagementSystem: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalData, setModalData] = useState({
    name: "",
    email: "",
    product: "",
    starCount: 0,
  });

  console.log("modalData", modalData);

  const handleStarClick = (card, starCount) => {
    setSelectedStars({
      ...selectedStars,
      [card]: starCount,
    });

    // Set the product name for the modal data
    setModalData({
      ...modalData,
      product: card,
      starCount,
    });

    // Open the modal
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (data) => {
    setIsModalOpen(false);

    async function sendFeedback() {
      const response = await fetch("http://localhost:3000/submitData", {
        method: "POST",
        body: JSON.stringify({
          ...modalData,
          ...data,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await response.json();
      console.log("json", json);
    }
    sendFeedback();
  };

  console.log("selectedStars", selectedStars);
  return (
    <div>
      <div
        className="flex-col  overflow-hidden relative flex min-h-[561px] items-stretch px-20 py-12 max-md:px-5 mt-20"
        style={{
          zIndex: 0,
        }}
      >
        <img
          loading="lazy"
          srcSet={reactangleImage}
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative text-blue-950 text-center text-3xl font-semibold leading-8 tracking-normal uppercase self-center">
          VIEW OUR PRODUCTS
        </div>
        <div className="relative text-blue-950 text-opacity-90 text-center text-base font-medium leading-5 tracking-normal self-center max-w-[936px] mt-14 max-md:max-w-full max-md:mt-10">
          Lorem Ipsum has been the industry's standard the dummy text ever Lorem
          Ipsum has been the industry's standard. dummy text ever{" "}
        </div>
        <div className="relative mt-10 mx-4 max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="bg-red-50 relative flex w-full grow flex-col items-stretch mx-auto px-7 py-8 max-md:mt-7 max-md:px-5">
                <div className="text-blue-950 text-center text-base font-bold leading-6 self-center w-[244px]">
                  Product Management Tool
                </div>
                <div className="text-slate-600 text-justify text-sm leading-6 self-center w-[287px] max-w-full mt-8">
                  Lorem Ipsum has been the industry's standard the dummy text
                  ever Lorem Ipsum. Lorem Ipsum has been the industry's standard
                  the dummy text ever Lorem Ipsum...
                </div>
                <div className="shadow-lg bg-neutral-300 bg-opacity-50 flex shrink-0 h-px flex-col mt-6" />
                <div className="flex w-full justify-between gap-5 mt-3 items-start">
                  <div className="flex items-stretch gap-3">
                    <FaWallet className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full text-slate-600 " />
                    <div className="text-slate-600 text-center text-base font-semibold leading-5 self-center my-auto">
                      200$
                    </div>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    {[1, 2, 3, 4, 5].map((starCount) => (
                      <FaStar
                        key={starCount}
                        className={`max-w-full text-xl ${
                          starCount <= selectedStars.productManagementTool
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                        onClick={() =>
                          handleStarClick("product Management Tool", starCount)
                        }
                      />
                    ))}
                  </div>
                </div>
                <button className="text-pink-900 text-sm font-medium leading-5 tracking-normal whitespace-nowrap border bg-red-50 self-center justify-center items-stretch mt-9 px-8 py-4 border-solid border-pink-900 max-md:px-5 cursor-pointer">
                  Show Detail
                </button>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="border bg-red-50 relative flex w-full grow flex-col items-stretch mx-auto px-7 py-8 border-dashed border-pink-900 max-md:mt-7 max-md:px-5">
                <div className="text-blue-950 text-center text-base font-bold leading-6 self-center whitespace-nowrap">
                  Inventory Management Product
                </div>
                <div className="text-slate-600 text-justify text-sm leading-6 self-center w-[287px] max-w-full mt-8">
                  Lorem Ipsum has been the industry's standard the dummy text
                  ever Lorem Ipsum. Lorem Ipsum has been the industry's standard
                  the dummy text ever Lorem Ipsum...
                </div>
                <div className="shadow-lg bg-neutral-300 bg-opacity-50 flex shrink-0 h-px flex-col mt-6" />
                <div className="flex w-full justify-between gap-5 mt-3 items-start">
                  <div className="flex items-stretch gap-3">
                    <FaWallet className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full text-slate-600 " />
                    <div className="text-slate-600 text-center text-base font-semibold leading-5 self-center my-auto">
                      200$
                    </div>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    {[1, 2, 3, 4, 5].map((starCount) => (
                      <FaStar
                        key={starCount}
                        className={`max-w-full text-xl ${
                          starCount <= selectedStars.inventoryManagementProduct
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                        onClick={() =>
                          handleStarClick(
                            "inventory Management Product",
                            starCount
                          )
                        }
                      />
                    ))}
                  </div>
                </div>
                <button className="text-white text-sm font-medium leading-5 tracking-normal whitespace-nowrap border bg-pink-900 self-center justify-center items-stretch mt-9 px-8 py-4 border-solid border-pink-900 max-md:px-5">
                  Show Detail
                </button>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-red-50 relative flex w-full grow flex-col items-stretch mx-auto px-6 py-8 max-md:mt-7 max-md:px-5">
                <div className="text-blue-950 text-center text-base font-bold leading-6 self-center whitespace-nowrap">
                  Hospital Management System
                </div>
                <div className="text-slate-600 text-justify text-sm leading-6 self-center w-[287px] max-w-full mt-8">
                  Lorem Ipsum has been the industry's standard the dummy text
                  ever Lorem Ipsum. Lorem Ipsum has been the industry's standard
                  the dummy text ever Lorem Ipsum...
                </div>
                <div className="shadow-lg bg-neutral-300 bg-opacity-50 flex shrink-0 h-px flex-col mt-6" />
                <div className="flex w-full justify-between gap-5 mt-3 px-px items-start">
                  <div className="flex items-stretch gap-3">
                    <FaWallet className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full text-slate-600 " />
                    <div className="text-slate-600 text-center text-base font-semibold leading-5 self-center my-auto">
                      200$
                    </div>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    {[1, 2, 3, 4, 5].map((starCount) => (
                      <FaStar
                        key={starCount}
                        className={`max-w-full text-xl ${
                          starCount <= selectedStars.hospitalManagementSystem
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                        onClick={() =>
                          handleStarClick(
                            "hospital Management System",
                            starCount
                          )
                        }
                      />
                    ))}
                  </div>
                </div>
                <button className="text-pink-900 text-sm font-medium leading-5 tracking-normal whitespace-nowrap border bg-red-50 self-center justify-center items-stretch mt-9 px-8 py-4 border-solid border-pink-900 max-md:px-5">
                  Show Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        />
      )}
    </div>
  );
}

export default MainPage;
