import NotificationBox from "./NotificationBox";
import Carousel from "./Carousel";
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer";
import Admission from "./Admission";
import AboutUS from "./AboutUs";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from 'react-router'
import AdmissionForm from "./AdmissionForm";
import Staff from "./Staff";
import Course from "./Course";
function Home() {
    return (
        <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' element={
                    <>
                        <Carousel />
                        <NotificationBox />
                    </>
                } />
                <Route path='/admission' >
                    <Route index element={<Admission />} />
                    <Route path="apply" element={<AdmissionForm/>}/>
                </Route>
                <Route path="/faculties" element={<Staff />} />
                <Route path="/course" element={<Course />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<AboutUS />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Home;