import React from 'react';

class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:0,
        }
        this.state = {
            userInfo:{
              id:"Dummy Name",
              login:"Dummy Location"
            }
          }
        console.log("child constructor");
    }
    //why is consturctor created? 
    // place used for initialization
    //best place to create state variables
    //react gives acces to this.state
    //in functional component we need to do the same using 
    // const [count] = useState(0);
    // in functional component we create new state variable using 
    // const [count2] = useState(0);
    //in class based components all state variables are created as part of one object

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/arshpreetsingh3");
        const json = await data.json();
        console.log(json);
        this.setState({
          userInfo:json,
        })
     //this function is called after render
     console.log("child - Component Did mount")
     //class based component folllows life cycle methods
     //what is the sequence of these lifecycle methods?
     // FIRST CONSTRUCTOR
     // SECOND RENDER 
     // THIRD COMPONENT DID MOUNT
     //THUS api calls are made in componentDidMount
    }
    
    componentDidUpdate(){
        console.log("Component did update");
        //component did mount will be called after first render 
        //component did update will be called after every render when state changes or prop changes 

    }

    render(){
        const {count} = this.state;
        console.log("child - in profile class - RENDER");
        //can do destructuring this way
        return (<div>
            <h1>Profile using class based component</h1>
            <h2> Name: {this.props.name}</h2>
            <h3>Count: {this.state.count}</h3>

            <h2> Name: {this.state.userInfo.id}</h2>
            <h3>Count: {this.state.userInfo.login}</h3>
            <button onClick={() => (
                this.setState({
                    count : 1,
                    count2: 2,

                })
                //this.setState({
                // count2:2 ;
                //})
                // will work but inconsistent way 
                //will only modify partial object in case we just modify one of the property
                // we dont know what part of state we are setting
                //this.state.count = 1
                // not a good way 
                //in setState we send a modifified a object
                //We dont mutate state directly 
                //in older class based react, we can change the entire state together
                //while in functioanl way, we have different methids for each variable 
            )}>SetCount</button>
        </div>);
    }
}

export default ProfileClass;

//ORDER OF FUNCTION CALLING
//parent constructor 
//parent render
//then goes and see that theres a child and it will trigger its lifecycle
//child constructor
//child render
//child componentdidmount
//parent componentdidmount
//mount means to load/ kind of attached
//in case of two children order would be as follows
//parent constructor
//parent render
//first child constructor
//first child render
//second child constructor
//second child render
// - dom updated for children
//first child componentdidmount
//second child componentdidmount
//parent component didmount
//When react renders things up it happens in two phases 
//Render Phase
//Commit Phase
//render phase is fast as jsx is being converted to html 
//react batches up things inside render phase for children
//function inside useEffect cant be async but we can make componentddmount to be async

//Parent Constructor 
//Parent Render 
//Child Constructor 
//Child Render 

//commit phase
//dom is updated
//json logged
//child component did mount is called but will wait for data to be fetched as its async operation it will delay 
//meanwhile parent did mount will be called
//parent component did mount will be called before that
//now setState will trigger the next render
//now with updated data after setstate thechile will again be rendered

//only talking about child component 
//child constructor 
//child render 
//child componentdidmount 

//api call  - when api call is made component is already mounted thus we just need to update it 
//setstate willl be called 
//update cycle starts
//thus child render again
//then react updates dom
//then component did update will be called
