import React from 'react'
import '../styles/CongratulationsPage.css'

const CongratulationsPage = () => {
    return (
        <div>
            <h3 className="title">
                <span className="title-word title-word-1">Con</span>
                <span className="title-word title-word-2">gra</span>
                <span className="title-word title-word-3">tula</span>
                <span className="title-word title-word-4">tions!</span>
            </h3>
            <div className="col-6 mx-auto fw-bold">
                <small>
                    To any sugestion/correction data please send a email to:
                    pldle.jdgc14@gmail.com. This is a first version, more
                    funcionality is comming!🥳🥳 <br />
                    Don't forget to visit{' '}
                    <a href="https://pybaq.co/" className="link-python">
                        Python Barranquilla page 💛💙
                    </a>
                </small>
            </div>
        </div>
    )
}

export default CongratulationsPage
