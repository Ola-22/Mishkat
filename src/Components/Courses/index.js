import Button from '../Button';
import Item from './Item';
import * as S from "./style";


function Courses({allCategories, filter, dataSlide, setMenuItem, menuItem}) {
  return (
    <S.CoursesContainer id='courses'>
        <div className='title-main'>
            <h1>courses</h1>
            <h6>now more about us</h6>
        </div>
              <Button
          button={allCategories}
          filter={filter}
          dataSlide={dataSlide}
          setMenuItem={setMenuItem}
          menuItem={menuItem}
        />
        <Item menuItem={menuItem} />
        <S.Btn>see all</S.Btn>
    </S.CoursesContainer>
  )
}

export default Courses