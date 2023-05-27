import React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className = "experience">
      <VerticalTimeline lineColor="#3e497a"> 
        <VerticalTimelineElement className="vertical-timeline-element--work"
        date="2021-2021"
        iconStyle={{background: "#3E8E45", color: "fff"}}
        icon={<WorkIcon/>}>
        <h3 className="vertical-timeline-element-title">
            The Data Mine - Purdue University
        </h3>
        <p>As part of the Data Mine department in Purdue, I participated to a partnership with Viasat. My scope was to pretrain the simCLR model and try to optimize its accuracy by finding a correlation with epochs and temperature.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--work"
        date="2021-2021"
        iconStyle={{background: "#3E8E45", color: "fff"}}
        icon={<WorkIcon/>}>
        <h3 className="vertical-timeline-element-title">
            Kromeon | Software Developer Intern
        </h3>
        <p>Was placed to work on an app named TrueGrade where it scanned collectable baseball cards and would determine the grade and value of the card based on a picture.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2021-2025"
        iconStyle={{background: "#3e497a", color: "fff"}}
        icon={<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title">
            Purdue University
        </h3>
        <p>Major: Computer Science Pursuing a minor in math</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2017-2021"
        iconStyle={{background: "#3e497a", color: "fff"}}
        icon={<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title">
            WestView High School
        </h3>
        <p>High School Diploma</p>
        </VerticalTimelineElement>

        
    </VerticalTimeline> 
    </div>
  );
}

export default Experience
