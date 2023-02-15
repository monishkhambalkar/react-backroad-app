import React from 'react'
import Title from './Title';
import { toursData } from '../data'

function Tours() {
  return (
    <section className="section" id="tours">
    <Title title="featured" subTitle="tours"/>

      <div className="section-center featured-center">
        {toursData.map((tours)=>{
           return (
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={tours.logo} className="tour-img" alt="" />
              <p className="tour-date">{tours.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tours.title}</h4>
              </div>
              <p>{tours.text}</p>
              <div className="tour-footer">
                <p><span><i className="fas fa-map"></i></span>{tours.country}</p>
                <p>{tours.days}</p>
                <p>{tours.from}</p>
              </div>
            </div>
          </article>
           )
          })}
      </div>
    </section>
  )
}

export default Tours
