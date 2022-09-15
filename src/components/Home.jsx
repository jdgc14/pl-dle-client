import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import programmingLanguages from '../../programmingLanguages'
import InputLanguage from './InputLanguage'
import LanguageCard from './LanguageCard'

const Home = () => {
    const [languageToSearch, setLanguageToSearch] = useState({})

    const [languageSelected, setLanguageSelected] = useState({})

    const [languagesAnswers, setLanguagesAnswers] = useState([])

    const addLanguage = (language) => {
        setLanguagesAnswers([...languagesAnswers, language])
    }

    console.log(languagesAnswers)

    const selectRandomLanguage = (arrayLanguages) => {
        const randomIndex = Math.floor(Math.random() * arrayLanguages.length)
        setLanguageToSearch(arrayLanguages[randomIndex])
    }

    useEffect(() => {
        selectRandomLanguage(programmingLanguages)
    }, [])

    return (
        <div className="text-center">
            <div className="d-flex justify-content-center">
                {programmingLanguages.map((language) => (
                    <div key={language.name} className="col-2 text-center">
                        <h3>{language.name}</h3>
                        <img src={language.img} style={{ width: '50px' }} />
                    </div>
                ))}
            </div>
            <h2>Type a programming languages to begin.</h2>

            <InputLanguage
                programmingLanguages={programmingLanguages}
                setLanguageSelected={setLanguageSelected}
                addLanguage={addLanguage}
            />
            <LanguageCard languageToSearch={languageToSearch} />
            {languagesAnswers.map((language) => (
                <div key={language.name}>
                    <LanguageCard languageToSearch={language} />
                </div>
            ))}
        </div>
    )
}

export default Home
