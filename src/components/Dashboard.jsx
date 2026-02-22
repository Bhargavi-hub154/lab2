import Header from "./Header";
import UserCard from "./UserCard";  

function Dashboard() {
  const user = {
    name: "Bhargavi",
    email: "bhargavi@gmail.com",
    role: "Student",
    phone: "+91 9876543210",
    location: "Andhra Pradesh",
    course: "BTech CSE (AI & ML)",
    joined: "2025",
    status: "Active",
    about: "Passionate about AI and building real-world projects. yes true",
    skills: ["HTML", "CSS", "Professional in JavaScript", "React", "Master in Java"]
  };

  return (
    <div>
      <Header title="User Dashboard" />
      <UserCard user={user} />
    </div>
  );
}

export default Dashboard;
