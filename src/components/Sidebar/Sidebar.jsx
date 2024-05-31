import "./Sidebar.css"
import { More,AddSquare,Colorfilter,LampOn, ArrowLeft2,Category,Message,TaskSquare,Profile2User,Setting2} from 'iconsax-react';

function HeaderBar(){
    return (
        <div className="header-container">
            <div className="logo">
                <Colorfilter size="32" color="#5030E5" variant="Bulk"/>
                <span>Project M.</span>
            </div>
            <div className="header-collapse">
                <ArrowLeft2 size="20" color="#787486"/>
                <ArrowLeft2 className="l" size="20" color="#787486"/>
            </div>
        </div>

    )
}

function SidebarMenuTitle(props){
    return(
        <div className="sidebar-menu-title-container">
            {props.image}
            <span>{props.text}</span>
        </div>
    );
}

function SidebarMenu(props){
    return (
        <div className="sidebar-menu-container">
            {props.menus.map((val)=>{
                return (
                    <SidebarMenuTitle image={val.icon} text={val.text}/>
                )
            })}
        </div>
    );
}

function Project(prop){
    return(
        <div className={`project-container ${prop.index == 0 ? "active_project" : ""}`}>
            <div>
                <div style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:prop.color}}></div>
                <span>{prop.name}</span>
            </div>
            {/* <More size="16" color="#0D062D"/> */}
            <span>...</span>
        </div>
    )
}


function SidebarProjects(props){
    return(
        <div className="sidebar-projects-container">
            <div className="sidebar-projects-title-container">
                <span>MY PROJECTS</span>
               
                <AddSquare size="16" color="#787486"/>
            </div>
            <div className="sidebar-projects-collection">
                    {props.projects.map((val,index)=>{
                        return <Project index={index} name={val.name} color={val.color}/>
                    })}
            </div>
        </div>
    )
}

function Banner(){

    return(
        <div className="banner-container">
            <div className="banner-glow-container">
                <div>
                    <LampOn size="24" color="#FBCB18" variant="Bulk"/>
                </div>
            </div>
            <div className="banner-message-container">
                <p className="banner-title">Thoughts Time</p>
                <p className="banner-mes">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                <button>Write a message</button>
            </div>
        </div>
    )
}




function Sidebar() {

    return (
      <>
      <div className='sidebar-container'>
        <HeaderBar/>
        {/* <Test k="me"/> */}
        <div>
        <SidebarMenu menus={[{icon:<Category size="24" color="#787486" variant="Outline"/>,text:"Home"},
                            {icon:<Message size="24" color="#787486" variant="Outline"/>,text:"Messages"},
                            {icon:<TaskSquare size="24" color="#787486" variant="Outline"/>,text:"Tasks"},
                            {icon:<Profile2User size="24" color="#787486" variant="Outline"/>,text:"Members"},
                            {icon:<Setting2 size="24" color="#787486" variant="Outline"/>,text:"Settings"}]} />
     
        <SidebarProjects projects={[ {name:"Mobile App",color:"#7AC555"},
                                     {name:"Website Redesign",color:"#FFA500"},
                                     {name:"Design System",color:"#E4CCFD"},
                                     {name:"Wireframes",color:"#76A5EA"},
                                
                                ]}/>
        <Banner/>
        </div>
      </div>
        
      </>
    )
  }
  
  export default Sidebar