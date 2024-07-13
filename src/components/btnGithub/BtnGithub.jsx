import githubIcon from "./gitHub-black.svg";
export function BtnGithub({ link }) {
  return (
    <>
      <a href={link} target="_blank" className="btn-outline">
        <img src={githubIcon} alt="" />
        GitHub repo
      </a>
    </>
  );
}
