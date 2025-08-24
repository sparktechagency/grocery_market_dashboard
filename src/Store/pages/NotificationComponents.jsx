
import { useGetNotificationApiQuery, useRedNotificationApiMutation } from '../../redux/dashboardFeatures/notification/dashboardNotificationApi';
import moment from 'moment';
import toast from 'react-hot-toast';

const NotificationComponents = () => {

    const { data: getNotificatio,refetch } = useGetNotificationApiQuery()
    const notificationData = getNotificatio?.notifications
    const [redNotificationApi] = useRedNotificationApiMutation()



    const handleClick = async (id) => {

        try {
            const res = await redNotificationApi(id).unwrap()
            console.log(res)

            if (res?.status === true) {
                toast.success(res?.message)
                refetch()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='space-y-2 mt-4 '>
            {
                notificationData?.map((item) => (
                    <div
                        key={item.id}
                        onClick={item?.read_at === null ? () => handleClick(item.id) : undefined}
                        className={`flex justify-between items-center px-5 py-3 rounded-lg 
          ${item?.read_at === null
                                ? 'bg-red text-white cursor-pointer'
                                : "bg-white text-black cursor-default"
                            }`}
                    >
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
