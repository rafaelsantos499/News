import React from 'react'

const Head = ({ title, description }) => {

    React.useEffect(() => {
        document.title = 'Code | ' + title
        document.querySelector('meta[name="description"]')
            .setAttribute('content', description)
    }, [title])

    return (
        <>        </>
    )
}

export default Head
