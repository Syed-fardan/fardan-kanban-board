import classes from './Header2.module.css'
import filter from '../assets/filter.svg';
import arrow from '../assets/arrow-down.svg';
import calendar from '../assets/calendar2.svg'
import profile from '../assets/profile-2user.svg'
const Header2 =()=>{
return (<>
<div className={classes.HeaderContainer}>
    <div className={classes.firstFilter}>
        <div className={classes.filter}>
            <div className={classes.imageContainer}>
            <img src={filter} alt='no-img'/>
            </div>
          <span>Filter</span>
          <div className={classes.imageContainer}>
          <img src={arrow} alt='no-img'/>
          </div>
        </div>
        <div className={classes.filter}>
            <div className={classes.imageContainer}>
            <img src={calendar} alt='no-img'/>
            </div>
          <span>Today</span>
          <div className={classes.imageContainer}>
          <img src={arrow} alt='no-img'/>
          </div>
        </div>
    </div>
    <div className={classes.secondFilter}>
    <div className={classes.filter}>
            <div className={classes.imageContainer}>
            <img src={profile} alt='no-img'/>
            </div>
          <span>Share</span>
       </div> 
       <div className={classes.vertical}></div>
       <div className={classes.rectangle}>
        <p className={classes.horizontalLine}></p>
        <p className={classes.horizontalLine2}></p>
       </div>
       <div className={classes.customIcon}>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
       </div>
    </div>
</div>
</>)
}
export default Header2;