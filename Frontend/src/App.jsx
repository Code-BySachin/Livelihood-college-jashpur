import Home from "./Components/Home"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Admission from "./Components/Admission";
// import AboutUS from "./Components/AboutUs";
import Contact from "./Components/Contact";
import AdmissionForm from "./Components/AdmissionForm";
import Course from "./Components/Course";
import StaffPage from "./Components/StaffPage";
import { BrowserRouter, Routes, Route } from 'react-router'
import Faqs from "./Components/Faqs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admission/apply" element={<AdmissionForm />} />
        <Route path="/faculties" element={<StaffPage />} />
        <Route path="schemes/course" element={<Course />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
