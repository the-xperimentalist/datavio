
import DocumentTitle from 'react-document-title';
import Banner from "./Banner"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"

function Home() {
  return (
    <div className="home-page">
      <DocumentTitle title="Datavio | Home" />
      <Banner key="banner" />
      <Section1 key="section1" />
      <Section2 key="section2" />
      <Section3 key="section3" />
      <Section4 key="section4" />
    </div>)
}

export default Home

