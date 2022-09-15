import React from 'react'
import '../styles/LanguageCard.css'

const LanguageCard = ({ languageToSearch }) => {
    const validate = () => {}

    return (
        <div className="d-flex col-11 mt-5 gap-2 mx-auto scroll">
            <section className="col-3 col-md-1 my-auto">
                <img src={languageToSearch.img} style={{ width: '50px' }} />
            </section>
            <section className="col-3 col-md-1 bg-coincidence rounded d-grid p-2 card-languages">
                {languageToSearch.typed?.map((type) => (
                    <div key={type}>
                        <small>{type}</small>
                    </div>
                ))}
            </section>
            <section className="col-3 col-md-1 bg-wrong rounded d-grid p-2 card-languages">
                <small>{languageToSearch.license}</small>
            </section>
            <section className="col-3 col-md-1 bg-coincidence-1 rounded d-grid p-2 card-languages">
                <small>{languageToSearch.level}</small>
            </section>
            <section className="col-3 col-md-2 bg-coincidence-2 rounded d-grid p-2 card-languages">
                {languageToSearch.paradigms?.map((paradigm) => (
                    <div key={paradigm}>
                        <small>{paradigm}</small>
                    </div>
                ))}
            </section>
            <section className="col-5 col-md-2 bg-coincidence-3 rounded d-grid p-2 card-languages">
                {languageToSearch.uses?.map((use) => (
                    <div key={use}>
                        <small>{use}</small>
                    </div>
                ))}
            </section>
            <section className="col-4 col-md-2 bg-success rounded d-grid p-2 card-languages">
                <small>{languageToSearch.plataform}</small>
            </section>
            <section className="col-3 col-md-1 bg-success rounded d-grid p-2 card-languages">
                <small>{languageToSearch.releaseYear}</small>
            </section>
        </div>
    )
}

export default LanguageCard
