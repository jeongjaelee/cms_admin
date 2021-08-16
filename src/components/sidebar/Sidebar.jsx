import React from 'react'
import './sidebar.css';
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { Person , AttachMoney , BarChart , CardGiftcard } from "@material-ui/icons";
import { Email , DynamicFeed, Message }  from "@material-ui/icons";
import { WorkOutline ,Report } from "@material-ui/icons";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                             Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                             Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                             Sales
                        </li>   
                    </ul>   
                    <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Person />
                             Users
                        </li>
                        <li className="sidebarListItem">
                            <CardGiftcard />
                             Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney />
                             Transactions
                        </li>   
                        <li className="sidebarListItem">
                            <BarChart />
                             Reports
                        </li>   
                    </ul>    
                    </div>    
                    <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Email />
                             Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed />
                             Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Message />
                             Messages
                        </li>   
                        
                    </ul>    
                    </div>                       
                    <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline />
                             Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline />
                             Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report />
                             Reports
                        </li>                         
                    </ul>    
                    </div>                                              
                 </div>
             </div>    
        </div>
    )
}
