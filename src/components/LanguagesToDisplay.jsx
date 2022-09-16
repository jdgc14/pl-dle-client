import React from 'react'

const LanguagesToDisplay = ({ programmingLanguages }) => {
    return (
        <div className="">
            <div className="d-flex flex-wrap justify-content-center p-5 bg-white bg-opacity-25">
                {programmingLanguages.map((language) => (
                    <div
                        key={language.name}
                        className="col-4 col-md-2 my-4 text-center"
                        style={{
                            display: 'grid',
                            placeContent: 'center',
                        }}
                    >
                        <img
                            src={language.img}
                            style={{
                                width: '70px',
                                height: '80px',
                                objectFit: 'contain',
                            }}
                        />
                        <h6 className="mt-2">{language.name}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LanguagesToDisplay
