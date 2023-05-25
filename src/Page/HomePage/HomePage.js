import React from 'react'
import style from "./HomePage.module.css"

function HomePage() {
  return (
    <div className={style.main}>
      <h1>Welcome to Computer World</h1>
      <div className={style.footer}>
              <div>
                <h3>Most Recommended</h3>
                <p>Best reviews from our alumni</p>
                </div>
              <div>
                <h3>Experts Instruction</h3>
                <p>Certified & experienced Instructor</p>
                </div>
              <div>
                <h3>100+ Courses</h3>
                <p>Explore a variety of new subjects</p>
                </div>
              <div>
                <h3>Lifetime Support</h3>
                <p>Lifetime support for upgradation</p>
                </div>
      </div>
    </div>
  )
}

export default HomePage
