"use client";
import React, { FC, memo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { timelineData } from "./dummyData";
import { WorkIcon, SchoolIcon } from "@/app/icons";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

// css
import variables from "@/app/utils.module.scss";
import "react-vertical-timeline-component/style.min.css";
import styles from "./timeline.module.scss";

const TimelineElement: FC<any> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 650,
  });
  return (
    <VerticalTimelineElement
      visible={inView}
      className={classNames(item?.classes, styles?.dataContent)}
      contentStyle={{ background: variables?.grey }}
      contentArrowStyle={{ borderRight: `7px solid  ${variables?.grey}` }}
      date={item?.date}
      iconStyle={{
        background: variables?.black,
        color: variables?.white,
      }}
      icon={item?.isWork ? <WorkIcon /> : <SchoolIcon />}>
      <div ref={ref}>
        <h3 className="vertical-timeline-element-title">{item?.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item?.subtitle}</h4>
        <p>{item?.details}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const TimeLine = () => {
  return (
    <section className={styles.timelineWrapper}>
      <h2 className={styles.title}>Work Experience & Education</h2>
      <p className={styles.subtitle}>My previous jobs and my qualifications.</p>
      <VerticalTimeline lineColor="" animate={true}>
        {timelineData.map((item, index) => (
          <TimelineElement item={item} key={`VerticalTimeline${index}`} />
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default memo(TimeLine);
