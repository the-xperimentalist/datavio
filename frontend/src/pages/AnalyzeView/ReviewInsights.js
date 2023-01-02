
import { Typography } from "antd"

const { Title } = Typography


// Review and faq insights
// Unique apis for this. Task and otherwise
function Summary (props) {
    return (
        <div id="reviews">
          <Title level={2}>Review Insights</Title>
          {props.reviewsFetched ? (
          <div>Reviews fetched</div>) : (
          <div>Please wait we are fetching reviews</div>)}
        </div>)
}

export default Summary
