import React, { useEffect, useState } from 'react'
import ColorsIndicator from './ColorsIndicator'
import InputLanguage from './InputLanguage'
import LanguageCard from './LanguageCard'
import programmingLanguages from '../../programmingLanguages'
import CongratulationsPage from './CongratulationsPage'

const Home = () => {
    // This useState use slice method to get a copy of a array and not a referency
    const [programmingLanguagesData, setProgrammingLanguagesData] = useState(
        programmingLanguages.slice()
    )

    // To save a language to guess
    const [languageRandom, setLanguageRandom] = useState({})

    // Validate if game is over
    const [isCompleted, setIsCompleted] = useState(false)

    // To save a languages selected by user
    const [languagesAnswers, setLanguagesAnswers] = useState([])

    // Generate a random language to guess
    useEffect(() => {
        selectRandomLanguage(programmingLanguagesData)
    }, [])

    const selectRandomLanguage = (arrayLanguages) => {
        const randomIndex = Math.floor(Math.random() * arrayLanguages.length)
        setLanguageRandom(arrayLanguages[randomIndex])
    }

    // Add language to array of answers, in custom order (reverse)
    const addLanguage = (language) => {
        setLanguagesAnswers([language, ...languagesAnswers])

        checkLanguageIsFound(language, languageRandom)
    }

    const checkLanguageIsFound = (language, languageRandom) => {
        if (language.name === languageRandom.name) {
            setIsCompleted(true)
        }
    }

    // To reset all values necessary to play again
    const restartGame = () => {
        setIsCompleted(false)
        setLanguagesAnswers([])
        setProgrammingLanguagesData(programmingLanguages.slice())
        selectRandomLanguage(programmingLanguagesData)
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
                <button onClick={restartGame} className="btn btn-link p-0">
                    <i className="fa-solid fa-repeat button-home"></i>
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
                    programmingLanguagesData={programmingLanguagesData}
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
