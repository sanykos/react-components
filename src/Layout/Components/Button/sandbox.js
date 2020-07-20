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
        <h2>Btn dataname</h2>
        <hr/>
        <Button data-name="Button" onClick={()=> console.log('!!!')}>Btn text</Button>
        <h2>Btn type</h2>
        <hr/>
        <Button type="submit" onClick={()=> console.log('!!!')}>Btn text</Button>
        <h2>Btn link</h2>
        <hr/>
        <Button href="text" onClick={()=> console.log('!!!')}>Btn text</Button>
        <Button href="text" onClick={()=> console.log('!!!')} disabled>Btn text</Button>
    </Fragment>


)


export default SandBox