import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",
{
 id:"title",  
},
"Heading 1");

const heading2 = React.createElement("h2",
{
 id:"title",
},
"Heading 2 ");
const heading3 = React.createElement("h3",
{
 id:"title",
},
"Heading 3 ");

const container = React.createElement("div",
    { 
        id:"container",
        class:"Title"
    },
    [heading,heading2,heading3]
);

const h1 = (<h1>Heading 1 using JSX</h1>)

const h2 = (<h2>Heading 2 using JSX</h2>)

const h3 = (<h3>Heading 3using JSX</h3>)

const container_jsx = (
    <div class="Title">
    <h1>Heading 1 using JSX</h1>
    {h2}
    {h3}
    </div>
)

//Funtional component of the same element 

const Functional_Component = () =>{
    return(
        <div class="title_">
            {h1}
            {heading}
            <h2>FunctionalComponent2</h2>
            <h3>FunctionalComponent3</h3>
        </div>
    )
    };

const Head_component = () =>{
    return(
        <div>
            <h1>Head Component</h1>
            <h2>Head Component</h2>
            <h3>Head Component</h3>
        </div>

        )
    };

const Functional_Component_UsingAnothercomp = () =>{
        return(
            <div class="title_">
                <Header_comp/>
            </div>
        )
        };

const Header_comp = () =>{
    return(
    
        <div class="header">
        <img src="img/logo.png" alt="logo" />
        <h1>My website name</h1>
        <a class="active" href="#"><i class="fa fa-home"></i></a>   
        </div>
        )  
};

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
console.log(container);  
// passing a react element inside the root
root.render(<Functional_Component_UsingAnothercomp/>);  