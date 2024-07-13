import { NavLink } from "react-router-dom";
export function Project({ src, title, id }) {
  return (
    <>
      <NavLink to={`/project/${id}`}>
        <li className="project">
          <img src={src} alt="Project img" className="project__img" />
          <h3 className="project__title">{title}</h3>
        </li>
      </NavLink>
    </>
  );
}
