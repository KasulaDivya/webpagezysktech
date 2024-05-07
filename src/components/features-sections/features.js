import React from 'react'
import img1 from '../../Images/Featured icon (1).png'
import img2 from '../../Images/Featured icon (2).png'
import img3 from '../../Images/Featured icon (3).png'
import img4 from '../../Images/Featured icon (4).png'
import img5 from '../../Images/Featured icon (5).png'
import img6 from '../../Images/Featured icon.png'

function FeaturesSection1() {
  return(
    <>
  <center>
    <p  className='p2'>Features</p>
    <h2 className='h22'>Analytics that feels like its from the future</h2>
      <p style={{fontSize:'20px',color: '#475467'}} id="ppp">Powerful, self-serve product and growth analytics to help you convert, engage<br></br> and retain more users. Trusted by over 4,000 startups.</p>
<div className="row g-4 py-5 row-cols-1 row-cols-lg-3" id='container'>
<div className="feature col" style={{width:'400px'}}>
<div>
  <img src={img1}></img>
</div>
<h5>Share team inboxes</h5>
<p>
Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
</p>
</div>
<div className="feature col" style={{width:'400px'}}>
<div>
  <img src={img2}></img>
</div>
<h5>Deliver instant answers</h5>
<p>
An all-in-one customer service platform that helps you balance everything your customers need to be happy.
</p>
</div>
<div className="feature col" style={{width:'400px'}}>
<div >
  <img src={img3}></img>
</div>
<h5>Manage your team with reports</h5>
<p>
Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
</p>

</div>
</div>

<div className="row g-4 py-5 row-cols-1 row-cols-lg-3" id='container'>
<div className="feature col" style={{width:'400px'}}>
<div >
  <img src={img4}></img>
</div>
<h5>Connect with customers</h5>
<p>
Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
</p>

</div>
<div className="feature col" style={{width:'400px'}}>
<div >
<img src={img5}></img>
</div>
<h5>Connect the tools you already use</h5>
<p>
Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
</p>

</div>
<div className="feature col" style={{width:'400px'}}>
<div >
  <img src={img6}></img>
</div>
<h5>Our people make the difference</h5>
<p>
We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
</p>

</div>
</div>


</center>

    </>
)
}

export default FeaturesSection1