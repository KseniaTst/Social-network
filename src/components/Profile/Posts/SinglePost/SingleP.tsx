import sP from './SingleP.module.css'

type SinglePType={
    message:string
    value:number
}

export const SingleP = (props:SinglePType) => {
    return (
        <div >
            <div className={sP.post}>
            <img className={sP.i} src='https://sputnik.kg/img/101808/12/1018081237_1488:0:4629:3455_1920x0_80_0_0_36b9c41458690f8543f8ce86421ba380.jpg'/>
                {props.message}

            </div>
            <div className={sP.likes}>
                likes {props.value}
            </div>
        </div>)
}