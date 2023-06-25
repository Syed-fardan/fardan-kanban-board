import classes from './MainContent.module.css';
import arrow from '../assets/arrow.svg';
import group626 from '../assets/Group626.svg';
import add from '../assets/add-square.svg'
import profile from "../assets/man.png";
import anotherProfile from "../assets/profile.svg";
import DraggableContainer from './MainBody/DraggableContainer';
import Header2 from './Header2'
const MainContent =()=>{
    const images = [arrow,group626]
    const profileGroup =[profile,anotherProfile,profile,anotherProfile,];
return(
    <>
    
      <div className={classes.mainContent}>

            <div className={classes.mainHeader}>
                <h1>Mobile App</h1>
                {images.map(img => (<div className={classes.mainImgContainer} key={Math.random().toString()}>
                    <img src={img} alt='no-img' />
                </div>))}
            </div>

            <div className={classes.imageProfiles}>
                <img src={add} alt='no-img' />
                <span>invite</span>
                <div className={classes.profileImage}>
                    {profileGroup.map((profile, index) => (
                        <div className={classes.profileGroup} key={index}>
                            <img src={profile} alt='no-img' />
                        </div>
                    ))}
                    <div className={classes.orangeCircle}>+2</div>
                </div>
            </div>
            {/* <div>bodyContent</div> */}
          <Header2/>
           <DraggableContainer/>
        </div>
        <br></br>
        {/* <div className={classes.bodyContent}>Body</div>  */}
    </>
   
)
}
export default MainContent;