import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Team from "./pages/Team.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";

const App = () => {
    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="team" element={<Team />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="projectsDetail" element={<ProjectDetails />} />
                    <Route path="taskDetails" element={<TaskDetails />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
