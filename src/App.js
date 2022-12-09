import React, { useState } from 'react'

import data from './data'

function App() {
    const [jobs, setJobs] = useState(data)
    const [value, setValue] = useState(0)

    const { company, dates, duties, title } = jobs[value]

    return (
        <section className='section'>
            <div className='title'>
                <h2>Математика</h2>
            </div>
            <div className='jobs-center'>
                <div className='btn-container'>
                    {jobs.map((job, index) => {
                        return (
                            <button
                                key={job.id}
                                className={`job-btn ${
                                    index === value && 'active-btn'
                                }`}
                                onClick={() => setValue(index)}
                            >
                                {job.company}
                            </button>
                        )
                    })}
                </div>
                <article className='job-info'>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className='job-desc'>
                                <p>{duty}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default App
