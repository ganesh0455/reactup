import { Component } from "react";
import TabItem from "../TabItem";
import ProjectItem from "../ProjectItem";

const tabsList = [
  { tabId: "STATIC", displayText: "Static" },
  { tabId: "RESPONSIVE", displayText: "Responsive" },
  { tabId: "DYNAMIC", displayText: "Dynamic" },
];

const projectsList = [
  {
    projectId: 0,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s3-img.png",
    title: "Music Page",
    description:
      "The music page enables the users to browse through the images of all-time favorite music albums.",
  },
  {
    projectId: 1,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    title: "Tourism Website",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
  },
  {
    projectId: 2,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s1-img.png",
    title: "Advanced Technologies",
    description:
      "A website that gives you a basic understanding of Advanced Technologies.",
  },
  {
    projectId: 3,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s2-img.png",
    title: "Happy Meals",
    description: "Discover the best foods in over 1,000 restaurants.",
  },
  {
    projectId: 4,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r4-img.png",
    title: "VR Website",
    description:
      "VR Website enables users to explore AR and VR Products and Industry happenings.",
  },
  {
    projectId: 5,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    title: "Food Munch",
    description: "Food Much Website is a user-centric food tech website.",
  },
  {
    projectId: 6,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r3-img.png",
    title: "Portfolio",
    description:
      "A portfolio is the best alternative for a resume to showcase your skills to the digital world.",
  },
  {
    projectId: 7,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r1-img.png",
    title: "Design",
    description:
      "A website to showcase the best features and give more information about the Design tool.",
  },
  {
    projectId: 8,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d3-img.png",
    title: "Speed Typing Test",
    description:
      "Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.",
  },
  {
    projectId: 9,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d1-img.png",
    title: "Random Joke Page",
    description:
      "Random Joke Page is an API-based dynamic Web Application that generates a new joke.",
  },
  {
    projectId: 10,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d2-img.png",
    title: "Sizing An Image",
    description:
      "This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.",
  },
];

class ProjectItemDetails extends Component {
  state = {
    activeTabId: tabsList[2].tabId,
  };

  updateActiveTabId = (tabId) => {
    this.setState({ activeTabId: tabId });
  };

  getFilteredProjects = () => {
    const { activeTabId } = this.state;
    const filteredProjects = projectsList.filter(
      (eachProject) => eachProject.category === activeTabId
    );
    // console.log(filteredProjects);
    return filteredProjects;
  };

  render() {
    const { activeTabId } = this.state;
    const filteredProjects = this.getFilteredProjects();
    return (
      <div>
        <ul className="tabs-container">
          {tabsList.map((tabDetails) => {
            return (
              <TabItem
                key={tabDetails.tabId}
                tabDetails={tabDetails}
                updateActiveTabId={this.updateActiveTabId}
                isActive={activeTabId === tabDetails.tabId}
              />
            );
          })}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map((projectDetails) => {
            return (
              <ProjectItem
                key={projectDetails.projectId}
                projectDetails={projectDetails}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProjectItemDetails;
