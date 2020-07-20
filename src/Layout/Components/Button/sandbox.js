import React, {Fragment} from 'react'
import Button from './Button'


const SandBox = () => (

    <Fragment>
        <h2>Btn on click</h2>
        <hr/>
        <Button onClick={()=> console.log('!!!')}></Button>
        <h2>Btn disabled</h2>
        <hr/>
        <Button onClick={()=> console.log('!!!')} disabled>Btn text</Button>
    </Fragment>


)


export default SandBox