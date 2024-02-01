import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { education, experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <>
    <div className="about-main">
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Priya Dharshini
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-white'>
        <p>
        Ambitious Front-End Developer Intern excited to share my love of designing aesthetically beautiful and intuitive user experiences. Equipped with a strong base in HTML, CSS, and JavaScript, I am eager to put my abilities to use in a fast-paced workplace. looking for a chance to develop, learn, and work on creative projects.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-white'>
          <p>
            I've worked as an Front-End Developer Intern, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div>
      <h3 className='subhead-text'>EDUCATION</h3>
      <div className='mt-12 flex'>
          <VerticalTimeline>
            {education.map((education, index) => (
              <VerticalTimelineElement
                key={education.collage_name}
                date={education.date}
                iconStyle={{ background: education.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={education.icon}
                      alt={education.collage_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: education.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {education.title}
                  </h3>
                  <p
                    className='text-black font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {education.collage_name}
                  </p>
                </div>
                <div>
                  <p>percentage: {education.percentage}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
    </div>
    </>
  );
};

export default About;
