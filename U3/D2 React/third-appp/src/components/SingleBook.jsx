import { Component } from "react";
import { Col, Card, Badge } from "react-bootstrap";



class SingleBook extends Component {
  state = {
    selected: false

  }


  render() {
    const { fantasy } = this.props;

   return (
     <>
       <Col xs={12} className="m-2">
         <Card
           className={
             this.state.selected ? "border border-danger border border-5" : null
           }
           onClick={() => this.setState({ selected: !this.state.selected })}
         >
           <Card.Img src={fantasy.img} alt="Card image" />
           <Card.ImgOverlay className="d-flex flex-column align-items-baseline">
             <Card.Title
               className="justify-content-center"
               style={{ color: "#ff8cbc" }}
             >
               {fantasy.title}
             </Card.Title>
             <Badge
               bg="dark"
               className="fs-5 border border-3 border-success mb-3"
             >
               <Card.Text className="text-success">{fantasy.price} €</Card.Text>
             </Badge>
             <Badge bg="dark" className="fs-5 border border-3 border-danger">
               <Card.Text
                 className="text-uppercase fs-4"
                 style={{ color: "#ff8cbc" }}
               >
                 {fantasy.category}
               </Card.Text>
             </Badge>
           </Card.ImgOverlay>
         </Card>
       </Col>
     </>
   );
};
};


export default SingleBook