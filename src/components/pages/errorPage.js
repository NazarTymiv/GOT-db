import React from "react"

export default class errorPage extends React.Component {
    render() {
        return (
            <div className="errorPage">
                <h1 className="title">404</h1>
                <p className="message">Page not found</p>
            </div>
        )
    }
}