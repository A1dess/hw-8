import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Title from "../../components/Title"

import AboutContent from '../../components/AboutContent'


function AboutPage (){
   
    return (
        <div className="ss">
            <Title title="About"/>
                
            <Header/>
            <AboutContent text='cscs;cs' title='HELLO'/>
            <Footer/>
        </div>
    )
}

export default AboutPage;