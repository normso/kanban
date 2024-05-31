import {SearchNormal1 ,ArrowDown2,Calendar2,MessageQuestion,Notification} from 'iconsax-react';
import pp from "../../assets/pp.png";
import "./MainTop.css"

function Search(){
    return(
        <>
        <div className="main-top-search-container">
            <SearchNormal1 size="22" color="#787486" variant="Outline"/>
            <input placeholder="search for anything..." type="text"/>
        </div>
     </>
    )
}


function Tools(props){
    return (
        <div className="main-top-tools-container">
            {props.tools.map((val)=>{
                return val
            })}
        </div>
    )
}


function Profile(props){
    return (
        <div className="main-top-profile-container">
            <div className="main-top-profile-title">
                <p className="main-top-profile-name">{props.name}</p>
                <p className="main-top-profile-country">{props.country}</p>
            </div>
            <div className="main-top-profile-pic-container">
                <div style={{backgroundImage:`url("${pp}")`}} className="main-top-profile-pic">
                    {/* <img style={{width:"100%",height:"100%"}} src={pp}/> */}
                </div>
                <ArrowDown2 size="18" color="#292D32" variant="Outline"/>
            </div>
        </div>
    )
}


export default function MainTop(){
    return (
        <div className="Maintop-container">
            <Search/>
            <div className="Maintop-side-container">
                <Tools tools={
                    [
                    <Calendar2 size="24" color="#787486" variant="Outline"/>,
                    <MessageQuestion size="24" color="#787486" variant="Outline"/>,
                    <Notification size="24" color="#787486" variant="Outline"/>,
                    ]
                }/>
                <Profile name="Anima Aggrawal" country="U.P,India"/>
            </div>
        </div>    
    )
}