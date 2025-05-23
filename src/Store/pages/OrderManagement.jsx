
import React from 'react';
import { Segmented, Tabs } from 'antd';
import NewOrderManagementTable from '../../components/orderManagement/NewOrderManagementTable';
import PendingOrderManagementTable from '../../components/orderManagement/PendingOrderManagementTable';
import CompleteOrderManagement from '../../components/orderManagement/CompleteOrderManagement';
const onChange = key => {
    // console.log();
};
const items = [
    { key: '1', label: <div className=" ">New (10)</div>, children: <NewOrderManagementTable /> },
    { key: '2', label: <div className="   ">Pending (05)</div>, children: <PendingOrderManagementTable /> },
    { key: '3', label: <div className="">Complete (25)</div>, children: <CompleteOrderManagement /> },
];
const OrderManagement = () => {


    return (
        <div className='w-full mx-auto border'>

            <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                indicator={false}
                centered
            />
        </div>
    );
}

export default OrderManagement;
