import React from 'react'
import img1 from '../../Images/Image1.png'
import img2 from '../../Images/Image (1).png'
import img3 from '../../Images/Image (2).png'
import avatar1 from '../../Images/Avatar (5).png'
import avatar2 from '../../Images/Avatar (7).png'
import avatar3 from '../../Images/Avatar (8).png'


function Blogsection() {
    return (
        <div style={{marginTop:"190px"}}>
            <p style={{marginLeft:'6%',color:'purple'}}>Our blog</p>
            <div style={{marginLeft:'6%'}}>
                
                <h2>Lastest blog posts</h2>
                <h4>Tool and strategies modern teams need to help their companies grow.</h4>
                <button  className='btn3'>View all posts</button>
            </div>
            
            <div>
            <div className="album py-5 bg-body-tertiary" id='blogpost'>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          
          
          
         <div className="col">
            <div className="card shadow-sm">
              <img src={img1} alt='avatar'></img>
              <div className="card-body">
                <p>Design</p>
                <h5>UX review presentations</h5>
                <p className="card-text">
                How do you create compelling presentations that wow your colleagues and impress your managers?
                </p>
                <img src={avatar1} alt='avatar'></img><span>Olivia Rhye</span><br></br><span>20 Jan 2024</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={img2} alt='avatar'></img>
              <div className="card-body">
                <p>Product</p>
                <h5>Migrating to Linear 101</h5>
                <p className="card-text">
                Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
                </p>
                <img src={avatar2} alt='avatar'></img><span>Olivia Rhye</span><br></br><span>20 Jan 2024</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={img3} alt='avatar'></img>
              <div className="card-body">
                <p>Software Engineering</p>
                <h5>Building your API stack</h5>
                <p className="card-text">
                The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
                </p>
                <img src={avatar3} alt='avatar'></img><span>Olivia Rhye</span><br></br><span>20 Jan 2024</span>
              </div>
            </div>
          </div>
          
         
        
        </div>
      </div>
    </div>
    
            </div>
          
        </div>
      )
}

export default Blogsection