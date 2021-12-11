import React, {useState} from "react";

function App() {
    // TODO: implement logic of the calculator interface!
    let [display, setDisplay] = useState('');
    let [opClicked, setOpClicked] = useState(false);
    const addNumber = (num: string) => {
        setOpClicked(false);
        setDisplay(display += num)
    }

    const addOperator = (op: string) => {
        const newDisplay = opClicked ? display.slice(0, -1) + op : display + op
        setOpClicked(true);
        setDisplay(newDisplay)
    }


    const calculate = () => {
        setDisplay(eval(display))
    }


    return (
        <div className="calculator">
            <input data-testid="display" className="display" value={display} type="text" disabled></input>

            <div className="btn-container">
                <button data-testid="btn-clear" onClick={() => {
                    setDisplay('')
                }} className="btn wide">C
                </button>
                <button data-testid="btn-div" onClick={() => addOperator('/')} className="btn">/</button>

                <button data-testid="btn-7" onClick={() => addNumber('7')} className="btn">7</button>
                <button data-testid="btn-8" onClick={() => addNumber('8')} className="btn">8</button>
                <button data-testid="btn-9" onClick={() => addNumber('9')} className="btn">9</button>
                <button data-testid="btn-mul" onClick={() => addOperator('*')} className="btn">*</button>

                <button data-testid="btn-4" onClick={() => addNumber('4')} className="btn">4</button>
                <button data-testid="btn-5" onClick={() => addNumber('5')} className="btn">5</button>
                <button data-testid="btn-6" onClick={() => addNumber('6')} className="btn">6</button>
                <button data-testid="btn-sub" onClick={() => addOperator('-')} className="btn">-</button>

                <button data-testid="btn-1" onClick={() => addNumber('1')} className="btn">1</button>
                <button data-testid="btn-2" onClick={() => addNumber('2')} className="btn">2</button>
                <button data-testid="btn-3" onClick={() => addNumber('3')} className="btn">3</button>
                <button data-testid="btn-add" onClick={() => addOperator('+')} className="btn">+</button>

                <button data-testid="btn-0" onClick={() => addNumber('0')} className="btn wide">0</button>
                <button data-testid="btn-eval" onClick={calculate} className="btn">=</button>
            </div>
        </div>
    );
}

export default App;
