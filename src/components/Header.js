import classes from "./Header.module.css";
import mercorLogo from "../assets/mercor.svg";
import collapse from "../assets/collapse.svg";
import calender from "../assets/calendar.svg";
import message from "../assets/message-question.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/man.png";
import arrow from '../assets/arrow-down.svg';
const Header = () => {
  const imgNotify = [calender, message, notification];
  return (
    <>
      <header className={classes.headerElement}>
        <div className={classes.headerName}>
          <div className={classes.imageContainer}>
            <img src={mercorLogo} alt="no-img" />
          </div>
          <p className={classes.headerTitle}>Project M</p>
          <div className={classes.collapse}>
            <img src={collapse} alt="no-img" />
          </div>
        </div>
      {/* <div> collapse</div> */}
        <div className={classes.searchBar}>
        <input
          type="text"
          name="search"
          placeholder="Seach for anything..."
        ></input>
      </div>

       <div className={classes.notification}>
        {imgNotify.map((image,index) => (
          <div className={classes.imageContainer} key={index}>
            <img src={image} alt="no-img" />
          </div>
        ))}</div>
      <div> <div className={classes.profile}>
          <p className={classes.profileName}>
            Fardan
            <span className={classes.suffix}>KA,IND</span>
          </p>

          <div className={classes.profileimageContainer}>
            <img src={profile} alt="no-img" />
          </div>
          <img src={arrow} alt="no-img" />
        </div>
      </div>
     
    </header>
   
    </>
    
    
  );
};
export default Header;
