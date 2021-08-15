import React, { useState } from 'react'

function Planet() {
    const [url, setUrl] = useState("")

    function fetch_data() {
        fetch('https://cdn2.thecatapi.com/images/lm.jp').then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error('Requst Failed')
        }, networkError => console.log(networkError)
        ).then(jsonRes => {
            setUrl(jsonRes[0].url)
        })
    }

    return (
        <div className="cat_main">
            <img src={url} className="cat_img" />
            <button className="cat_btn">Generate</button>
        </div>
    )
}

export default Planet
