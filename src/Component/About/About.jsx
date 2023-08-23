import React from 'react'
import glo from '../../Images/glo.jpeg';
import glo2 from '../../Images/glo2.jpeg';
import ads from '../../Images/gf3.gif'
import './About.css'

export default function About() {
  return<>
    <div className="col-md-6">
          <img src={ads} alt=""  className='w-75 framed'/>
    </div>
    <div className="col-md-6 discription p-5">
      <h4>gözəl,Every woman is beautiful in her own way</h4>
      <p>We make beauty easy. We offer budget friendly & easy delivery of Original high end brands
        Our brand works to take care of the beauty of women from the goodness of nature, and every woman has her own 
        recipes that she acquires from nature to preserve her splendor
      </p>
    </div>
  </>
}
