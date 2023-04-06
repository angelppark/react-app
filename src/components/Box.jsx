import {name, sayName} from '../modules/MyModules';

function Box() {

    const result = sayName("둘리");

    return (
        <>
            <div className='box'>
                <p>box</p>
                <p>{name}</p>
                <p>{result}</p>
            </div>
        </>
    )

}

export default Box;