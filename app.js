            /*
            Header
                -Logo
                -Nav Items(Right side)
                -Cart

            Body
            -Search Bar
            -Restraunlist
                -Restaurant Card
                    -Image
                    -Name
                    -Rating
                    -Cuisines
            Footer
            -Links
            -Copyright

            */
import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
// import ReactDOM from "react-dom/client" 

const Title=()=>(

    <img alt="logo" 
    src="https://e7.pngegg.com/pngimages/798/4/png-clipart-take-out-foodpanda-logo-tagline-brand-delivery-food-food-text-thumbnail.png"
    />

    // <h1 id="title" key="h2">
    //     Food Panda React 

    // </h1>
);

//Composing Components

const HeaderComponent=()=>{
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
            {
            //This is a comment
            /*
            *
            *
            * 
            * Multi Line Comment
            * 
            * Is JSX mandatory? -> No
            * 
            * Is ES6 mandatory?-> No  
            *
            *
            */
            
                
            }
        </div>

    );

};

const AppLayout=()=>{
    return(
        {
           

        }
    );
};


const HeaderComponent1=()=>{
    return(
        <div>
            <Title />
            <h2>
                Namaste React Functional Component
            </h2>

            <h2>
                This is a h2 tag
            </h2>

        </div>

    );

};




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);






