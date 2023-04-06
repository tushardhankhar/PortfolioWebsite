import React, { useState } from "react";
import "./Experience.css";
import { data } from "./ExperienceData";
import { BiRightArrow } from "react-icons/bi";

export default function Experience() {
  const [companyId, setCompanyId] = useState(1);
  return (
    <div>
      <div id="experienceHeadingContainer">
        <div id="experienceHeading">Where I've Worked</div>
        <div id="horizontalLine" />
      </div>
      <div id="experienceContainer">
        <div>
          {data.map((val) => {
            return (
              <div
                onClick={() => setCompanyId(val.id)}
                key={val.id}
                id={companyId === val.id ? "activeCompanyName" : "companyName"}
              >
                {val?.company}
              </div>
            );
          })}
        </div>
        {data
          .filter((val) => {
            return val?.id === companyId;
          })
          .map((val) => {
            return (
              <div id="companyDescriptionContainer">
                <div id="companyHeading">
                  {val.position}
                  <a
                    id="companyLink"
                    href={val.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @ {val.company}
                  </a>
                </div>
                <div style={{marginBottom : 20}}> {val.duration} </div>

                {val.description.map((val1) => {
                  return (
                    <div id="descriptionPointsContainer">
                      <div>
                        <BiRightArrow
                          color="ff5b2e"
                          width={200}
                          style={{ paddingTop: 4 }}
                        />
                      </div>
                      <li id="descriptionPoints">{val1}</li>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}
