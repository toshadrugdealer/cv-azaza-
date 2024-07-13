import { useParams } from "react-router-dom";
import { BtnGithub } from "../components/btnGithub/BtnGithub";
import { PROJECT } from "../helpers/projectsList";
export function Project() {
  const { id } = useParams();
  const project = PROJECT.find((item) => item.id === +id);
  return (
    <>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>
            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />
            <div className="project-details__desc">
              <p>{project.skills}</p>
            </div>
            {project.gitHubLink && <BtnGithub link={project.gitHubLink} />}
          </div>
        </div>
      </main>
    </>
  );
}
