import React from "react";
import { useEffect } from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Aos from "aos";
import "aos/dist/aos.css";

//projects
import L_WeatherApp from "../../assets/img/projects/weather_app.png";
import L_Expenseemitracker from "../../assets/img/projects/expense-emi-tracker.png";
import L_ImageSearch from "../../assets/img/projects/image-search-download.png";
import L_JobsSearch from "../../assets/img/projects/Job-Search-Apply.png";
import L_Githubuserrepo from "../../assets/img/projects/githubuserrepo.webp";
import L_RandomQuoteGenerators from "../../assets/img/projects/quote_generator_app.png";
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
            text="Weather App"
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
                          <li>
                            <span data-aos="fade-up-left" className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
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
                  href="https://weathersearchreact.netlify.app/"
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
              </div>
            </div>
          </ImageEvent>

          {/* Project: Random Quote Generator*/}
          <ImageEvent
            date="18/12/2025"
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
                        <strong>Description:</strong> A modern Random Quote Generator app that provides inspiration for every mood.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Generate random quotes instantly.</li>
                          <li>Filter quotes by Category (e.g., Love, Wisdom) and Language.</li>
                          <li>Toggle between Dark and Light themes.</li>
                          <li>Copy quotes to clipboard easily.</li>
                          <li>PWA support: Installable on Mobile and PC.</li>
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
                  href="https://github.com/ajf013/random-quote-generator-react.git"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Expense Emi Tracker */}

          <ImageEvent
            date="20/12/2025"
            className="text-center"
            text="Expense Emi Tracker"
            src={L_Expenseemitracker}
            alt="expense-emi-tracker"
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
                        <strong>Description:</strong> An application designed to help users track their daily expenses and calculate EMIs for various loans efficiently.
                        <hr />
                        <strong>Features:</strong>
                        <ul data-aos="fade-up-right" className="list-styles pt-1">
                          <li>Track daily expenses with ease.</li>
                          <li>Calculate EMI for home, car, and personal loans.</li>
                          <li>User-friendly interface for financial management.</li>
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
                          <li>
                            <span data-aos="fade-up-left" className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
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
                  href="https://expenseemitracker.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ajf013/Expense-EMI-Tracker-React.git"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          
          {/* Project: Image Search and Download*/}

          <ImageEvent
            date="21/12/2025"
            className="text-center"
            text="Image Search and Download"
            src={L_ImageSearch}
            alt="Image Search and Download"
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
                        <strong>Description:</strong> A simple and intuitive web application that allows users to search for high-quality images using the Pexels API and download them directly to their devices.
                        <hr />
                        <strong>Features:</strong>
                        <ul data-aos="fade-up-right" className="list-styles pt-1">
                          <li>Keyword Search for specific images.</li>
                          <li>Dynamic Grid Layout for responsiveness.</li>
                          <li>Direct Download button for each image.</li>
                          <li>Powered by Pexels API.</li>
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
                          <li>
                            <span data-aos="fade-up-left" className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
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
                  href="https://googlepexels.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ajf013/image-search-download.git"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Jobs Search and Apply*/}

          <ImageEvent
            date="22/12/2025"
            className="text-center"
            text="Jobs Search and Apply"
            src={L_JobsSearch}
            alt="Jobs Search and Apply"
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
                        <strong>Description:</strong> A robust job search application that allows users to find and apply for jobs in India using real-time data from the Adzuna API.
                        <hr />
                        <strong>Features:</strong>
                        <ul data-aos="fade-up-right" className="list-styles pt-1">
                          <li>Search for jobs by Role and Location.</li>
                          <li>Filter results for Full-Time positions.</li>
                          <li>Dark Mode support for better UX.</li>
                          <li>Seamless Pagination and Markdown support.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span data-aos="fade-up-left" className="p-2">
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
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div data-aos="fade-up-right" className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://jobssearchandapply.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ajf013/Jobs-Search-and-Apply-React.git"
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