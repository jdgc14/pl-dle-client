import React from 'react'
import { useState } from 'react'
import programmingLanguages from '../../../programmingLanguages'

const Home = () => {
    const [languageUser, setLanguageUser] = useState('')

    return (
        <div>
            {programmingLanguages.map((language) => (
                <div key={language.name}>
                    <h3>{language.name}</h3>
                    <img src={language.img} style={{ width: '50px' }} />
                </div>
            ))}
            <form action="">
                <input
                    type="text"
                    value={languageUser}
                    onChange={(e) => setLanguageUser(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Home
