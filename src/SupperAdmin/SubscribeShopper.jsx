import { Image, Modal, Popconfirm, Space, Table } from 'antd';
import React, { useState } from 'react'
import img1 from "../assets/images/shopper.jpg";
import img2 from "../assets/images/shopper.jpg";
import img3 from "../assets/images/shopper.jpg";
import img4 from "../assets/images/shopper.jpg";
import img5 from "../assets/images/shopper.jpg";
import img6 from "../assets/images/shopper.jpg";
import img7 from "../assets/images/shopper.jpg";
import { IconCross, IconLocation, IconSearch } from '../assets/icon';
import cardOne from "../assets/images/productOne.png";
import cardTwo from "../assets/images/productTwo.png";
import cardThree from "../assets/images/productThree.png";
import cardFour from "../assets/images/productFour.png";
import { useNavigate } from 'react-router-dom';

const SubscribeShopper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Store Name",
      dataIndex: "store_name",
      key: "store_name",
      render: (store) => (
        <Space className='gap-2'>
          <Image className='!rounded-full ' src={store?.image} alt="image" />
          <span >{store.title}</span>
        </Space>
      ),
    },
    {
      title: "Owner Name",
      dataIndex: "owner_name",
      key: "owner_name",
      align: "center",
      className: "custom-availability-inStock-cell"

    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
      className: "custom-available-cell",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (record) => (
        <div onClick={() => setIsModalOpen(true)} className='bg-primary rounded-lg pt-2 flex justify-center items-center w-[50%]'>
          <p className='font-medium text-sm text-white'>See Store</p>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      store_name: {
        image: img1,
        title: "Starbucks",
      },

      owner_name: "Benjamin Wilkison",
      email: "example@gmail.com",
    },
    {
      key: "2",
      store_name: {
        image: img2,
        title: "Starbucks",
      },

      owner_name: "Benjamin Wilkison",
      email: "example@gmail.com",
    },
    {
      key: "3",
      store_name: {
        image: img3,
        title: "Starbucks",
      },

      owner_name: "Benjamin Wilkison",
      email: "example@gmail.com",
    },
    {
      key: "4",
      store_name: {
        image: img4,
        title: "Starbucks",
      },

      owner_name: "Benjamin Wilkison",
      email: "amite403@gmail.com ",
    },
    {
      key: "5",
      store_name: {
        image: img5,
        title: "Starbucks",
      },

      owner_name: "Benjamin Wilkison",
      email: "amite403@gmail.com",
    },
    {
      key: "6",
      store_name: {
        image: img6,
        title: "Starbucks",
      },

      owner_name: "Benjamin Wilkison",
      email: "amite403@gmail.com",
    },
    {
      key: "7",
      store_name: {
        image: img7,
        title: "Starbucks",
      },

      owner_name: "Benjamin Wilkison",
      email: "amite403@gmail.com",
    },
  ];



  const bannerOne = "https://i.ibb.co/BHmXj7fk/Frame-169.png";
  const bannerTwo = "https://i.ibb.co/4ZBQwDw3/Mask-group.png";
  const bannerThree = "https://i.ibb.co/zH4YSzLq/Group-290337.png";
  const bannerFour = "https://i.ibb.co/q3fMtdgR/Group-8759.png";

  const banners = [
    bannerOne,
    bannerTwo,
    bannerThree,
    bannerFour
  ];

  const products = [
    { name: "Fresh Apple", weight: "1 kg", price: "$10.55", image: cardOne },
    { name: "Fresh Apple", weight: "1 kg", price: "$10.55", image: cardTwo },
    { name: "Fresh Apple", weight: "1 kg", price: "$10.55", image: cardThree },
    { name: "Fresh Apple", weight: "1 kg", price: "$10.55", image: cardFour },
  ];

  return (
    <div>

      <div className='flex justify-between items-center'>
        <span onClick={() => navigate(-1)} className='flex justify-start items-center gap-2 font-bold text-base text-black hover:bg-lowGray px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer'>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 10.8017H4.71857L10.2655 16.6594L8.52251 18.5L0 9.5L8.52251 0.5L10.2655 2.34061L4.71857 8.19829H19V10.8017Z" fill="black" />
          </svg>

          Back
        </span>

        <div className="flex items-center my-6">
          <input
            type="search"
            className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9]"
            placeholder="Search products"
            name=""
            id=""
          />
          <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
            {IconSearch}
          </button>
        </div>

        <div></div>
      </div>

      {/* ---------------- table -------------------- */}
      <Table
        columns={columns}
        rowClassName={() => "table-row-gap"}
        className="custom-ant-table"
        dataSource={data}
        pagination={true}
      />




      {/* ======================== view Shopper store details modal ========================== */}

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closable={true}
        width={900}
        height={300}
        className="rounded-lg "
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center bg-primary text-white px-6 py-4 rounded-t-lg mt-6">
          <h2 className="text-lg font-semibold mx-auto">Store Details</h2>

        </div>

        {/* Store Info */}
        <div className="text-center mt-6 mb-8">
          <img
            src={img1}
            alt="Store Logo"
            className="w-20 h-20 rounded-full mx-auto object-cover border"
          />
          <h3 className="text-xl font-semibold mt-2">Starbucks</h3>
          <p className='flex justify-center gap-2 items-center  '>{IconLocation} <span className="text-gray-500 text-sm">Fairbanks North Star</span></p>
          <p className="mt-4 text-sm text-gray-700 px-8">
            Lorem ipsum dolor sit amet consectetur. Risus aliquam faucibus risus et nulla. Vel ornare enim neque turpis. Amet leo amet dignissim amet tincidunt eget id justo. Massa facilisis porttitor tortor varius lectus et volutpat non est. Duis posuere phasellus ullamcorper et mi lacus interdum sed vulputate. Venenatis lacinia sagittis dignissim elit aliquet. Vitae lectus vulputate id augue. Sed pulvinar suspendisse turpis diam varius varius sed. Volutpat turpis dictum netus ultricies elementum scelerisque nunc.
          </p>
        </div>

        {/* Banners */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Banners</h4>
          <div className="flex overflow-x-auto gap-4 pb-2">
            {banners.map((banner, i) => (
              <div
                key={i}
                className=" min-w-[280px]  rounded overflow-hidden "
              >
                <div key={i} className='relative '>
                  <img className='rounded-2xl ' src={banner} alt="card image" />
                  <span className='absolute top-1 right-3  p-1.5 bg-white rounded-full flex items-center '>{IconCross}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mb-4">
          <h4 className="font-semibold mb-3">Products</h4>
          <div className="grid grid-cols-3 gap-3">
            {products.map((product, i) => (
              <div key={i} className='flex justify-between items-center bg-lowGreen px-4 py-2 rounded-lg shadow-sm'>
                <div className='flex justify-start items-center gap-2'>
                  <img className='w-20 h-12' src={product.image} alt="product image" />
                  <div>
                    <h3 className='font-semibold text-base text-black'>{product.name}</h3>
                    <p className='text-sm text-lowBlack'>{product.weight}</p>
                    <h4 className='font-medium text-sm text-primary'>{product.price}</h4>
                  </div>
                </div>
                <button className='cursor-pointer'>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="37" height="37" rx="5" fill="#FFE6E6" />
                    <path d="M23 16V26H15V16H23ZM21.5 10H16.5L15.5 11H12V13H26V11H22.5L21.5 10ZM25 14H13V26C13 27.1 13.9 28 15 28H23C24.1 28 25 27.1 25 26V14Z" fill="#FF0000" />
                  </svg>

                </button>
              </div>
            ))}
          </div>
        </div>

      </Modal>
    </div>
  )
}

export default SubscribeShopper