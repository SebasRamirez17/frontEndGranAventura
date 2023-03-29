import React from 'react'

export const Buttons = ({content,style,fun}) => {
  return (
    <div>
        <button className={style} onClick={fun} >{content}</button>
    </div>
  )
}
