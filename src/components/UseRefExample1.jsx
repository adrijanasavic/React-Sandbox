import { useRef } from 'react'

function UseRefExample() {
    const inputRef = useRef()
    const paraRaf = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value);
        inputRef.current.value = 'Hello'
        inputRef.current.style.backgroundColor = 'red'
        paraRaf.current.innerText = 'Goodbay'
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    ref={inputRef}
                    id='name'
                    className='form-control mb-2'
                />
                <button type='submit' className="btn btn-primary">
                    Submit
                </button>
                <p onClick={() => inputRef.current.focus()} ref={paraRaf}>Hello</p>
            </form>
        </div>
    )
}

export default UseRefExample