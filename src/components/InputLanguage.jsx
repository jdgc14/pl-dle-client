import React, { useState } from 'react'

const InputLanguage = ({ programmingLanguages }) => {
    const [languageUser, setLanguageUser] = useState('')

    const submit = (e) => {
        e.preventDefault()
        console.log(languageUser)
    }
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                value={languageUser}
                onChange={(e) => setLanguageUser(e.target.value)}
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
        </form>
    )
}

export default InputLanguage
