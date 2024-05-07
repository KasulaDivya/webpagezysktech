import React from 'react'
import logo from '../../Images/Logomark (1).png'
import avatar from '../../Images/Avatar (1).png'

function Testimonialsection() {
    return(
        <>
        <center >
            <div  className='testsection'>
                <div className='testsection1'>
            <img src={logo}></img>
            <span style={{color:'#101828',fontSize:'25px'}}>Sisyphus</span>
        <br></br>
        <br></br>
        <h1>We’ve been using Untitled to kick start every new <br></br>
            project and can’t imagine working without it.</h1>
           <img src={avatar}></img><br></br>
           <span style={{color:"#101828",fontWeight:'bold'}}>Candice Wu</span><br></br>
           <span>Product Manager, Sisyphus</span>
           </div>
           </div>
        </center>

        </>
    )
}

export default Testimonialsection