import React from "react";
import { Card, Table, Select } from "antd";
import {
    ShoppingBag,
    DollarSign,
    Users,
} from "lucide-react";

const { Option } = Select;

const StoreDashboard = () => {
    const summaryData = [
        {
            icon: <ShoppingBag className="text-primary" size={24} />,
            value: "100",
            label: "Total products",
        },
        {
            icon: <DollarSign className="text-primary" size={24} />,
            value: "$ 300.65",
            label: "Total earnings",
        },
        {
            icon: <Users className="text-primary" size={24} />,
            value: "3k",
            label: "Total customer",
        },
    ];

    const tableData = [
        { key: "1", type: "Total orders", value: 50 },
        { key: "2", type: "Pending orders", value: 20 },
        { key: "3", type: "Canceled orders", value: 0 },
        { key: "4", type: "Successful orders", value: 5 },
    ];

    const columns = [
        {
            title: "",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "",
            dataIndex: "value",
            key: "value",
        },
    ];

    return (
        <div className="p-6  min-h-screen">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-PoppinsSemiBold">Overview</h2>
                    <p className="text-sm font-PoppinsRegular text-lowBlack">Activities summery at a glance</p>
                </div>
                <Select defaultValue="This month" className="w-40">
                    <Option value="today">Today</Option>
                    <Option value="this_week">This week</Option>
                    <Option value="this_month">This month</Option>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {summaryData.map((item, index) => (
                    <Card
                        key={index}
                        className="rounded-lg border hover:shadow-md transition-shadow"
                    >
                        <div className="flex flex-col items-center space-y-2">
                            <div className="bg-lowGreen p-3 rounded-full">{item.icon}</div>
                            <h3 className="text-xl font-PoppinsBold">{item.value}</h3>
                            <p className="text-sm font-PoppinsMedium text-lowBlack">{item.label}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex justify-between items-center mt-12 mb-4">
                <h2 className="text-lg font-semibold">Order summery</h2>
                <Select defaultValue="Today" className="w-32">
                    <Option value="today">Today</Option>
                    <Option value="week">This Week</Option>
                    <Option value="month">This Month</Option>
                </Select>
            </div>

            <div className="max-w-xl border rounded-sm">
                <Table
                    dataSource={tableData}
                    columns={columns}
                    pagination={false}
                    bordered
                    rowClassName={(_, index) =>
                        index % 2 === 1 ? "bg-lowGray" : ""
                    }
                />
            </div>
        </div>
    );
};

export default StoreDashboard;
