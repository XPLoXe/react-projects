import NewProject from "./components/NewProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  return (
    <main className="flex h-screen gap-8 my-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
