import React from 'react'
import '../styles/LanguageCard.css'

const LanguageCard = ({ languageSelectByUser, languageRandom }) => {
    const validateSingleValue = (valueToFind, valueSelected) => {
        return valueToFind === valueSelected
    }

    const validateReleaseYear = (valueToFind, valueSelected) => {
        if (valueToFind > valueSelected) {
            return '-'
        } else if (valueToFind < valueSelected) {
            return '+'
        }
        return true
    }

    const validateArrayValues = (arrayToFind, arraySelected) => {
        let coincidences = 0

        const validateCharacteristics = (item) => {
            if (arraySelected.includes(item)) {
                coincidences++
            }
        }

        arrayToFind?.forEach(validateCharacteristics)

        if (
            coincidences === arraySelected?.length &&
            coincidences === arrayToFind.length
        ) {
            return true
        }

        return coincidences
    }

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

    console.log(validations)

    return (
        <div className="d-flex col-11 mt-5 gap-2 mx-auto scroll">
            <section className="col-3 col-md-1 my-auto">
                <img src={languageSelectByUser.img} style={{ width: '50px' }} />
            </section>
            <section className="col-3 col-md-1 bg-coincidence-true rounded d-grid p-2 card-languages">
                {languageSelectByUser.typed?.map((type) => (
                    <div key={type}>
                        <small>{type}</small>
                    </div>
                ))}
            </section>
            <section className="col-3 col-md-1 bg-coincidence-1 rounded d-grid p-2 card-languages">
                <small>{languageSelectByUser.level}</small>
            </section>
            <section className="col-3 col-md-2 bg-coincidence-2 rounded d-grid p-2 card-languages">
                {languageSelectByUser.paradigms?.map((paradigm) => (
                    <div key={paradigm}>
                        <small>{paradigm}</small>
                    </div>
                ))}
            </section>
            <section className="col-5 col-md-2 bg-coincidence-3 rounded d-grid p-2 card-languages">
                {languageSelectByUser.uses?.map((use) => (
                    <div key={use}>
                        <small>{use}</small>
                    </div>
                ))}
            </section>
            <section className="col-4 col-md-2 bg-success rounded d-grid p-2 card-languages">
                <small>{languageSelectByUser.plataform}</small>
            </section>
            <section className="col-3 col-md-1 bg-success rounded d-grid p-2 card-languages">
                <small>{languageSelectByUser.releaseYear}</small>
            </section>
        </div>
    )
}

export default LanguageCard
