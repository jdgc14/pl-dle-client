import React, { useEffect, useState } from 'react'
import ColorsIndicator from './ColorsIndicator'
import InputLanguage from './InputLanguage'
import LanguageCard from './LanguageCard'
import programmingLanguages from '../../programmingLanguages'
import CongratulationsPage from './CongratulationsPage'

const Home = () => {
    const [languageRandom, setLanguageRandom] = useState({})

    const [isCompleted, setIsCompleted] = useState(false)

    const selectRandomLanguage = (arrayLanguages) => {
        const randomIndex = Math.floor(Math.random() * arrayLanguages.length)
        setLanguageRandom(arrayLanguages[randomIndex])
    }

    useEffect(() => {
        selectRandomLanguage(programmingLanguages)
    }, [])

    const [languagesAnswers, setLanguagesAnswers] = useState([])

    const addLanguage = (language) => {
        setLanguagesAnswers([language, ...languagesAnswers])

        checkLanguageIsFound(language, languageRandom)
    }

    const checkLanguageIsFound = (language, languageRandom) => {
        if (language.name === languageRandom.name) {
            setIsCompleted(true)
        }
    }

    return (
        <div className="text-center" style={{ minHeight: '80vh' }}>
            <div
                className="position-fixed d-flex flex-column gap-3"
                style={{
                    right: '5%',
                    top: '65px',
                    zIndex: '1',
                }}
            >
                <button className="btn btn-link p-0">
                    <i class="fa-solid fa-repeat button-home"></i>
                </button>
            </div>
            <h4>Guess programming language.</h4>
            {languagesAnswers.length === 0 && (
                <h2>Type a programming language to begin.</h2>
            )}

            {isCompleted ? (
                <CongratulationsPage />
            ) : (
                <InputLanguage
                    programmingLanguages={programmingLanguages}
                    addLanguage={addLanguage}
                />
            )}

            {languagesAnswers.length !== 0 && !isCompleted && (
                <ColorsIndicator />
            )}

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
        </div>
    )
}

export default Home
