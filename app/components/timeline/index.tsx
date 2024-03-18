"use client";
import React, { FC, memo } from "react";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styles from "./timeline.module.scss";
import { timelineData } from "./dummyData";
import { WorkIcon, SchoolIcon } from "@/app/icons";
import classNames from "classnames";
import variables from "@/app/utils.module.scss";

const TimeLine: FC = () => {
  return (
    <section className={styles.timelineWrapper}>
      <h2 className={styles.title}>Work Experience & Education</h2>
      <p className={styles.subtitle}>My previous jobs and my qualifications.</p>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            visible={true}
            className={classNames(item?.classes, styles?.dataContent)}
            date={item?.date}
            contentStyle={{ background: variables?.grey }}
            iconStyle={{
              background: variables?.black,
              color: variables?.white,
            }}
            icon={item?.isWork ? <WorkIcon /> : <SchoolIcon />}
            contentArrowStyle={{ borderRight: `7px solid  ${variables?.grey}` }}
            key={`TimelineElement_${index}`}>
            <h3 className="vertical-timeline-element-title">{item?.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item?.subtitle}
            </h4>
            <p>{item?.details}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default memo(TimeLine);
