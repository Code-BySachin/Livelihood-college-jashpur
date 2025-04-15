import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import UpdateCourses from "./components/UpdateCourses";
import UpdateFaculties from "./components/UpdateFaculties";
import UpdateCarousel from "./components/UpdateCarousel";
import UpdateLatest from "./components/UpdateLatest";
import UpdateSchemes from "./components/UpdateSchemes";
import UpdateFaqs from "./components/UpdateFaqs";
import UpdateAdmission from "./components/UpdateAdmission";
// Import the rest...
function App(){
  return(

    <BrowserRouter>
  <Routes>
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/admin/updatelatest" element={<UpdateLatest />} />
    <Route path="/admin/updatecarousel" element={<UpdateCarousel />} />
    <Route path="/admin/updatecourses" element={<UpdateCourses />} />
    <Route path="/admin/updateadmission" element={<UpdateAdmission />} />
    <Route path="/admin/updateschemes" element={<UpdateSchemes />} />
    <Route path="/admin/updatefaculties" element={<UpdateFaculties />} />
    <Route path="/admin/updatefaqs" element={<UpdateFaqs />} />
    {/* Add other admin routes here */}
  </Routes>
</BrowserRouter>
  )
}
export default App;
