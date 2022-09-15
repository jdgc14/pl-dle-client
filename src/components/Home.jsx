import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import programmingLanguages from '../../programmingLanguages'
import ColorsIndicator from './ColorsIndicator'
import InputLanguage from './InputLanguage'
import LanguageCard from './LanguageCard'

const Home = () => {
    const [languageRandom, setLanguageRandom] = useState({})

    const [languagesAnswers, setLanguagesAnswers] = useState([])

    const addLanguage = (language) => {
        setLanguagesAnswers([language, ...languagesAnswers])
    }

    const selectRandomLanguage = (arrayLanguages) => {
        const randomIndex = Math.floor(Math.random() * arrayLanguages.length)
        setLanguageRandom(arrayLanguages[randomIndex])
    }

    useEffect(() => {
        selectRandomLanguage(programmingLanguages)
    }, [])

    return (
        <div className="text-center" style={{ minHeight: '80vh' }}>
            <div className="d-flex justify-content-center">
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
            </div>
            {languagesAnswers.length === 0 && (
                <h2>Type a programming languages to begin.</h2>
            )}

            <InputLanguage
                programmingLanguages={programmingLanguages}
                addLanguage={addLanguage}
            />
            <ColorsIndicator />
            {/* <LanguageCard
                languageRandom={languageRandom}
                languageSelectByUser={languageRandom}
            /> */}
            {languagesAnswers.map((language) => (
                <div key={language.name}>
                    <LanguageCard
                        languageSelectByUser={language}
                        languageRandom={languageRandom}
                    />
                </div>
            ))}
        </div>
    )
}

export default Home
