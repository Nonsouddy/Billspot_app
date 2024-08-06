import React from 'react'
import '../page.css'
import './NewsLetterPage.css'

function NewsPage() {
  return (
    <section className='Newsletter'>
    <div className='Newsletter_section'>
      <div className='NewsletterTitle'>
        <div className='StayUpdated'>Stay Updated with Billspot</div>
        <div className='StayUpdatedPara' >Stay in the loop with all things Billspot! Subscribe to our newsletter and be the first to know about:</div>
      </div>
      <div className='inputSection'>
        <input
          type="email"
          placeholder="enter your email"
        />
        <div className='ttet'>
          <button className='inputSectionButton'
            type='submit'> Subscribe </button>
        </div>
      </div>
    </div>

  </section>
  )
}

export default NewsPage