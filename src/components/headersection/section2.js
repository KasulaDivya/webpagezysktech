import screen from '../../Images/Screen mockup (REPLACE FILL).png'
import arrow from '../../Images/Icon.png'

function Section2(){
    return(
        <>
        <center><div className='mainheading'>
            <div className='brand'>
                <div style={{color:'#6941C6',borderRadius:'10px',border:'1px solid #D6BBFB',float:'left',backgroundColor:'#F9F5FF',width:'100px',marginRight:'10px'}}>New feature</div>
                Check out the team dashboard<img src={arrow} style={{width:'16px',paddingLeft:'8px'}}></img>
            </div>
            <h1 className='h1'>Beautiful analytics to grow smarter</h1>
            <p  className='p11'>Powerful, self-serve product and growth analytics to help you convert, engage<br></br> and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <button className='btn1'>Demo</button>
        <button  className='btn2'>Sign up</button>
        <br></br>
        <br></br>
        <div style={{marginTop:'70px'}}>
          <img src={screen} alt="hy"  id='img1'></img>
        </div>
        </center>
        </>
    )
}
export default Section2