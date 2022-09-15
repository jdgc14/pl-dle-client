import React, { useState } from 'react'

const InputLanguage = ({ programmingLanguages, addLanguage }) => {
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

        addLanguage(language)

        setLanguageInput('')
    }
    return (
        <>
            <form
                onSubmit={submit}
                className="d-flex col-6 col-md-4 mx-auto mt-3"
            >
                <input
                    type="text"
                    value={languageInput}
                    onChange={(e) => setLanguageInput(e.target.value)}
                    list="languagesName"
                    className="form-control d-inline"
                    placeholder="Type any language..."
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
                <button className="btn btn-primary">
                    <i className="fa-solid fa-play"></i>
                </button>
            </form>
            {isErrorInput && (
                <div className="fw-bold text-danger mb-3">
                    <small>Language doesn't exist.</small>
                </div>
            )}
        </>
    )
}

export default InputLanguage
