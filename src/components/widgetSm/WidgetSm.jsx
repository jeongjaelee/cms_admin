
import './widgetSm.css';
import { Visibility } from '@material-ui/icons'


export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2659387/pexels-photo-2659387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display 
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/229493/pexels-photo-229493.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                     alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Software Architecture</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display 
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                     alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mr.K</span>
                        <span className="widgetSmUserTitle">Cloud Infra Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display 
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4186910/pexels-photo-4186910.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                     alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jeongjae LEE</span>
                        <span className="widgetSmUserTitle">Front-End Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display 
                    </button>
                </li>
            </ul>
        </div>
    )
}
