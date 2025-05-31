import React, { useState } from 'react'
import { IconAddStorePlus, IconCross, IconLocation, IconPlusWhite, IconSearch } from '../assets/icon';
import img1 from "../assets/images/shopper.jpg";
import img2 from "../assets/images/shopper.jpg";
import img3 from "../assets/images/shopper.jpg";
import img4 from "../assets/images/shopper.jpg";
import img5 from "../assets/images/shopper.jpg";
import img6 from "../assets/images/shopper.jpg";
import img7 from "../assets/images/shopper.jpg";
import cardOne from "../assets/images/productOne.png";
import cardTwo from "../assets/images/productTwo.png";
import cardThree from "../assets/images/productThree.png";
import cardFour from "../assets/images/productFour.png";
import { Button, Image, Input, Modal, Popconfirm, Space, Table, Tag, Tooltip, Upload } from 'antd';


const allCategories = [
    "Fruits & vegetables", "Beverage", "Hot drinks", "Households",
    "Cleaning products", "Beauty products", "Makeups"
];

const StoreManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsModalDetailsOpen] = useState(false);
    const [storeName, setStoreName] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imagePreview, setImagePreview] = useState(null);

    const columns = [
        {
            title: "Store Name",
            dataIndex: "store_name",
            key: "store_name",
            render: (store) => (
                <Space className='gap-2'>
                    <img className='!rounded-full h-14 w-14 ' src={store?.image} alt="image" />
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
            title: "Total products",
            dataIndex: "total_product",
            key: "total_product",
            align: "center",
            className: "custom-available-cell",
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            render: (record) => (
                <Space size="middle">
                    {/* view icon */}
                    <div onClick={() => setIsModalDetailsOpen(true)} >
                        <svg
                            width="37"
                            height="37"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="37" height="37" rx="5" fill="#FFF3EB" />
                            <path
                                d="M18 15.8C17.132 15.8 16.2996 16.1371 15.6858 16.7373C15.0721 17.3374 14.7273 18.1513 14.7273 19C14.7273 19.8487 15.0721 20.6626 15.6858 21.2627C16.2996 21.8629 17.132 22.2 18 22.2C18.868 22.2 19.7004 21.8629 20.3142 21.2627C20.9279 20.6626 21.2727 19.8487 21.2727 19C21.2727 18.1513 20.9279 17.3374 20.3142 16.7373C19.7004 16.1371 18.868 15.8 18 15.8ZM18 24.3333C16.5534 24.3333 15.166 23.7714 14.1431 22.7712C13.1201 21.771 12.5455 20.4145 12.5455 19C12.5455 17.5855 13.1201 16.229 14.1431 15.2288C15.166 14.2286 16.5534 13.6667 18 13.6667C19.4466 13.6667 20.834 14.2286 21.8569 15.2288C22.8799 16.229 23.4545 17.5855 23.4545 19C23.4545 20.4145 22.8799 21.771 21.8569 22.7712C20.834 23.7714 19.4466 24.3333 18 24.3333ZM18 11C12.5455 11 7.88727 14.3173 6 19C7.88727 23.6827 12.5455 27 18 27C23.4545 27 28.1127 23.6827 30 19C28.1127 14.3173 23.4545 11 18 11Z"
                                fill="#F96D10"
                            />
                        </svg>
                    </div>
                    <div>
                        <Popconfirm
                            title="Are you sure to delete this product?"
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No"
                        >
                            <svg
                                width="37"
                                height="37"
                                viewBox="0 0 37 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="37" height="37" rx="5" fill="#FFE6E6" />
                                <path
                                    d="M23 16V26H15V16H23ZM21.5 10H16.5L15.5 11H12V13H26V11H22.5L21.5 10ZM25 14H13V26C13 27.1 13.9 28 15 28H23C24.1 28 25 27.1 25 26V14Z"
                                    fill="#FF0000"
                                />
                            </svg>
                        </Popconfirm>
                    </div>
                </Space>
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
            total_product: "220",
        },
        {
            key: "2",
            store_name: {
                image: img2,
                title: "Starbucks",
            },

            owner_name: "Benjamin Wilkison",
            total_product: "200",
        },
        {
            key: "3",
            store_name: {
                image: img3,
                title: "Starbucks",
            },

            owner_name: "Benjamin Wilkison",
            total_product: "200",
        },
        {
            key: "4",
            store_name: {
                image: img4,
                title: "Starbucks",
            },

            owner_name: "Benjamin Wilkison",
            total_product: "245",
        },
        {
            key: "5",
            store_name: {
                image: img5,
                title: "Starbucks",
            },

            owner_name: "Benjamin Wilkison",
            total_product: "241",
        },
        {
            key: "6",
            store_name: {
                image: img6,
                title: "Starbucks",
            },

            owner_name: "Benjamin Wilkison",
            total_product: "241",
        },
        {
            key: "7",
            store_name: {
                image: img7,
                title: "Starbucks",
            },

            owner_name: "Benjamin Wilkison",
            total_product: "212",
        },
    ];

    const handleCategoryToggle = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        setIsModalOpen(false);
        // Reset form (optional)
        setStoreName("");
        setEmail("");
        setPassword("");
        setSelectedCategories([]);
        setImagePreview(null);
    };

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
            <div className=" flex justify-between items-center mt-5 mb-[43px]">

                <div className="flex items-center">
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

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="font-semibold ml-7 flex items-center gap-6 text-base font-roboto text-white bg-primary rounded-full py-3 px-[63px]"
                >
                    {IconAddStorePlus}
                </button>

            </div>
            {/* ---------------- table -------------------- */}
            <Table
                columns={columns}
                rowClassName={() => "table-row-gap"}
                className="custom-ant-table"
                dataSource={data}
                pagination={true}
            />


            {/* ============================= add new store modal ==================================== */}

            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                closable={true}
                centered
                className="rounded-lg"
            >
                {/* Upload Area */}
                <div className="flex flex-col items-center space-y-4 mb-6">
                    <label htmlFor="store-logo" className="cursor-pointer">
                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-20 h-20 rounded-full object-cover border"
                            />
                        ) : (
                            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center border border-dashed border-gray-400">
                                <span className="text-gray-500">Upload</span>
                            </div>
                        )}
                    </label>
                    <input
                        id="store-logo"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                    <div className="font-semibold">Store logo</div>
                </div>


                {/* Store Name */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Store name</label>
                    <Input
                        placeholder="Store name"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                    />
                </div>

                {/* Selected Categories */}
                <div className="mb-2">
                    <label className="block font-medium mb-1">
                        Types of category you want to sell:
                    </label>
                    <div className="bg-gray-100 rounded p-2 flex flex-wrap gap-2">
                        {selectedCategories.map((cat) => (
                            <Tag
                                key={cat}
                                closable
                                onClose={() => handleCategoryToggle(cat)}
                                className="bg-white"
                            >
                                {cat}
                            </Tag>
                        ))}
                    </div>
                </div>

                {/* Suggestions */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Suggestions</label>
                    <div className="flex flex-wrap gap-2">
                        {allCategories.map((cat) => (
                            <Tag
                                key={cat}
                                color={selectedCategories.includes(cat) ? "green" : "default"}
                                onClick={() => handleCategoryToggle(cat)}
                                className="cursor-pointer"
                            >
                                {cat}
                            </Tag>
                        ))}
                    </div>
                </div>

                {/* Owner Email */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Owner email</label>
                    <Input
                        placeholder="Owner email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block font-medium mb-1">Password</label>
                    <Input.Password
                        placeholder="**********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Submit */}
                <Button
                    type="primary"
                    block
                    className="bg-green-600 hover:bg-green-700"
                    onClick={handleSubmit}
                >
                    Create store
                </Button>
            </Modal>

            {/* ======================== view Shopper store details modal ========================== */}

            <Modal
                open={isDetailsModalOpen}
                onCancel={() => setIsModalDetailsOpen(false)}
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

export default StoreManagement