import React from 'react'
const GoToTop = () => {
    const goToBtn = ()=>{
        {
            window.scrollTo({top:0,left:0 , behaviour:"smooth"})
        }

    }
  return (
    <div className="top-btn" >
      <button onClick={goToBtn}>button</button>
    </div>
  )
}

export default GoToTop;
