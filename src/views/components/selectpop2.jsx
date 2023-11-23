import React,{ useEffect } from 'react'
import "./select_pop2.css"
const SelectPop2 = (props) => {
    const BadAnswer = async ()=>{
      props.onPop1Click();
      try {
        const response = await fetch('http://localhost:2000/decrement_point', {
          method: 'POST',
        });
        const data = await response.json();
        console.log('Points updated:', data);
      } catch (error) {
        console.error('Error updating points:', error);
      }

    }
    const handlePopup2Click = async () => {
      props.trueAnswer();
      props.returnAnswer();
      props.stage1Round();
      try {
        const response = await fetch('http://localhost:2000/increment_point', {
          method: 'POST',
        });
        const data = await response.json();
        console.log('Points updated:', data);
      } catch (error) {
        console.error('Error updating points:', error);
      }
    };
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:2000/get_points');
          const data = await response.json();
          if (response.ok) {
            console.log('Points:', data.points);
          } else {
            console.error('Error fetching points:', data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      fetchData();
    }, []);
  return (
    <div>
    <div className='popup11' onClick={BadAnswer} style={{ visibility: props.vis }} >{props.pop11}</div>
    <div className='popup22' onClick={handlePopup2Click} style={{ visibility: props.vis}}>{props.pop22}</div>
    </div>
  )
}

export default SelectPop2
