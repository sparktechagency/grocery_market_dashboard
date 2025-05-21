
import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const AddModalProduct = ({ isModalOpen, setIsModalOpen, }) => {
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            open={isModalOpen}
            footer={null}
            closable={false}
            onCancel={handleCancel}
            className="rounded-lg "
            width={1026}
        >
            <div className="flex justify-between items-center bg-primary text-white px-6 py-4 rounded-t-lg">
                <div></div>
                <h2 className="text-lg font-PoppinsSemiBold">Add new product</h2>
                <CloseCircleOutlined
                    onClick={handleCancel}
                    className="text-white text-xl cursor-pointer"
                />
            </div>
        </Modal>
    )
}

export default AddModalProduct;