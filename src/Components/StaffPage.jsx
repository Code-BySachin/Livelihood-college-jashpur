import './Staff.css'
import Staff from "./Staff";
function StaffPage() {
    return (
        <div className="staff-page">
            <section>
                <h1>Admin</h1>
                <Staff />
            </section>
            <section>
                <h1>Trainer</h1>
                <Staff />
            </section>

        </div>
    )
}
export default StaffPage;