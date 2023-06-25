import classes from './Draggable.module.css'
 import  { useState } from 'react'
 import profile from "../../assets/man.png";
 import anotherProfile from "../../assets/profile.svg";
 import message from '../../assets/message.svg'
 import folder from '../../assets/folder-2.svg'
 import unsplash from '../../assets/unsplash.svg'
 import MobileAppDesign from '../../assets/MaskGroup.svg'
 import unsplash1 from '../../assets/unsplash1.svg';
 import unsplash2 from '../../assets/unsplash2.svg';
const DraggableContainer = ()=>{
   let categoryTasks = {
    tasks:
    [
        {
            category:'toDo',
            id:'1',
            priority:'Low',
            draggable:classes.draggables,
            name:'Brainstroming',
            content:'Brainstorming brings team members\' diverse experience into play.'
        },
        {
            category:'toDo',
            id:'2',
            priority:'High',
            draggable:classes.draggables,
            name:'Research',
            content:'User research helps you to create an optimal product for users.'
        },
        {
            category:'completed',
            id:'3',
            priority:'Completed',
            draggable:classes.draggables,
            name:'WireFrames',
            content:"It just needs to adapt the UI from what you did before "
        },
        {
            category:'onProgress',
            id:'4',
            priority:'High',
            name:"Onboarding Illustrations",
            draggable:classes.draggables2,
            image:unsplash,
            imgClass:classes.imgSplash
      },
      {
            category:'completed',
            id:'5',
            priority:'Completed',
            name:'Mobile App Design',
            draggable:classes.draggables3,
            image:MobileAppDesign,
            imgClass:classes.imgMobile
         },
         {
            category:'onProgress',
            id:'6',
            priority:'Low',
            name:'Moodboard',
            draggable:classes.draggables2,
            imageArray:[unsplash1,unsplash2],
            imgClass:classes.multipleImg
         }

        
    ]
   }
   const profileGroup =[profile,anotherProfile,profile];
    let [loopTasks,setTasks] = useState(categoryTasks)
   
    let dragData ={
        toDo:[],
        onProgress:[],
        completed:[]
    }
 
    const dragStart = (e,id)=>{
      e.dataTransfer.setData("id", id);
    //  e.target.style.cursor='grab';
    setTimeout(()=>{ e.target.style.opacity='0'},0)
 }
    const allowDrag =(event)=>{
        event.preventDefault();
        
      }
      const onDrop = (e,name)=>{
       let id =  e.dataTransfer.getData('id');
       let arr=['High','Low']
     let tasks = loopTasks.tasks.filter(e =>{
        if(e.id === id){
            e.category=name;
      }
     if(e.id ===id && e.category ==='completed'){
        e.priority="Completed";
     }
     if(e.id ===id && e.category ==='onProgress'){
        e.priority=arr[(Math.floor(Math.random() * arr.length))];
     }
     if(e.id ===id && e.category ==='toDo' ){
        e.priority=arr[(Math.floor(Math.random() * arr.length))];
     }
        return e;
      });
    //   e.target.style.opacity='1'
     setTasks({...categoryTasks,tasks})

      }
      document.addEventListener("dragend", function(event) {
     event.target.style.opacity = "1";
      });
    
    loopTasks.tasks.forEach(task =>{
        let priorityClass = task.priority === 'Low' ? classes.wordOrange : task.priority === 'High' ? classes.High :classes.completed;
        dragData[`${task.category}`].push(
        <div 
        className={task.draggable}
         key={task.id}   
         onDragStart={(e)=>dragStart(e,task.id)}
         draggable
         >
    <p className={classes.low}><span className={priorityClass}>{task.priority}</span> <span>...</span></p>
    { task.name && <h4 className={classes.header}>{task.name}</h4>}
    {task.content && <p className={classes.textcontainer}>{task.content}</p>}
    {task.image && <div className={task.imgClass}><img src={task.image} alt='no-img'></img></div> }
    {task.imageArray && <div className={task.imgClass}>{task.imageArray.map((img,index)=><div className={classes.multiContainer} key={index}>
        <img src={img} alt='no-img'/>
    </div>)}</div>}
    <div className={classes.endPart}>
       {profileGroup.map((profile,index) => <div className={classes.imageContainer} key={index} > <img src={profile} alt='no-img'/></div>)}
        <div className={classes.comment}><img src={message} width='16px' height='16px' alt='no-img'/> Messages 
      </div>
        <div className={classes.folder}> <img src={folder} width='16px' height='16px' alt='no-img' /> 3 files</div>
    </div>
         </div>)
    })
    
    return(
        <div className={classes.bodyContent}>
            <div className={classes.dragContent}>
            <div className={classes.body} onDragOver={allowDrag} onDrop={(e)=>onDrop(e,'toDo')}>
                <div className={classes.headerBody}>
                    <span className={`${classes.circle} ${classes.purple}`}></span>
                    <div>To Do</div>
                    <span className={classes.counter}>{dragData.toDo.length}</span>
                </div>
                <div className={`${classes.horizontal} ${classes.purple}`}></div>
                <div >{dragData.toDo}</div>
            </div>
            <div className={classes.body} onDragOver={allowDrag} onDrop={(e)=>onDrop(e,'onProgress')}>
            <div className={classes.headerBody}>
                    <span className={`${classes.circle} ${classes.orange}`}></span>
                    <div>On Progress</div>
                    <span className={classes.counter}>{dragData.onProgress.length}</span>
                </div>
                <div className={`${classes.horizontal} ${classes.orange}`}></div>
            <div >{dragData.onProgress}</div>
              </div>  
           <div className={classes.body} onDragOver={allowDrag} onDrop={(e)=>onDrop(e,'completed')}>
           <div className={classes.headerBody}>
                    <span className={`${classes.circle} ${classes.blue}`}></span>
                    <div>Completed</div>
                    <span className={classes.counter}>{dragData.completed.length}</span>
                </div>
                <div className={`${classes.horizontal} ${classes.blue}`}></div>
           <div >{dragData.completed}</div>
            
           </div>
            </div>
       
    </div>
    )

}
export default DraggableContainer;