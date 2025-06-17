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
  MyHobbies,
  MyQuote,
} from "@/components";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <OpenToWork />
      <Connect />
      <div className="flex flex-col gap-4 lg:flex-row">
        <Experience />
        <PersonalProjects />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Map />
        <MyHobbies />
        <MyQuote />
      </div>
      <Footer />
    </Wrapper>
  );
}
