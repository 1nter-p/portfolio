import { useEffect, useState } from "react";

import Footer from "./components/footer";
import Profile from "./components/profile";
import ProjectList from "./components/project-list";
import TechUsed from "./components/tech-used";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.github.com/users/1nter-p/repos",
      );
      const data = await response.json();

      setProjects([
        ...projects,
        ...data.map(({ name, description, html_url }) => ({
          name,
          description,
          link: html_url,
        })),
      ]);
    };
    getData();
  }, []);

  return (
    <>
      <Profile
        imgUrl="https://cdn.discordapp.com/avatars/1005756074973990922/7f81c7a89fb3f800f172f65e50df1598.png?size=256"
        name="1nterp"
        description="A 13-year-old gamer, developer, and professional procrastinator"
      />

      <TechUsed />
      <ProjectList projects={projects} />
      <Footer />
    </>
  );
}
