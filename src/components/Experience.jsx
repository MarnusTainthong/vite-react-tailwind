import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "../data/example";
import "react-vertical-timeline-component/style.min.css";

const ExTimeline = (item) => {
  const { data } = item;
  console.log(data);
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date="2011 - present"
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title">{data.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        {data.company_name}
      </h4>

      <ul>
        {data.points.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
        {experiences.map((e, index) => {
          return <ExTimeline key={index} data={e} />;
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
