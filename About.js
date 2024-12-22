import React,{useState}  from 'react'

 export default function About(props) {
//   const[mystyle, setMystyle] = useState({
//     color: 'black',
//     background:'white'
    
//   });
  let mystyle={
   color:props.mode ===' dark'? 'white' :'black',
     backgroundColor:props.mode ===' dark'? 'black' :'white',
      borderColor:props.mode ===' dark'? 'white' :'#047743' ,
  }

  return (
    <  div className='container'>
        <h2 className='my-2'style={{ color:props.mode ===' dark'? 'white' :'black'}} >About us </h2>
      <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <h6> Analyze your text </h6>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={mystyle}>
       The paragraph consists of three sentences.
 Each sentence is relatively short, with an average of 15-20 words.
 The paragraph follows a logical structure, starting with a general statement, followed by a specific example, and concluding with a broader implication.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"   style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <h6> Free to use</h6>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={mystyle}>
      "The beauty of nature has a profound impact on our well-being. Spending time outdoors can calm our minds, uplift our spirits, and rejuvenate our bodies. Whether it's walking through a forest, hiking up a mountain, or simply sitting in a park, being in nature can be a powerful antidote to the stresses of modern life."
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <h6>Browser compatible</h6>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={mystyle}>
      Ensuring browser compatibility is crucial for providing a seamless user experience across different devices and platforms. With the vast array of browsers and versions available, it can be challenging to guarantee that your website or application functions consistently across all of them. However, by using standardized web development practices, testing on multiple browsers, and leveraging tools like cross-browser testing frameworks, you can minimize compatibility issues and ensure that your digital product is accessible and usable by the widest possible audience.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
