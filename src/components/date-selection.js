import React from 'react'

const DateSelection = () => {
    const select2020 = () => {
        localStorage.removeItem('date')
        localStorage.setItem('date', '2020')
        window.location.reload()
    }
    const select2021 = () => {
        localStorage.removeItem('date')
        localStorage.setItem('date', '2021')
        window.location.reload()
    }
    return (
        <div>
            <button onClick={select2020}>2020</button>
            <button onClick={select2021}>2021</button>
            <p>{localStorage.getItem('date')}</p>
        </div>
    )
}
  
export default DateSelection