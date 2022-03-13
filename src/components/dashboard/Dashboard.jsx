import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";
import MainTitle from "../global/MainTitle";

const Dashboard = () => {
   const name = useLocation();
   return (
      <>
         <Header />
         <section className="dashboard">
            <div className="container">
               <MainTitle
                  titleText='Dashboard Page'
                  subTitleText="I am thinking about how to secure the DASHBOARD page that user could not type dashboard on url and load the dasboard page."
               />

               {/* content */}
               <div className="dashboard-body">
                 <h1>hello {name.state}</h1>
                  <p>this is dashboard body</p>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Dashboard;
