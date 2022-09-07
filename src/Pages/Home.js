import React from "react";
import AboutUs from "../Components/AboutUs";
import Ambassadors from "../Components/Ambassadors";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import Courses from "../Components/Courses";
import Footer from "../Components/Footer";
import MissionVision from "../Components/Mission&Vision";
import Navbar from "../Components/Navbar";
import Position from "../Components/Position";
import Tags from "../Components/Tags";

function Home({ allCategories, filter, menuItem, dataSlide, setMenuItem, active, setActive }) {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
      <Tags />
      <MissionVision />
      <Courses
        setMenuItem={setMenuItem}
        allCategories={allCategories}
        dataSlide={dataSlide}
        filter={filter}
        menuItem={menuItem}
        active={active}
        setActive={setActive}
      />
      <AboutUs />
      <Position />
      <Ambassadors />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
