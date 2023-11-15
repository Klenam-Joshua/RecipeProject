import React from 'react'
import Styles from './ContentSection.module.css';

const ContentSection = (props) => {
  return (
       <section className={Styles.contentContainer}>
               {props.children}
       </section>
  )
}

export default ContentSection
