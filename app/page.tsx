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
    <>
      {/* <head>
        <meta property="og:title" content="Product Name | Buy Now" />
        <meta
          property="og:description"
          content="High-quality product at the best price. Buy now and get free shipping!"
        />
        <meta property="og:image" content="https://yourwebsite.com/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/product" />
        <meta property="og:type" content="website" />
      </head> */}
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
          <div className="flex flex-col gap-4 lg:flex-row">
            <Map />
            <MyHobbies />
            <MyQuote />
          </div>
          <Footer />
        </Wrapper>
      </div>
    </>
  );
}
