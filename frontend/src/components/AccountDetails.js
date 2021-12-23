
import Container from "react-bootstrap/esm/Container";
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useEffect } from "react";
import interactionActions from "../redux/actions/interactionActions";

function AccountDetails(props){

    let loggedUser = props.user ? props.user : { _id:"", image:"", name:''}

    let commentsForUser = props.comments.filter(comment=> comment.user[0]._id === loggedUser._id)
    console.log(props.comments)

    return(

        <Container>
            <Card className="d-flex flex-row">
  <Card.Img variant="top" src={loggedUser.image} className="account-image-portrait" />
  <Card.Body>
    <Card.Title>Hello, {loggedUser.name}!</Card.Title>
    <Card.Text>
      Here you can view your account details.
    </Card.Text>
  </Card.Body>
</Card>
<div>
    <h3>Comments</h3>
    {commentsForUser.map(comment=><p>{comment.message}</p>)}
</div>

            {/* <p>este es el usuario</p>
            <p>{props.user.name}</p>

            <p>y estos son sus coments</p>
            {commentsForUser.map(comment=><p>{comment.message}</p>)} */}
        </Container>
        
    )
}

const mapStateToProps = (state)=>{

    return{
        user : state.authReducer.response,
        comments : state.itinerariesReducer.comments
    }
}

const mapDispatchToProps ={
    getComments : interactionActions.getCommentsByItineraryId
}

export default connect(mapStateToProps)(AccountDetails)