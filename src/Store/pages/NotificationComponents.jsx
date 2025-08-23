import React from 'react'
import { useGetNotificationApiQuery } from '../../redux/dashboardFeatures/notification/dashboardNotificationApi';
import moment from 'moment';

const NotificationComponents = () => {

    const {data:getNotificatio}= useGetNotificationApiQuery()
    const notificationData = getNotificatio?.notifications

console.log(notificationData)

    // const notificationData = [
    //     {
    //         id: 1,
    //         title: "10+ new orders",
    //         description: "Lorem ipsum dolor sit amet consectetur. Ornare amet aliquet id egestas.",
    //         date: new Date("2025-05-25T10:00:00"),
    //     },
    //     {
    //         id: 2,
    //         title: "Password Changed",
    //         description: "Your account password was successfully changed.",
    //         date: new Date("2025-05-24T14:32:00"),
    //     },
    //     {
    //         id: 3,
    //         title: "New Message",
    //         description: "You received a message from customer support.",
    //         date: new Date("2025-05-24T09:15:00"),
    //     },
    //     {
    //         id: 4,
    //         title: "Subscription Expiring",
    //         description: "Your subscription will expire in 3 days. Please renew.",
    //         date: new Date("2025-05-23T16:45:00"),
    //     },
    //     {
    //         id: 5,
    //         title: "Payment Successful",
    //         description: "Your payment of $49.99 has been processed.",
    //         date: new Date("2025-05-22T11:30:00"),
    //     },
    //     {
    //         id: 6,
    //         title: "New Product Added",
    //         description: "The new ‘Pro Keyboard’ has been added to your inventory.",
    //         date: new Date("2025-05-21T08:20:00"),
    //     },
    //     {
    //         id: 7,
    //         title: "Order Shipped",
    //         description: "Order #1349 has been shipped and is on the way.",
    //         date: new Date("2025-05-20T12:00:00"),
    //     },
    //     {
    //         id: 8,
    //         title: "Low Inventory Alert",
    //         description: "The item ‘Wireless Mouse’ is low on stock.",
    //         date: new Date("2025-05-19T18:10:00"),
    //     },
    //     {
    //         id: 9,
    //         title: "New Login Detected",
    //         description: "Your account was logged in from a new device.",
    //         date: new Date("2025-05-18T20:50:00"),
    //     },
    //     {
    //         id: 10,
    //         title: "Weekly Report Ready",
    //         description: "Your performance report for the week is ready to view.",
    //         date: new Date("2025-05-17T07:05:00"),
    //     },
    // ];

    return (
        <div className='space-y-2 mt-4 '>
            {
                notificationData?.map((item) => (
                    <div key={item.id} className={`cursor-pointer flex justify-between items-center px-5 py-3 rounded-lg ${item?.read_at === null ? 'bg-red text-white' : "bg-white text-black"}`}>
                        <div>
                            <h4 className='font-Bold text-lg '>{item.title}</h4>
                            <p className='font-PoppinsRegular text-base '>{item.message}</p>
                        </div>
                        <div>
                            <p className='text-sm font-bold '>Today</p>
                            <p className='text-sm font-PoppinsMedium '>{moment(item?.created_at).format('L')}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NotificationComponents
