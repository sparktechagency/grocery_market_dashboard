import React from 'react';
import "./order.module.css";
import { Segmented, Tabs } from 'antd';
import NewOrderManagementTable from '../../components/orderManagement/NewOrderManagementTable';
import PendingOrderManagementTable from '../../components/orderManagement/PendingOrderManagementTable';
import CompleteOrderManagement from '../../components/orderManagement/CompleteOrderManagement';
import styles from './order.module.css';
import { useGetOrderApiQuery } from '../../redux/dashboardFeatures/manageOrder/dashboardManageOrder';

const onChange = () => {
    // console.log();
};
const items = [
    { key: '1', label: <div className=" ">New (10)</div>, children: <NewOrderManagementTable />, },
    { key: '2', label: <div className="   ">Pending (05)</div>, children: <PendingOrderManagementTable /> },
    { key: '3', label: <div className="">Complete (25)</div>, children: <CompleteOrderManagement /> },
];
const OrderManagement = () => {

    const {data:getOrder} = useGetOrderApiQuery()
    const orderData = getOrder?.data
    console.log(orderData)



    return (
        <div className={`w-full mx-auto  ${styles.wrapper} ${styles.hoverUnActiveTabs}`}>

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
