



function AboutContent (props) {
    console.log(props);

    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.text}</p>       
        </>
    )
}
export default AboutContent