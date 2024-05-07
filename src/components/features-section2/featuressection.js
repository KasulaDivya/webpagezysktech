import React from 'react'
import mobile from '../../Images/iPhone mockup.png'
import mobilemock from '../../Images/Mockup wrap.png'
import desk from '../../Images/Mockup shadow.png'
import deskmock from '../../Images/Screen mockup (REPLACE FILL) (1).png'
import img1 from '../../Images/Featured icon (1).png'
import img2 from '../../Images/Featured icon (2).png'
import img3 from '../../Images/Featured icon (3).png'

function Featuressection2() {
    return (
        <div>
         <center><div style={{marginTop:'70px'}}>
            <p className='p2'>Features</p>
            <h2 className='h22'>Cutting-edge features for advanced analytics</h2>
            <p className='p1'>Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.</p>
          </div></center>
    
          <div className='midimage'>
            <div >
              <img src={desk}  alt="mockup" className='desk' />
              <img src={deskmock}  alt="desk" className='deskmock' />
            </div>
            <div  className='mobilesection'>
              <img src={mobile}   className='mobile' alt="mobile"/>
              <img src={mobilemock}  className='mobilemock' alt="mobilemock" />
            </div>
          </div>
    
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3"  id='midimgbottom' >
<div className="feature col" style={{width:'400px'}}>
<center><div >
  <img src={img1}></img>
</div>
<h5>Share team inboxes</h5>
<p>
Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
</p>
<h5>Learn more{`->`}</h5></center>

</div>
<div className="feature col" style={{width:'400px'}}>
<center><div >
<img src={img2}></img>
</div>
<h5>Deliver instant answers</h5>
<p>
An all-in-one customer service platform that helps you balance everything your customers need to be happy.
</p>
<h5>Learn more{`->`}</h5></center>

</div>
<div className="feature col" style={{width:'400px'}}>
<center><div >
  <img src={img3}></img>
</div>
<h5>Manage your team with reports</h5>
<p>
Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
</p>
<h5>Learn more{`->`}</h5></center>

</div>
          </div>
    
          
        </div>
      )
}

export default Featuressection2