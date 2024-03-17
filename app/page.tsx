import TechStack from "./components/techStack";
import AboutMe from "./components/aboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <AboutMe />
      <TechStack />
    </main>
  );
}
