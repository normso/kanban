import "./MainBody.css"
import {Link21,AddSquare,Message,Edit2,Folder2,Filter,Calendar,Profile2User,ArrowDown2,Pause,Menu, Snapchat} from 'iconsax-react';
import av1 from "../../assets/av1.jpg";
import av2 from "../../assets/av2.png";
import av3 from "../../assets/av3.png";
import av4 from "../../assets/av4.png";
import pp from "../../assets/pp.png"

import first from "../../assets/first.png";
import second from "../../assets/second.jpg";
import third from "../../assets/third.jpg";
import forth from "../../assets/forth.jpg";

import { useState } from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

function MainBodyTop(props){

    return (
        <div className="main-body-top-container">
            <div className="main-body-top-title-container">
                <h2>{props.projectName}</h2>
                <div className="main-body-title-button-container">
                    <button className="main-body-title-button">
                        <Edit2 size="16" color="#5030E5"/>
                    </button>
                    <button className="main-body-title-button">
                        <Link21 size="16" color="#5030E5" variant="Bold"/>
                    </button>
                </div>
            </div>
            <MainBodyTopPeoples peoples={[
                {avatarurl:av1},
                {avatarurl:av2},
                {avatarurl:av3},
                {avatarurl:av4},
                {avatarurl:av4},
            ]}/>
        </div>
    )
}


function MainBodyTopPeoples(props){
    let pepoles = []
    let slide = 0
    if (props.peoples.length > 4){
        for (let i = 0 ; i< 4; i++){
            pepoles.push(<div style={{backgroundImage:`url("${props.peoples[i].avatarurl}")`,transform:`translateX(${-slide}px)`}} className="main-body-top-people-profile-pic"></div>)
            slide += 10
        }
        pepoles.push(<div style={{backgroundColor:"#f2c9ce",transform:`translateX(${-slide}px)`}} className="main-body-top-people-profile-pic"><span>+{props.peoples.length - 4}</span></div>)
    }else if(props.peoples.length > 0){
        for (let i = 0 ; i< props.peoples.length; i++){
            pepoles.push(<div style={{backgroundImage:`url("${props.peoples[i].avatarurl}")`}} className="main-body-top-people-profile-pic"></div>)
        }
    }

    return(
        <div className="main-body-top-peoples-container">
            <div className="main-body-top-peoples-invite-container">
                <AddSquare size="18" color="#5030E5" variant="Bulk"/>
                <span>Invite</span>
            </div>
            <div className="main-body-top-peoples-joined-container">
                {pepoles.map((val)=>val)}
            </div>
        </div>
    )
}

function MainbodyFunctionButton(props){
    return(
        <div className="main-body-function-button-container">
            {props.icon}
            
            <span>{props.text}</span>
            {props.drop ? <ArrowDown2 size="16" color="#787486"/> : ""}
        </div>
    )
}

function MainBodyFunctions(){
    return(
        <div className="main-body-functions-container">
            <div className="main-body-functions-left-container">
                <MainbodyFunctionButton icon={<Filter size="16" color="#787486"/>} text="Filter" drop={true}/>
                <MainbodyFunctionButton icon={<Calendar size="16" color="#787486"/>} text="Today" drop={true}/>
            </div>
            <div className="main-body-functions-side-container">
                <MainbodyFunctionButton icon={<Profile2User size="16" color="#787486"/>} text="Share" drop={false}/>
                <div className="main-body-functions-side-line"></div>
                <div className="main-body-functions-side-stack">
                    <Pause size="20" color="#FFFFFF" variant="Bold"/>
                </div>
                <Menu size="21" color="#000000"/>
            </div>
            
        </div>
    )
}


function Card(props){
    let label_class = ""
    if (props.label == "Low"){
        label_class = "low"
    }else if(props.label == "High"){
        label_class = "high"
    }else if(props.label == "Completed"){
        label_class ="completed"
    }
    let images = []
    if (props.images?.length > 3){
        for (let i = 0 ; i< 2; i++){
            images.push(<img src={props.images[i].imgurl} style={{width:"131px",height:"79px",borderRadius:"8px"}}/>)
        }
        // pepoles.push(<div style={{backgroundColor:"#f2c9ce",transform:`translateX(${-slide}px)`}} className="main-body-top-people-profile-pic"><span>+{props.peoples.length - 4}</span></div>)
    }else if(props.images?.length == 1){
        for (let i = 0 ; i< props.images.length; i++){
            images.push(<img src={props.images[i].imgurl} style={{width:"280px",height:"110px",borderRadius:"8px"}}/>)
        }
    }else{
        for (let i = 0 ; i< props.images?.length; i++){
            images.push(<img src={props.images[i].imgurl} style={{width:"131px",height:"79px",borderRadius:"8px"}}/>)
        }
    }
    

    let pepoles = []
    let  s = props.peoples.length > 3 ? 3*5 : props.peoples.length*5
    let slide = s
    if (props.peoples.length > 3){
        for (let i = 0 ; i< 3; i++){
            pepoles.push(<div style={{backgroundImage:`url("${props.peoples[i].avatarurl}")`,transform:`translateX(${slide}px)`,zIndex:slide}} className="card-people-avatar"></div>)
            slide -=5
        }
        pepoles.push(<div style={{backgroundColor:"#f2c9ce",transform:`translateX(${slide}px)`,zIndex:slide}} className="card-people-avatar"><span>+{props.peoples.length - 4}</span></div>)
    }else if(props.peoples.length > 0){
        for (let i = 0 ; i< props.peoples.length; i++){
            pepoles.push(<div style={{backgroundImage:`url("${props.peoples[i].avatarurl}")`,transform:`translateX(${slide}px)`,zIndex:slide}} className="card-people-avatar"></div>)
            slide -=5
        }
    }

    return(
        
                        <div  className="card-container"  >
                            <div className="card-label-container">
                                <span className={`card-label ${label_class}`}>{props.label}</span>
                                <span className="card-more">...</span>
                            </div>
                            <div className="card-body-container">
                                <p className="card-body-title">{props.title}</p>
                                <p className="card-body-body">{props.body}</p>
                                <div className="card-body-img-containers">
                                    {
                                        images
                                    }
                                </div>
                            </div>

                            <div className="card-bottom-info-container">
                                    <div className="card-people-container" style={{transform:`translateX(-${s}px)`}}>
                                        {pepoles}
                                    </div>
                                    <div  className="card-bottom-extra">
                                        <div className="card-comment-container card-bottom">
                                            <Message size="16" color="#787486"/>
                                            <span>{`${props.comment} comments` }</span>
                                        </div>
                                        <div className="card-comment-container card-bottom">
                                            <Folder2 size="16" color="#787486"/>
                                            <span>{`${props.files} files` }</span>
                                        </div>
                                        
                                    </div>
                            </div>
                        </div>
 
        
    )
}


function CardsHolder(props){

    return(
        <>
        {/* // <div className="cards-holder-container"> */}
            <div className="cards-holder-title-container">
                <div className="cards-holder-title">
                    <div style={{backgroundColor:props.bulletcolor,width:"8px",height:"8px",borderRadius:"50%"}} ></div>
                    <span>{props.label}</span>
                    <div className="cards-holder-noofcards"><span>{props.cards.length}</span></div>
                </div>
                {props.drop ?<AddSquare size="24" color="#5030E5" variant="Bulk"/> : ""}
            </div>
            <div className="cards-holder-bar" style={{border:`2px solid ${props.bulletcolor}`}}></div>
            


                        <div className="cards-holder-cards-container" >
                            {props.cards.length == 0 ? <span className="cards-holder-cards-notask">wow no task left</span> : ""}
                            {
                                props.cards.map((ele,index)=>{
                                    // return <Card {...ele}/>
                                    return <Draggable key={ele.key} draggableId={ele.key} index={index}>
                                        {(p,s)=>{
                                            return(
                                                <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}>
                                                    <Card {...ele}/>
                                                </div>
                                            )
                                        }}
                                    </Draggable>
                                    
                                })
                            }
                            {/* {props.p.placeholder} */}
                
                        </div>
        </>
    )
}



function MainBodyDrag(){

    const [placeholderProps, setPlaceholderProps] = useState({});

    const [todo,setTodo]= useState(
        [
            {key:"td1",comment:12,files: 0,label:"Low",title:"Brainstrom",body:"Brainstorming brings team members' diverse experience into play. ",peoples:[{avatarurl:av1},{avatarurl:av3},{avatarurl:av4}]},
            {key:"td2",comment:10,files: 3,label:"High",title:"Research",body:"User research helps you to create an optimal product for users.",peoples:[{avatarurl:av1},{avatarurl:pp}]},
            {key:"td3",comment:5,files: 5,label:"High",title:"Wireframes",body:"Low fidelity wireframes include the most basic content and visuals.",peoples:[{avatarurl:av1},{avatarurl:av2},{avatarurl:av4}]}
        ]
    )

    const [onProgress,setOnprogress]= useState(
        [
            {key:"op1",comment:12,files: 0,label:"Low",title:"Onboarding Illustrations",body:"",images:[{imgurl:first}],peoples:[{avatarurl:av4},{avatarurl:av3},{avatarurl:av1}]},
            {key:"op2",comment:10,files: 3,label:"Low",title:"Moodboard",images:[{imgurl:second},{imgurl:third}],peoples:[{avatarurl:av4}]},
        ]
    )

    const [done,setDone]= useState(
        [
            {key:"dn1",comment:12,files: 15,label:"Completed",title:"Mobile App Design",body:"",images:[{imgurl:forth}],peoples:[{avatarurl:pp},{avatarurl:av2}]},
            {key:"dn2",comment:12,files: 15,label:"Completed",title:"Design System",body:"It just needs to adapt the UI from what you did before ",peoples:[{avatarurl:av1},{avatarurl:av4},{avatarurl:av3}]},

        ]
    )

    

    function handleDrag(data){
        if (data.source.droppableId == "td"){
            if(data.destination.droppableId == "op"){
                let ele = todo[data.source.index]
                setTodo((p)=>{
                    p.splice(data.source.index,1)
                    return p
                })
                setOnprogress((p)=>{
                    return [ele,...p]
                })
            }else if(data.destination.droppableId == "td"){
                setTodo((p)=>{
                    let ele = p[data.source.index]
                    p.splice(data.source.index,1)
                    return [...p.slice(0,data.destination.index),ele,...p.slice(data.destination.index)]
                })
            }
        }else if(data.source.droppableId == "op"){
            if (data.destination.droppableId == "dn"){
                let ele = onProgress[data.source.index]
                ele.label= "Completed"
                setOnprogress((p)=>{
                    p.splice(data.source.index,1)
                    return p
                })
                setDone((p)=>{
                    return [ele,...p]
                })
            }else if(data.destination.droppableId == "op"){
                setOnprogress((p)=>{
                    let ele = p[data.source.index]
                    p.splice(data.source.index,1)
                    return [...p.slice(0,data.destination.index),ele,...p.slice(data.destination.index)]
                })
            }
        }else if(data.source.droppableId == "dn"){
            if(data.destination.droppableId == "dn"){
                setDone((p)=>{
                    let ele = p[data.source.index]
                    p.splice(data.source.index,1)
                    return [...p.slice(0,data.destination.index),ele,...p.slice(data.destination.index)]
                })
            }
        }
    }

    return(
        <DragDropContext onDragEnd={handleDrag} >
            <div className="main-body-draggable">




            <Droppable droppableId={"td"}>
                {(p,s)=>{
                    return(
                        <div className="cards-holder-container" ref={p.innerRef} {...p.droppableProps} >
                            <CardsHolder key={"td"}  label="To Do" bulletcolor="#5030E5" drop={true} cards={todo}/>
                            {p.placeholder}
                            
                        </div>
                    )
                }}
            </Droppable>

            <Droppable droppableId={"op"}>
                {(p,s)=>{
                    return(
                        <div className="cards-holder-container" ref={p.innerRef} {...p.droppableProps} >
                            <CardsHolder key={"op"} p={p} label="On Progress" bulletcolor="#FFA500" cards={onProgress} />
                            {p.placeholder}
                        </div>
                    )
                }}
            </Droppable>

            <Droppable droppableId={"dn"}>
                {(p,s)=>{
                    return(
                        <div className="cards-holder-container" ref={p.innerRef} {...p.droppableProps} >
                            <CardsHolder p={p} key={"dn"}  label="Done" bulletcolor="#76A5EA" cards={done} />
                            {p.placeholder}
                        </div>
                    )
                }}
            </Droppable>

            </div>
        </DragDropContext>
    )
}


function MainBody(){

    

    return (
        <div className="main-body-container">
            <MainBodyTop projectName="Mobile App"/>
            <MainBodyFunctions/>
            <MainBodyDrag/>
        </div>
    )
}

export default MainBody