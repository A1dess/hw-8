


function ContactPage () {
    function sayHello() {
        alert ("hello world")
    }

    function doubleClick (){
        alert(5 + 5)
    }

    function changeInput (event) {
        console.log(event.target.value);
    }

    function checkboxChange (event){
        console.log(event.target.checked);
    }
    function inputOnBlur (event){
        console.log(event.target.value);
    }

    function onSubmit (event){
        event.preventDefault()
        console.log("user created");
    }

    function onReset (event){
        event.preventDefault()
        console.log("cancel");
    }
    return(
        <>
            <h1>обработки событий</h1>
            <form onSubmit={onSubmit} onReset={onReset}>
                <input type="text" placegolder="name"></input>
                <input type="text" placegolder="age"></input>
                <button type="submit">add user</button>
                <button type="reset">cancel</button>
            </form>

            {/* <div>
                <input type="text" onChange={changeInput} placegolder="onChange"></input>
                <input type="text" placegolder="onBlur" onBlur={inputOnBlur}></input>
                <label>
                    <input type="checkbox" onChange={checkboxChange}></input>
                    выбрат
                </label>
                <button onClick={sayHello}> say hello</button>
                <button onDoubleClick={doubleClick}>double click</button>
            </div> */}
        </>
    )
    
}
export default ContactPage;