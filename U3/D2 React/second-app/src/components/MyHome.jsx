import { Component } from "react";
import {
  Container,
} from "react-bootstrap";


import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import AllTheBooks from "./AllTheBooks";

class MyHome extends Component {

    state = {

        selectedBook: null
    }

    render() {
        return (
          <Container
            fluid
            className="px-0"
            style={{
              minHeight: "100vh",
              backgroundImage: `url("https://konachan.net/image/fea124cb3a0579a9b0700e3a9731b398/Konachan.com%20-%20352222%20bou_nin%20building%20city%20clouds%20original%20polychromatic%20scenic%20sky.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Container fluid className="px-0">
              <MyNav />
            </Container>
            {/*MI SECCAVO CREARE UN ALTRO COMPONENT*/}
            <Container
              className="p-3 my-5 border border-3"
              style={{ maxHeight: "300px", backgroundColor: "#c29ec7" }}
            >
              <h1>Welcome in my personal Library</h1>
              <p>checkout some books on our page</p>
              <hr className="my-3 px-3"></hr>
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
            </Container>

            <Container>
              <AllTheBooks />
            </Container>

            <Container fluid className="px-0 mb-3">
              <MyFooter />
            </Container>
          </Container>
        );

    }


}



export default MyHome;
