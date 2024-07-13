import "./../styles/main.css";
import { Project } from "../components/project/Project";
import { PROJECT } from "../helpers/projectsList";
export function Projects() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {PROJECT.map((project) => {
              return (
                <Project
                  id={project.id}
                  key={project.id}
                  src={project.img}
                  title={project.title}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
