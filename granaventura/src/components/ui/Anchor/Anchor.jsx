import React from 'react'
// import { }

export const Anchor = ({content, style, link}) => {
  return (
    <a href={link} className={style}>{content}</a>
  )
}
