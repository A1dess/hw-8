import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Title from "../../components/Title"
import { ContentOne, ContentTwo } from "../../components/content"




function  MainPage(){
    return(
        <>
        <Title title="Main page component "/>

        <Header/>
        <ContentOne/>
        <ContentTwo/>
        <Footer/>
        </>
    )
}

export default MainPage;