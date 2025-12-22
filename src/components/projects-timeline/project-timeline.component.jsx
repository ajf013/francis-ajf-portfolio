import React from "react";
import { useEffect } from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Aos from "aos";
import "aos/dist/aos.css";

//projects
import L_WeatherApp from "../../assets/img/projects/weather_app.webp";
import L_PhotoshopClone from "../../assets/img/projects/photoshop_clone.webp";
import L_Githubuserrepo from "../../assets/img/projects/githubuserrepo.webp";
import L_RandomQuoteGenerators from "../../assets/img/projects/quote_generator_app.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";

import "./project-timeline.style.css";

const ProjectTimeLine = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="projects">
      <h1 data-aos="fade-down" className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>

          {/* Project: WeatherApp */}

          <ImageEvent
            date="15/03/2021"
            className="text-center"
            text="WeatherApp"
            src={L_WeatherApp}
            alt="Weather App"
          >
            <div data-aos="fade-up" className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      data-aos="fade-up-left"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that gives the search results for weather through out the world for almost 200,00 cities.
                        <hr />
                        <strong>Features:</strong>
                        <ul data-aos="fade-up-right" className="list-styles pt-1">
                          <li>Search through all over the world.</li>
                          <li>May get weather details for almost 200,00 cities.</li>
                          <li>Backgound picture changes every time the user refresh.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span data-aos="fade-up-left" className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML 5
                            </span>
                          </li>
                          <li>
                            <span data-aos="fade-up-left" className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span data-aos="fade-up-left" className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div data-aos="fade-up-right" className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://weatherforecast-react.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ajf013/Weather-app-react"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Photoshop Clone */}
          <ImageEvent
            date="22/03/2021"
            className="text-center"
            text="Photoshop Clone"
            src={L_PhotoshopClone}
            alt="Photoshop Clone"
          >
            <div data-aos="flip-left" className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      data-aos="flip-left"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a simple Photoshop Clone using React.
                        <hr />
                        <strong>Features:</strong>
                        <ul data-aos="fade-down" className="list-styles pt-1">
                          <li>Select any pic from your local phone/computer.</li>
                          <li>Easy to use with slider</li>
                          <li>Simple basic styles for editing.</li>
                          <li>Easy to download after editing.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span data-aos="fade-down" className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span data-aos="fade-down" className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div data-aos="fade-right" className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://photoshopclonereact.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ajf013/Photoshop_Clone_React"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                {/* <UrlButton
                  href="https://www.youtube.com/watch?v=K3h95l2YxmY&feature=youtu.be"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

          {/* Project: Get GitHub User Repositories */}
          <ImageEvent
            date="31/03/2021"
            className="text-center"
            text="Get GitHub User Repo"
            src={L_Githubuserrepo}
            alt="Get GitHub User Repositories"
          >
            <div data-aos="flip-right" className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      data-aos="flip-right"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A React app that searches
                        people on GitHub with non-private account and see all
                        their details using GitHub API
                        <hr />
                        <strong>Features:</strong>
                        <ul data-aos="zoom-out" className="list-styles pt-1">
                          <li>Search any Github profile</li>
                          <li>Real-time API calls</li>
                          <li>All Repo will be listed</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span data-aos="fade-down-left" className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span data-aos="fade-down-left" className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span data-aos="fade-down-left" className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span data-aos="fade-down-left" className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div data-aos="fade-down-right" className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://githubuserrepo.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ajf013/Github_user_repo"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                {/* <UrlButton
                  href="https://www.youtube.com/watch?v=K3h95l2YxmY&feature=youtu.be"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

          {/* Project: Random Quote Generator*/}
          <ImageEvent
            date="04/05/2021"
            className="text-center"
            text="Random Quote Generator"
            src={L_RandomQuoteGenerators}
            alt="Random Quote Generator"
          >
            <div data-aos="fade-down-right" className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Random Quote Generator App.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Quotes will generated randomly and also with background colour.</li>
                          <li>Quotes can be shared to your Twitter account.</li>
                          <li>This is an installable application in Mobile Phones and PCs.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React Js"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Js
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://randomquotegeneratorapp.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ajf013/random-quote-generator-react"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeLine;