import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./form.css";



// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}


export const Form = () => {

  // main array of objects state
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  
  
  const [information, setInformation]=useState('');
  const [diagnosed, setDiagnosed] = useState('')
  const [phy_trauma, setPhy_trauma] = useState('')
  const [ment_trauma, setMent_trauma] = useState('')
  const [problem, setProblem] = useState('')
  const [scale, setScale] = useState('')
  const [expprb, setExpprb] = useState([])

  //new Problems

  const [formValues, setFormValues] = useState([{ not_rel: "", yes : "", no: ""}])



  



  let addFormFields = () => {
    setFormValues([...formValues, { not_rel: "", yes: "", no:""}])
 }

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      information,
      diagnosed,
      expprb,
      phy_trauma,
      ment_trauma,
      problem,
      scale,
    }
    setbooks([...books,book]);
    setInformation('');
    setExpprb([...expprb]);
    setDiagnosed('');
    setPhy_trauma('');
    setMent_trauma('');
    setProblem('');
    setScale('');
  }


  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='main'>     

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>

        <div className="head">
          <h3>Pain & Functional Description</h3>
          <p className="para1">
            The description of the current situation gives your Optimun trainer
            a picture of and clues to the underlying causes of your problems
          </p>

          <p className="para2">
            IF you have problems with pain/aches, stiffness, weakness or
            functional problems, describe this/these below (List the symptoms in
            descending order with the most troublesome first)
          </p>
          <textarea className="text"
          type="text"
          name="information"
          value={information}
          onChange={e=>setInformation(e.target.value)}
          required
          ></textarea>
        </div>


         <div className="radio1">
           <p>Have you been diagnosed with this problem?</p>

           <div className="rad_btn">
           <input type="radio" name="diagnosed" value="not_relevant"
            checked={diagnosed === 'not_relevant'}
            onChange={(e)=>setDiagnosed(e.target.value)}
            required
            />
             <label>Not relevant</label>

             <input type="radio" name="diagnosed" value="yes"
             checked={diagnosed === 'yes'}
             onChange={(e)=>setDiagnosed(e.target.value)} 
             />
             <label>Yes</label>

             <input type="radio" name="diagnosed" value="no"
             checked={diagnosed === 'no'}
             onChange={(e)=>setDiagnosed(e.target.value)} 
             />
             <label>No</label>
           </div>
         </div>



        <div className="radio1">
          <p>Did the problem start after a physical trauma?</p>

          <div className="rad_btn">
            <input type="radio" name="phy_trauma" value="not_relevant"
            checked={phy_trauma === 'not_relevant'}
            onChange={(e)=>setPhy_trauma(e.target.value)}
            />
            <label>Not relevant</label>

            <input type="radio" name="phy_trauma" value="yes"
            checked={phy_trauma === 'yes'}
            onChange={(e)=>setPhy_trauma(e.target.value)} 
            />
            <label>Yes</label>

            <input type="radio" name="phy_trauma" value="no"
            checked={phy_trauma === 'no'}
            onChange={(e)=>setPhy_trauma(e.target.value)}
            />
            <label>No</label>
          </div>
        </div>




        <div className="radio1">
          <p>Did the problem start after a mental trauma?</p>

          <div className="rad_btn">
            <input type="radio" name="ment_trauma" value="not_relevant"
            checked={ment_trauma === 'not_relevant'}
            onChange={(e)=>setMent_trauma(e.target.value)}
            />
            <label>Not relevant</label>

            <input type="radio" name="ment_trauma" value="yes"
            checked={ment_trauma === 'yes'}
            onChange={(e)=>setMent_trauma(e.target.value)} 
            />
            <label>Yes</label>

            <input type="radio" name="ment_trauma" value="no"
            checked={ment_trauma === 'no'}
            onChange={(e)=>setMent_trauma(e.target.value)}
            />
            <label>No</label>
          </div>
        </div>



        <div className="radio2">
          <p>Did the problem start after a mental trauma?</p>

          <div className="rad_btn">
            <input type="radio" name="problem" value="not_relevant" 
            checked={problem === 'not_relevant'}
            onChange={(e)=>setProblem(e.target.value)}
            />
            <label>Not relevant</label>

            <input type="radio" name="problem" value="daily"
            checked={problem === 'daily'}
            onChange={(e)=>setProblem(e.target.value)} 
            />
            <label>Daily</label>

            <input type="radio" name="problem" value="weekly" 
            checked={problem === 'weekly'}
            onChange={(e)=>setProblem(e.target.value)} 
            />
            <label>Several times/week</label>

            <input type="radio" name="problem" value="monthly" 
            checked={problem === 'monthly'}
            onChange={(e)=>setProblem(e.target.value)} 
            />
            <label>A few times/month</label>

            <input type="radio" name="problem" value="yearly"
            checked={problem === 'yearly'}
            onChange={(e)=>setProblem(e.target.value)}  
            />
            <label>A few times/year</label>
          </div>
        </div>


    <div className="check">
        <p>When do you experience the problem?</p>
    <div className="sub_check"  >
            <input type="checkbox" name="exp_problem" value="not_relevant" key="1"
            onChange={e=>setExpprb(e.target.value)}
            />
            <label>Not relevant</label>
            <br />
            <input type="checkbox" name="exp_problem" value="lying_down" key="2"
            onChange={e=>setExpprb(e.target.value)}
            />
            <label>When lying down</label>
            <br />
            <input type="checkbox" name="exp_problem" value="sitting" key="3"
            onChange={e=>setExpprb(e.target.value)}
            />
            <label>When sitting</label>
            <br />
            <input type="checkbox" name="exp_problem" value="under standing" key="4"
            onChange={e=>setExpprb(e.target.value)}
            />
            <label>under standing</label>
            <br />
            <input type="checkbox" name="exp_problem" value="walking" key="5"
            onChange={e=>setExpprb(e.target.value)} 
            />
            <label>In Walking</label>
        </div>
    </div>





    <div className="scale">
          <p className="scale_head">
            How intense is the experience of the problem on average on a 0-10
            scale?
          </p>

          <div>
            <p className="nums">
              1 2 3 4 5 6 7 8 9 <span>10</span>
            </p>

            <div className="nums_radio">
              <input type="radio" name="scale" value="1" 
              checked={scale === '1'}
              onChange={(e)=>setScale(e.target.value)}
              />
              <input type="radio" name="scale" value="2" 
              checked={scale === '2'}
              onChange={(e)=>setScale(e.target.value)}
              />
              <input type="radio" name="scale" value="3" 
              checked={scale === '3'}
              onChange={(e)=>setScale(e.target.value)}
              />
              <input type="radio" name="scale" value="4" 
              checked={scale === '4'}
              onChange={(e)=>setScale(e.target.value)}
              />
              <input type="radio" name="scale" value="5" 
              checked={scale === '5'}
              onChange={(e)=>setScale(e.target.value)}
              />
              <input type="radio" name="scale" value="6" 
              checked={scale === '6'}
              onChange={(e)=>setScale(e.target.value)}
              />
              <input type="radio" name="scale" value="7" 
              checked={scale === '7'}
              onChange={(e)=>setScale(e.target.value)}
              />
              <input type="radio" name="scale" value="8" 
              checked={scale === '8'}
              onChange={(e)=>setScale(e.target.value)}
              />
              <input type="radio" name="scale" value="9" 
              checked={scale === '9'}
              onChange={(e)=>setScale(e.target.value)}
              />
              <input type="radio" name="scale" value="10"
              checked={scale === '10'}
              onChange={(e)=>setScale(e.target.value)}
              />
            </div>
          </div>
        </div>


        <div>
        {formValues.map((element, index) => (
            <div className="radio1" key={index}>
              <p>Any Another Problem Occurs?</p>
              <div className="rad_btn">
              <input type="radio" name="any_prob" value={element.not_rel || ""} />
              <label>Not relavent</label>
              
              <input type="radio" name="any_prob" value={element.yes || ""} />
              <label>Yes</label>
              
              <input type="radio" name="any_prob" value={element.no || ""} />
              <label>No</label>
               </div>
            </div>
          ))}
        </div>

        <div className="hori_line">
        <button className="button add" type="button" onClick={() => addFormFields()}>
              <img src="https://img.icons8.com/ios-glyphs/30/4a90e2/plus.png" alt="imgs"/>
              </button>
          <hr style={{ color: "red" }} />
        </div>

        <div className="buttons">
          <button>BACK</button>
          <button type="submit">Submit</button>
          <Link to="/NewComp"><button type="submit">NEXT</button></Link>
        </div>
            

          </form>
        </div>

            <button className='btn btn-danger btn-md'
             onClick={()=>setbooks([])}></button>

      </div>
    
  )
}

export default Form