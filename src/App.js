import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import data from "./data.json";
import Category from "./Category.json";
import Login from "./Pages/Login";
import Program from "./Pages/Program";

function App() {
  const [dataSlide, setDataSlide] = useState();
  const [menuItem, setMenuItem] = useState(dataSlide);
  const [Categories, setCategories] = useState();

  useEffect(() => {
    setDataSlide(data.Courses);
    setCategories(Category.Category);
  }, []);

  const filter = (button) => {
    
    const filterdData = dataSlide?.filter((item) => item.category === button);

    setMenuItem(filterdData);

    if (button === "All") {
      setMenuItem(data.Courses);
      return;
    }

  };


  const allCategories = [...new Set(Categories)];


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                filter={filter}
                menuItem={menuItem}
                setMenuItem={setMenuItem}
                allCategories={allCategories}
                dataSlide={dataSlide}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/our-program" element={<Program />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
