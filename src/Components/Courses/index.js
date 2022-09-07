import Button from "../Button";
import Item from "./Item";
import * as S from "./style";

function Courses({ allCategories, filter, dataSlide, setMenuItem, menuItem , active, setActive}) {
  

  return (
    <S.CoursesContainer id="courses">
      <div className="title-main">
        <h1>courses</h1>
        <h6>now more about us</h6>
      </div>
      <S.BtnContainer>
        <Button
          button={allCategories}
          filter={filter}
          dataSlide={dataSlide}
          setMenuItem={setMenuItem}
          menuItem={menuItem}
          active={active}
          setActive={setActive}
        />
        <div className="prev-next">
          <img
            // onClick={() => {setActive((prev) => prev - 1); filter(active)}}
            src="./assets/images/prev.svg"
            alt="prev tabs"
          />
          <img
            // onClick={() => {setActive((prev) => prev + 1); filter(active)}}
            src="./assets/images/next.svg"
            alt="next tabs"
          />
        </div>
      </S.BtnContainer>

      <Item menuItem={menuItem} />
      <S.Btn>see all</S.Btn>
    </S.CoursesContainer>
  );
}

export default Courses;
