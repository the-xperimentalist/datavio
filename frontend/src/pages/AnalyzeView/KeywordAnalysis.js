
import { Typography, Button } from "antd"

const { Title } = Typography


// Keyword analysis for the given url
// Currently simply a locked type info
function KeywordAnalysis (props) {
    return (
        <div id="keyword">
          <Title level={2}>Keyword Analysis</Title>
          <Title level={4}>Find the top keywords in this page, for which the listing is ranking at this point in time.</Title>
          <Title level={5}>We are developing the feature right now. However, you can sign up so that we can let you know once it is completed</Title>
          <Button
            type="primary"
            onClick={props.showModal}
          >Notify Me</Button>
        </div>)
}

export default KeywordAnalysis
