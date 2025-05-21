import React from 'react'
import StoreDashboardSidebar from '../Store/StoreDashboardSidebar'
import { Outlet } from 'react-router-dom'
import { Content } from 'antd/es/layout/layout'

const MainBothDashboard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            {/* ------ dashboard side bar ----------------- */}
            <StoreDashboardSidebar />

            <div className="bg-[#f5f8e4]">
                <Content
                    style={{
                        marginTop: 80,
                        padding: "20px",
                        overflowY: "auto",
                        height: `calc(100vh - 80px)`,
                        background: "#f5f8e4",
                    }}
                >
                    <div className="h-full m-2 rounded p-3 bg-[#f5f8e4]">
                        <Outlet />
                    </div>
                </Content>
            </div>
        </div>
    )
}

export default MainBothDashboard