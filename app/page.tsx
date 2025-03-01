import {
  Connect,
  Experience,
  Hero,
  Header,
  Map,
  PersonalProjects,
  OpenToWork,
  Wrapper,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="p-4">
      <Wrapper>
        <Header />
        <Hero />
        <OpenToWork />
        <Connect />
        <div className="flex flex-col gap-4 lg:flex-row">
          <Experience />
          <PersonalProjects />
        </div>
        <Map />
        <Footer />
      </Wrapper>
    </div>
  );
}
