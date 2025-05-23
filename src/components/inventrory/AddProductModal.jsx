import { Modal, Select, Switch } from "antd";
import { CloseCircleOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

const AddModalProduct = ({ isModalOpen, setIsModalOpen }) => {
    const [color, setColor] = useState("#ffffff");
    const [preview, setPreview] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        category: "Fruits & Vegetables",
        expiry: "3 days",
        weight: "lbs",
        quantity: "",
        tags: "",
        unitPrice: "",
        sellingPrice: "",
        taxRate: "",
        discount: "",
        shippingFlat: true,
        shippingFree: false,
        description: "",
        freight: "-select-",
    });

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
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
            {/* Header */}
            <div className="flex justify-between items-center bg-primary text-white px-6 py-4 rounded-t-lg">
                <div></div>
                <h2 className="text-lg font-semibold">Add new product</h2>
                <CloseCircleOutlined
                    onClick={handleCancel}
                    className="text-white text-xl cursor-pointer"
                />
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 bg-[#F9FAFB]">
                {/* Image & Color */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold mb-1">Image</p>
                        <label
                            htmlFor="imageUpload"
                            className="cursor-pointer w-full h-40 border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-50 transition overflow-hidden"
                        >
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="object-contain max-h-full"
                                />
                            ) : (
                                <div className="flex items-center justify-center text-gray-500">
                                    <UploadOutlined className="mr-2" /> Upload image
                                </div>
                            )}
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </div>

                    <div>
                        <p className="font-semibold mb-1">Choose color</p>
                        <p className="text-sm text-gray-500 mb-1">
                            Use product color for creating product background
                        </p>
                        <div className="flex items-center space-x-2">
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-full h-10 border rounded"
                            />
                            <span className="text-gray-500 text-sm">default</span>
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <p className="text-sm font-medium mb-1">Product Name</p>
                    <input
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full p-2 rounded border bg-white text-sm"
                        placeholder="Enter product name"
                    />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <p className="text-sm font-medium mb-1">Category</p>
                        <Select
                            value={formData.category}
                            onChange={(value) => handleChange("category", value)}
                            className="w-full"
                        >
                            <Option>Fruits & Vegetables</Option>
                            <Option>Beverage</Option>
                            <Option>Meat</Option>
                            <Option>Bakery</Option>
                        </Select>
                    </div>
                    <div>
                        <p className="text-sm font-medium mb-1">Expiry</p>
                        <Select
                            value={formData.expiry}
                            onChange={(value) => handleChange("expiry", value)}
                            className="w-full"
                        >
                            <Option>3 days</Option>
                            <Option>7 days</Option>
                            <Option>15 days</Option>
                            <Option>1 month</Option>
                        </Select>
                    </div>
                </div>

                {/* Quantity & Tags */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex gap-2 items-center">
                        <input
                            type="number"
                            value={formData.quantity}
                            onChange={(e) => handleChange("quantity", e.target.value)}
                            className="w-full p-2 rounded border bg-white text-sm"
                            placeholder="Quantity"
                        />
                        <Select
                            value={formData.weight}
                            onChange={(value) => handleChange("weight", value)}
                            className="w-28"
                        >
                            <Option>lbs</Option>
                            <Option>kg</Option>
                            <Option>pc</Option>
                        </Select>
                    </div>
                    <div>
                        <p className="text-sm font-medium mb-1">Tags</p>
                        <input
                            value={formData.tags}
                            onChange={(e) => handleChange("tags", e.target.value)}
                            className="w-full p-2 rounded border bg-white text-sm"
                            placeholder="fruit, apple"
                        />
                    </div>
                </div>

                {/* ========================= Pricing =========================  */}
                <div>
                    <p className="text-sm font-medium mb-2">Pricing</p>
                    <div className="bg-white p-4 rounded shadow grid grid-cols-2 gap-6">
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Unit Price</p>
                            <input
                                value={formData.unitPrice}
                                onChange={(e) => handleChange("unitPrice", e.target.value)}
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="$ 0.00"
                            />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Selling Price</p>
                            <input
                                value={formData.sellingPrice}
                                onChange={(e) => handleChange("sellingPrice", e.target.value)}
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="$ 0.00"
                            />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Tax Rate</p>
                            <input
                                value={formData.taxRate}
                                onChange={(e) => handleChange("taxRate", e.target.value)}
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="5%"
                            />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Discount</p>
                            <input
                                value={formData.discount}
                                onChange={(e) => handleChange("discount", e.target.value)}
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="$ 0.00"
                            />
                        </div>
                    </div>
                </div>

                {/* Shipping */}
                <div>
                    <p className="text-sm font-medium mb-2">Shipping</p>
                    <div className="bg-white p-4 rounded shadow space-y-4">
                        <div>
                            <p className="text-sm font-medium mb-1">Freight</p>
                            <Select
                                value={formData.freight}
                                onChange={(value) => handleChange("freight", value)}
                                className="w-full"
                            >

                                <Option>Truck</Option>
                                <Option>Bus</Option>
                                <Option>Airplane</Option>
                                <Option>Ship</Option>
                            </Select>
                        </div>
                        <div className="flex items-center justify-between border px-3 py-2 rounded">
                            <span className="text-sm">Flat rate ($50.00)</span>
                            <Switch
                                checked={formData.shippingFlat}
                                onChange={(checked) => handleChange("shippingFlat", checked)}
                            />
                        </div>
                        <div className="flex items-center justify-between border px-3 py-2 rounded">
                            <span className="text-sm">Free shipping</span>
                            <Switch
                                checked={formData.shippingFree}
                                onChange={(checked) => handleChange("shippingFree", checked)}
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <p className="text-sm font-medium mb-1">Description</p>
                    <textarea
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        rows={4}
                        className="w-full p-3 rounded border bg-white text-sm"
                        placeholder="Write something..."
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 flex justify-end bg-[#F9FAFB]">
                <button onClick={handleCancel} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm transition">
                    Save Changes
                </button>
            </div>
        </Modal>
    );
};

export default AddModalProduct;
