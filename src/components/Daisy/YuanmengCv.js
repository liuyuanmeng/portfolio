// This components is going to display all cheeses in a list
import React from 'react'
import { Container } from 'react-bootstrap'



import { Link } from 'react-router-dom'

const YuanmengCv = () => {
  return (

    <>
      <div className='cv-container'>

        <h1 className='mt-5 text-center'> Work Experience </h1>
        <div className='box'>
          <div className='left'>

            <h4>September 2018 – September 2019  Sales assistant – Salvatore Ferragamo</h4><br></br>


            <p className='text-left '>
              • Applied excellent customer service skills whilst offering advice and assistance to <br></br>customers in a professional and efficient manner<br></br>
              • Handled payments, gift cards, and refunds at the cash desk and welcomed an average<br></br> of 80-100 customers on a daily basis<br></br>
              • Utilised interpersonal and communication skills while providing exceptional<br></br> customer service and exchanged with customers to tailor advice and recommendations<br></br>
              • Met and achieved KPIs, exceeding targets and expectations by remaining motivated<br></br>
              • Was able to maintain high standards of display & visual merchandising to<br></br> ensure the store was well presented<br></br>
            </p>
          </div>



          <div className='right'>
            <h4 className='text-md-right'>September 2017- January 2018 Customer Support Advisor - Humberton</h4><br></br>

            <p className='text-right '>
              •  Provided support to customers via emailed tickets, telephone <br></br> (inbound and outbound), and social media outlets
              <br></br>
              • Handled payments, gift cards, and refunds at the cash desk and welcomed an average<br></br> of 80-100 customers on a daily basis<br></br>
              • Translated documents to be used for company website <br></br> releases from English to Chinese (vice versa)
              <br></br>
              • Assisted with arranging meetings, presentations, interviews, and other requests from management <br></br>
              • Performed day-to-day administrative office support
              <br></br>
            </p>
          </div>
        </div>







      </div>

    </>

  )

}

export default YuanmengCv