import React from 'react'
import avatar1 from '../../Images/Avatar (2).png'
import avatar2 from '../../Images/Avatar (4).png'
import avatar3 from '../../Images/Avatar (3).png'
import plus from '../../Images/Icon wrap (1).png'
import minus from '../../Images/Icon wrap.png'


function Questionary() {
    return (
        <div className='qanda'>
         <center> <h1>Frequently asked questions</h1>
          <p>Everything you need to know about the product and billing.</p></center>
          <div style={{marginTop:'10%',height:'700px'}}>
          <div className="my-3 p-3 bg-body rounded shadow-sm" >
      <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
      <div className="d-flex text-body-secondary pt-3">
        
        <div className="pb-3 mb-0 small lh-sm border-bottom w-100" >
          <div className="d-flex justify-content-between" style={{marginBottom:'30px'}}>
            <strong className="text-gray-dark">Is there any free trail available?<span className='spans'><img src={minus}></img></span></strong>
            
          </div>
          <span className="d-block">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</span>
        </div>
      </div>
      <div className="d-flex text-body-secondary pt-3">
        
        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div className="d-flex justify-content-between" style={{marginBottom:'30px'}}>
            <strong className="text-gray-dark">can I change my plan later?<span className='spans'><img src={plus}></img></span></strong>
            
          </div>
          <span className="d-block"></span>
        </div>
      </div>
      <div className="d-flex text-body-secondary pt-3">
        
        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div className="d-flex justify-content-between" style={{marginBottom:'30px'}}>
            <strong className="text-gray-dark">What is your cancellation property?<span className='spans'><img src={plus}></img></span></strong>
            
          </div>
          <span className="d-block"></span>
        </div>
      </div>
      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div className="d-flex justify-content-between" style={{marginBottom:'60px'}}>
            <strong className="text-gray-dark">Can other info is added to invoice?<span className='spans'><img src={plus}></img></span></strong>
            
          </div>
          <span className="d-block"></span>
        </div>
      </div>
      <div className="d-flex text-body-secondary pt-3">
    </div>
    <center><div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img src={avatar1} alt="avatar1" style={{ position: 'absolute', top: 0, left:'60px'}} />
              <img src={avatar2} alt="avatar2" style={{ marginLeft: '10px', marginRight: '10px' }} />
            </div>
            <img src={avatar3} alt="avatar3" style={{ position: 'absolute', marginLeft: '36px' }} />
    </div>
    <h6>Still have questions?</h6>
    <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
    <button style={{color:'white',backgroundColor:'#7F56D9',borderRadius:'19px',border:'none',padding:'8px'}}>Get in touch</button>
    </center>
          </div>
        </div>
      )
}

export default Questionary