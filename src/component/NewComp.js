import React,{useState} from 'react'
import { View } from './View';
import {Link} from 'react-router-dom'


const getDatafromLS=()=>{
    const data = localStorage.getItem('books');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  } 

  
const NewComp = () => {

    const [books]=useState(getDatafromLS());

    return (
        <div className='view-container'>
            
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                <tr>
                    <th>Problems Information</th>
                    <th>Diagnosed Problems</th>
                    <th>Physical Trauma</th>
                    <th>Mental Trauma</th>
                    <th>When Problem Starts</th>
                    <th>Activity when problem occurs</th>
                    <th>Intensity</th>
                    {/* <th>Remove Task</th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* <View books={books} deleteBook={deleteBook}/> */}
                  <View books={books} />
                </tbody>
              </table>
            </div>
            
            
          </>}
          {books.length < 1 && <div>Nothing Is Added</div>}
            <Link to="/"><button>Back</button></Link>

        </div>

      
    )
}

export default NewComp
