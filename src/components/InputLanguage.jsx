import React, { useState } from 'react'

const InputLanguage = ({
    programmingLanguages,
    setLanguageSelected,
    addLanguage,
}) => {
    const [languageInput, setLanguageInput] = useState('')

    const [isErrorInput, setIsErrorInput] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        const languageIndex = programmingLanguages.indexOf(
            programmingLanguages.find(
                (language) => language.name === languageInput
            )
        )

        const language = programmingLanguages[languageIndex]

        if (!language) {
            return setIsErrorInput(true)
        }

        programmingLanguages.splice(languageIndex, 1)

        setIsErrorInput(false)

        setLanguageSelected(language)

        addLanguage(language)
    }
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                value={languageInput}
                onChange={(e) => setLanguageInput(e.target.value)}
                list="languagesName"
            />
            {/* To suggest the allowed options to the user 
                    To Do:
                    Add img to options
                */}

            <datalist id="languagesName">
                {programmingLanguages.map((language) => (
                    <option key={language.name} value={language.name}>
                        {language.name}
                    </option>
                ))}
            </datalist>
            <button>
                <i className="fa-solid fa-play"></i>
            </button>
            {isErrorInput && (
                <div className="fw-bold">
                    <small>Language doesn't exist</small>
                </div>
            )}
        </form>
    )
}

export default InputLanguage
