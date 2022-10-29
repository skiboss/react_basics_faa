import React from 'react'
// import "styles.css"

function Card({name, handle}) {
  return (
    <div>
        <div className='card'>
            <div className='card__img'>

            </div>
            <div className='card__content'>
                <h2 className='card__content__name'> {name} </h2>
                <p className='card__content__handle'>{handle}</p>
                <p className='card__content__work'> Frontend Web Developer and CS Instructor </p>
                {/* <MyButton title="Click Me"/> */}
                <MyButton>
                    <strong>Children</strong>
                </MyButton>
            </div>
        </div>
    </div>
  )
}

function MyButton({title, children}) {
    return (
        <button>
            {/* {title} */}
            {children}
        </button>
    )
}

export default Card