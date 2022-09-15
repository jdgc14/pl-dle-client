import React from 'react'
import { useNavigate } from 'react-router-dom'
import LanguageCard from './LanguageCard'

const CongratulationsPage = ({ languageRandom }) => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return (
        <div>
            <h2>Congratulations</h2>
            {/* <button onClick={goToHome}>Try Again</button> */}
        </div>
    )
}

export default CongratulationsPage
