import React, {Fragment} from 'react'
import ImageCheckBox from "./ImageCheckBox";

export default function Main(props) {
    return (
        <Fragment>
            <p>Hello Gator</p>
            <h4>Select your lifestyle requirements</h4>
            <ImageCheckBox {...props} />
        </Fragment>
    )
}
