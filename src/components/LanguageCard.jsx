import React from 'react'
import '../styles/LanguageCard.css'
import {
    validateSingleValue,
    validateReleaseYear,
    validateArrayValues,
} from '../utils/validations.utils'

const LanguageCard = ({ languageSelectByUser, languageRandom }) => {
    const validations = {
        plataform: validateSingleValue(
            languageRandom.plataform,
            languageSelectByUser.plataform
        ),
        level: validateSingleValue(
            languageRandom.level,
            languageSelectByUser.level
        ),
        releaseYear: validateReleaseYear(
            languageRandom.releaseYear,
            languageSelectByUser.releaseYear
        ),
        typed: validateArrayValues(
            languageRandom.typed,
            languageSelectByUser.typed
        ),
        uses: validateArrayValues(
            languageRandom.uses,
            languageSelectByUser.uses
        ),
        paradigms: validateArrayValues(
            languageRandom.paradigms,
            languageSelectByUser.paradigms
        ),
    }

    return (
        <div className="d-flex mt-5 gap-2 mx-auto border-dark border-bottom border-3 border-opacity-75 p-3 ">
            <section className="col-3 col-md-1 my-auto">
                <img
                    src={languageSelectByUser.img}
                    style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'contain',
                    }}
                />
            </section>
            <section
                className={`col-3 col-md-1 bg-coincidence-${validations.typed} rounded d-grid p-2 card-languages`}
            >
                {languageSelectByUser.typed?.map((type) => (
                    <div key={type}>
                        <small>{type}</small>
                    </div>
                ))}
            </section>
            <section
                className={`col-3 col-md-1 bg-coincidence-${validations.level} rounded d-grid p-2 card-languages`}
            >
                <small>{languageSelectByUser.level}</small>
            </section>
            <section
                className={`col-3 col-md-2 bg-coincidence-${validations.paradigms} rounded d-grid p-2 card-languages`}
            >
                {languageSelectByUser.paradigms?.map((paradigm) => (
                    <div key={paradigm}>
                        <small>{paradigm}</small>
                    </div>
                ))}
            </section>
            <section
                className={`col-5 col-md-3 bg-coincidence-${validations.uses} rounded d-grid p-2 card-languages`}
            >
                {languageSelectByUser.uses?.map((use) => (
                    <div key={use}>
                        <small>{use}</small>
                    </div>
                ))}
            </section>
            <section
                className={`col-4 col-md-2 bg-coincidence-${validations.plataform} rounded d-grid p-2 card-languages`}
            >
                <small>{languageSelectByUser.plataform}</small>
            </section>
            <section
                className={`col-3 col-md-1 bg-coincidence-${validations.releaseYear} rounded d-grid p-2 card-languages`}
            >
                <small>{languageSelectByUser.releaseYear}</small>
            </section>
        </div>
    )
}

export default LanguageCard
