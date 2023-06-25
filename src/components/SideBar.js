import classes from './Sidebar.module.css'
import task from '../assets/task-square.svg'
import profileUser from '../assets/profileuser.svg'
import message from '../assets/message.svg'
import category from '../assets/category.svg'
import setting from '../assets/setting.svg'
import lampOn from '../assets/lamp-on.svg'

const Sidebar = () => {
    const elementContent = [
        {
            element: 'Home',
            img: category
        },
        {
            element: 'Messages',
            img: message
        },
        {
            element: 'Tasks',
            img: task
        },
        {
            element: 'Members',
            img: profileUser
        },
        {
            element: 'Settings',
            img: setting
        }
    ]
    const projectsContent = [
        {
            element: 'Mobile App',
            class: classes.green
        },
        {
            element: 'Website ReDesign',
            class: classes.orange
        },
        {
            element: 'Design Systems',
            class: classes.purple
        },
        {
            element: 'Wire Frames',
            class: classes.lightBlue
        },
        
    ]
    return (
        <>
            <div className={classes.sideElemnent}>
                <div className={classes.sidebar}>

                    {
                        elementContent.map(e => (
                            <ul className={classes.sidebarElements} key={e.element}>
                                <img src={e.img} alt={e.element} />
                                <li>{e.element}</li>
                            </ul>))
                    }
                    <div className={classes.horizontal}>
                    </div>
                 {
                    projectsContent.map(e => (
                        <ul className={classes.sidebarElements} key={e.element}>
                             <span className={e.class}></span>
                            <li>{e.element}</li>
                        </ul>))
                }
                <div className={classes.rectangle}>
                  
                    <div className={classes.circle}>
                    <div className={classes.lampOn}>
                    <img src={lampOn} alt='no-img'/>
                    
                 </div>
                 <p className={classes.messages}>Thoughts <span>Time</span>
                
                 </p>
                 <p className={classes.describe}>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                 <div className={classes.writeMessage}>Write Messages</div>
                    </div>
                </div>
                </div>
                <div className={classes.vertical}>
               </div>
            </div>

        </>


    )
}
export default Sidebar;