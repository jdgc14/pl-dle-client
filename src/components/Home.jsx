import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ColorsIndicator from './ColorsIndicator'
import InputLanguage from './InputLanguage'
import LanguageCard from './LanguageCard'
import programmingLanguages from '../../programmingLanguages'

const Home = () => {
    const [languageRandom, setLanguageRandom] = useState({})

    const selectRandomLanguage = (arrayLanguages) => {
        const randomIndex = Math.floor(Math.random() * arrayLanguages.length)
        setLanguageRandom(arrayLanguages[randomIndex])
    }

    useEffect(() => {
        selectRandomLanguage(programmingLanguages)
    }, [])

    const navigate = useNavigate()

    const [languagesAnswers, setLanguagesAnswers] = useState([])

    const addLanguage = (language) => {
        setLanguagesAnswers([language, ...languagesAnswers])

        checkLanguageIsFound(language, languageRandom)
    }

    const checkLanguageIsFound = (language, languageRandom) => {
        if (language.name === languageRandom.name) {
            navigate('/congratulations')
        }
    }

    return (
        <div className="container text-center" style={{ minHeight: '80vh' }}>
            {languagesAnswers.length === 0 && (
                <h2>Type a programming languages to begin.</h2>
            )}

            <InputLanguage
                programmingLanguages={programmingLanguages}
                addLanguage={addLanguage}
            />
            <ColorsIndicator />

            <div
                className="bg-black bg-opacity-50 col-11 mx-auto rounded"
                style={{ minHeight: '50vh' }}
            >
                {languagesAnswers.map((language) => (
                    <div key={language.name}>
                        <LanguageCard
                            languageSelectByUser={language}
                            languageRandom={languageRandom}
                        />
                    </div>
                ))}
            </div>
            {/* <div className="d-flex justify-content-center p-5">
                {programmingLanguages.map((language) => (
                    <div key={language.name} className="col-1 text-center">
                        <h6>{language.name}</h6>
                        <img
                            src={language.img}
                            style={{
                                width: '70px',
                                height: '80px',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Home
