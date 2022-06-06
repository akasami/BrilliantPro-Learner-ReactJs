import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './index.css'
function index() {

  const [courseData, setCourseData] = useState([]);

  useEffect(()=> {
    axios.get("http://localhost:5000/courses/getall")
    .then((respose)=>{
      let allData = respose.data;
      setCourseData(allData);
      console.log("Data Received: ", allData);
      })
      .catch(() => {
        alert("Error while retreiving data!");
      }) 
  })
  


  return (
      <>
        <h2>Learner Dashboard!</h2>
        <div className='.container-fluid mt-5'>
          <div className="row text-center">
            <div className='col-10 col-md-4 mt-5'>
              <div className="card p-2">
                <div className="d-flex align-items-center">
                  
                </div>
              </div>

            </div>
          </div>

        </div>

      </>
  )
}

export default index;