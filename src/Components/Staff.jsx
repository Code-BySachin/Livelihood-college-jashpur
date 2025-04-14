import staffData from "./StaffData";
import './Staff.css'

const Staff = () => {
  return (
    
      <div className="staff-list">
        {staffData.map((staff) => (
          <div key={staff.id} className="staff-card">
            <img src={staff.image} alt={staff.name} className="staff-img" />
            <h3>{staff.name}</h3>
            <p className="role">{staff.role}</p>
            <p>{staff.description}</p>
          </div>
        ))}
      </div>
  );
};

export default Staff;