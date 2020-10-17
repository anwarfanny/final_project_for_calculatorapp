import React from "react"


const Input = (props) => {
    const {isi} = props
    return (
        <div type="text" className="input" value={ !isi ? "0": isi} >{isi}</div>
    )
}
export default Input