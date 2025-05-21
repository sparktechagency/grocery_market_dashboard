
import { Modal, Button, Input, Switch } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import productDetailsImag from "../../assets/images/productDetails.png"


const ViewProductModal = ({ isModalOpen, setIsModalOpen, }) => {

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleUpload = () => {
        setIsModalOpen(false);
    };


    return (
        <Modal
            open={isModalOpen}
            footer={null}
            closable={false}
            onCancel={handleCancel}
            className="rounded-lg"
            width={1026}
        >
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-primary text-white px-6 py-4 rounded-t-lg">
                <div></div>
                <h2 className="text-lg font-semibold">Edit Product</h2>
                <CloseCircleOutlined
                    onClick={handleCancel}
                    className="text-white text-xl cursor-pointer"
                />
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-8 bg-white max-h-[80vh] overflow-y-auto rounded-b-lg">
                {/* Image + Color Picker */}
                <div className="flex items-center gap-6">
                    <div className="w-1/2">
                        <label className="font-semibold block mb-2">Image</label>
                        <div className="border-2 border-dashed flex justify-center items-center rounded-lg p-4">
                            <img src={productDetailsImag} alt="Product" className="w-44 h-28 rounded" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <label className="font-semibold block mb-2">Choose color</label>
                        <p className="text-sm text-gray-500 mb-2">
                            Use product color for creating product background
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-full h-8 bg-pink-300 border rounded" />
                            <span className="text-sm text-gray-600">#FFFFFF</span>
                            <span className="ml-auto text-sm text-gray-400">default</span>
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium mb-1 block">Name</label>
                        <input
                            value="Fresh apple"
                            disabled
                            className="w-full bg-gray-100 border px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">Category</label>
                        <select disabled className="w-full bg-gray-100 border px-3 py-2 rounded">
                            <option>Fruits & Vegetables</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">Quantity</label>
                        <input
                            value="kg - 50"
                            disabled
                            className="w-full bg-gray-100 border px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">Expiry date</label>
                        <input
                            value="7 days"
                            disabled
                            className="w-full bg-gray-100 border px-3 py-2 rounded"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm font-medium mb-1 block">Tags</label>
                        <input
                            placeholder="type & hit enter"
                            disabled
                            className="w-full bg-gray-100 border px-3 py-2 rounded"
                        />
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="text-base font-semibold mb-4">Pricing</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Unit price</label>
                            <input
                                value="$ 50.00"
                                disabled
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Sell price</label>
                            <input
                                value="$ 45.00"
                                disabled
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Tax rate</label>
                            <input
                                value="5%"
                                disabled
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Discount</label>
                            <input
                                value="$ -5.00"
                                disabled
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* Shipping Section */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="text-base font-semibold mb-4">Shipping</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <label className="text-sm font-medium w-28">Flat rate</label>
                            <input
                                value="$ 50.00"
                                disabled
                                className="flex-1 border px-3 py-2 rounded"
                            />
                            <div className="ml-auto">
                                <Switch defaultChecked disabled />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="text-sm font-medium w-28">Free shipping</label>
                            <input
                                value=""
                                disabled
                                className="flex-1 border px-3 py-2 rounded"
                                placeholder="Free shipping"
                            />
                            <div className="ml-auto">
                                <Switch defaultChecked disabled />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="text-sm font-semibold mb-1 block">Description</label>
                    <div className="bg-gray-100 p-4 rounded text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur. Aliquet porta metus in consectetur lobortis elementum elementum. Ipsum vestibulum lectus cras libero quis vel morbi ligula...
                    </div>
                </div>
            </div>
        </Modal>

    )
}

export default ViewProductModal