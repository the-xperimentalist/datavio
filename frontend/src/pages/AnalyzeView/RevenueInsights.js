
import { Typography, Button } from "antd"

const { Title } = Typography


// Revenue prediction graphs
// Currently locked
function RevenueInsights (props) {
    return (
        <div id="revenue">
          <Title level={2}>Revenue Insights</Title>
          <Title level={4}>Get the revenue predictions for the listing, and how the revenues vary with the changes in listing price over a period of time.</Title>
          <Title level={5}>We are developing the feature right now. However, you can sign up so that we can let you know once it is completed</Title>
          <Button
            type="primary"
            onClick={props.showModal}
          >Notify Me</Button>
        </div>)
}

export default RevenueInsights
