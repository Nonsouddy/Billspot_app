'use client'
import Image from 'next/image'
import React from 'react'
import SearchBar from '../SearchBar'
import FAQs from '../FAQs'
import { faqs } from '../Data'
import { AiFillCaretDown } from "react-icons/ai"
import Vector from '../Svgs/Vector.svg'

function FQAPage() {
    return (
        <section className='FQA'>
            <div>
                <div className='FQA_Title'>
                    <div className='FQA_bigText'>Frequently Asked Questions (FAQ)</div>
                    <div className='FQA_smallText'> Get quick answers to frequently asked questions, don't see what you are looking for reach out to support.</div>
                </div>
                <div className='FQA_contact'>
                    <a href=''>
                        <div>Contact Support</div>
                        <Image src={Vector} alt='' />
                    </a>
                </div>
                <div className='FQA_search' >
                    <div className='FQA_help'>How can we help you?</div>
                    <SearchBar />
                </div>
                <div className='Questions'>
                    <div className=''>
                        {
                            faqs.map(({ id, question, answer }) => {
                                return <FAQs key={id} question={question} answer={answer} />
                            })
                        }
                    </div>
                    <div className='More_section'>
                        <div>More</div>
                        <div><AiFillCaretDown /></div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default FQAPage