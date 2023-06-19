import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import pro1_accord from "../assets/pro/Projects/Accord.png";
import pro2_inko from "../assets/pro/Projects/Inko.png";
import pro3_saraat786 from "../assets/pro/Projects/Saraat 786.png";
import pro4_potfolio from "../assets/pro/Projects/Portfolio.png";
import pro5_productdesigning from "../assets/pro/Projects/Product Designing.png";
import pro6_pixcapuichange from "../assets/pro/Projects/pixcap ui.png";
import pro7_creativedesigning from "../assets/pro/Projects/Creative Designing.png";

import art1_blackboardinpeace from "../assets/pro/3D Arts/Blackboard in Peace.png";
import art2_cake from "../assets/pro/3D Arts/Cake.png";
import art3_cabackyardland from "../assets/pro/3D Arts/Concept Art Backyard Landscaping.png";
import art4_emptyhallway from "../assets/pro/3D Arts/Empty hallway.png";
import art5_flyingjet from "../assets/pro/3D Arts/Flying Jet.png";
import art6_ghoststories from "../assets/pro/3D Arts/Ghost Stories.png";
import art7_junglephone from "../assets/pro/3D Arts/Jungle Phone 1.png";
import art8_realisticview from "../assets/pro/3D Arts/Relaistic View.png";
import art9_scifipillars from "../assets/pro/3D Arts/SciFi Pillars.png";
import art10_scifiwriting from "../assets/pro/3D Arts/SciFi Writting.png";
import art11_chair from "../assets/pro/3D Arts/chair.jpg";
import art12_kitchen from "../assets/pro/3D Arts/kitchen.png";
import art13_p1 from "../assets/pro/3D Arts/p1.png";
import art14_p2 from "../assets/pro/3D Arts/p2.png";

import yt_intro from "../assets/pro/Youtube Thumbnails/intro.png";
import yt_ep1 from "../assets/pro/Youtube Thumbnails/ep1.png";
import yt_kc1 from "../assets/pro/Youtube Thumbnails/kc1.png";


export const Projects = () => {

  const projects = [
    {
      title: "Accord - Design Collaborative Tool",
      description: "Collaborative designing web based application uses React, Firebase, Syncfusion, and more",
      imgUrl: pro1_accord,
    },
    {
      title: "Inko - Income Expense Tracker",
      description: "Windows Application to track income and expenses uses C# and .NET framework",
      imgUrl: pro2_inko,
    },
    {
      title: "Saraat 786 - An Islamic E-Learning Platform",
      description: "Android Application to learn Islamic Studies uses Java and Firebase",
      imgUrl: pro3_saraat786,
    },
    {
      title: "My Portfolio Website",
      description: "Web based portfolio website uses React, Bootstrap, and more",
      imgUrl: pro4_potfolio,
    },
    {
      title: "Product Designing",
      description: "Product designing and product retouching using Adobe Photoshop",
      imgUrl: pro5_productdesigning,
    },
    {
      title: "Ui/Ux Designing",
      description: "Updated the UI of Pixcap app using Figma",
      imgUrl: pro6_pixcapuichange,
    },
    {
      title: "Creative Designing",
      description: "Creative designing using Adobe Photoshop, Illustaor, xd, figma, and more. I made posters, thumbnails, logos, banners, cards, certificates, and more",
      imgUrl: pro7_creativedesigning,
    },
  ];

  const arts = [
    {
      title: "Blackboard at Peaceful Place",
      description: "",
      imgUrl: art1_blackboardinpeace,
    },
    {
      title: "Lowpoly Cake",
      description: "",
      imgUrl: art2_cake,
    },
    {
      title: "Backyard View (Concept Art)",
      description: "Animation video was also made",
      imgUrl: art3_cabackyardland,
    },
    {
      title: "Empty Hallway",
      description: "Animation video was also made",
      imgUrl: art4_emptyhallway,
    },
    {
      title: "Flying Jet",
      description: "Animation video was also made",
      imgUrl: art5_flyingjet,
    },
    {
      title: "Flying ghosts",
      description: "",
      imgUrl: art6_ghoststories,
    },
    {
      title: "Jungle coming out of screen (Concept Art)",
      description: "",
      imgUrl: art7_junglephone,
    },
    {
      title: "Beautiful Environment",
      description: "",
      imgUrl: art8_realisticview,
    },
    {
      title: "Sci-fi style pillars",
      description: "Animation video was also made",
      imgUrl: art9_scifipillars,
    },
    {
      title: "Sci-fi Style ",
      description: "Animation video was also made",
      imgUrl: art10_scifiwriting,
    },
    {
      title: "Realistic Chair",
      description: "",
      imgUrl: art11_chair,
    },
    {
      title: "Kitchen Concept",
      description: "",
      imgUrl: art12_kitchen,
    },
    {
      title: "Lowpoly Building",
      description: "Animation video was also made",
      imgUrl: art13_p1,
    },
    {
      title: "Lowpoly street with electric stations",
      description: "Animation video was also made",
      imgUrl: art14_p2,
    },
  ];

  const youtube = [
    {
      title: "Karaoke Challange 1",
      description: "Watch video: https://www.youtube.com/watch?v=9cwt0eppAkU",
      imgUrl: yt_kc1,
    },
    {
      title: "Podcast | Episode 1",
      description: "Discussion about Cyclone: https://www.youtube.com/watch?v=aqmyCpF_q4c&t=21s",
      imgUrl: yt_ep1,
    },
    {
      title: "Intro Video",
      description: "Cursiosity Updated intro: https://www.youtube.com/watch?v=sPTTcZy1INU",
      imgUrl: yt_intro,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am a multi-talented creative professional, showcasing my diverse range of projects encompassing web development, UI/UX design, 3D art, and engaging YouTube videos. From crafting visually stunning interfaces to pushing the boundaries of imagination in the realm of 3D, I invite you to join me on a creative journey that encompasses the best of design, development, and captivating storytelling.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">3D Arts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Youtube</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Showcasing innovative solutions through code, design, and user-centric experiences.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Unleashing imagination with stunning visual creations in the realm of 3D.</p>
                      <Row>
                        {
                          arts.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Embarking on a creative journey, sharing insights and captivating stories through engaging videos.</p>
                      <Row>
                        {
                          youtube.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
