import { useState } from "react";
const Section = ({title,description,isVisible,setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2">
               <h3 className="font-bold text-lg">{title}</h3>
               {isVisible ? (
                <div>
                <button onClick={() => setIsVisible(!isVisible)} className="cursor-pointer underline">
                    HIDE
                </button>
                <p>{description}</p>
                </div>
               ) : (   <button onClick={() => setIsVisible(!isVisible)} className="cursor-pointer underline">
               SHOW
           </button>)}
        </div>  
    )
};

const Instamart = () => {
    const [visibleSection,setVisibleSection] = useState("about");
    return (
    <div>

        <Section title={"About Instamart"}
         description={"This is the about section"}
         isVisible = {visibleSection === "about"}
         setIsVisible={()=> setVisibleSection("about")}/>
        <Section title={"Team Instamart"}
         description={"This is the team section"}
         isVisible = {visibleSection === "team"}
         setIsVisible={()=> setVisibleSection("team")}/>
        <Section title={"Careers Instamart"}
         description={"This is the career section"}
         isVisible = {visibleSection === "careers"}
         setIsVisible={()=> setVisibleSection("careers")}/>
         {
            //isVisible => controls visible or not 
            //SetIsVisible => Controls what is visible
         }
    </div>
    )
};

export default Instamart;