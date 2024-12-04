import { Divider, Flex, Tag } from "antd";



export default function About() {
  return (
    <section id="about">
      <div className="about-me-container">
        <div className="about-left-side">
          <h2>About Me</h2>
          <p>
            I am a passionate front-end developer with a strong foundation in
            HTML, CSS, and JavaScript. I'm always eager to learn new
            technologies and work on challenging projects.
          </p>
        </div>
        <div className="resume-right-side">
          <h2>Resume</h2>
          <div className="resume">
            <h3>Experience</h3>
            {/* do the year on the left and horizontal divider then the job title and desc */}
          </div>
          <h3>Education</h3>
          {/* do the year on the left and horizontal divider then the education title and desc */}
        </div>
        {/* as another column, i would have my coding skills */}
        <div className="container">
          <Flex gap="4px 0" wrap>
            <Tag bordered={false} color="processing">
              HTML
            </Tag>
            <Tag bordered={false} color="success">
              CSS
            </Tag>
            <Tag bordered={false} color="error">
              Javascript
            </Tag>
            <Tag bordered={false} color="warning">
              React
            </Tag>
            <Tag bordered={false} color="magenta">
              PHP
            </Tag>
            <Tag bordered={false} color="red">
              Laravel
            </Tag>
            <Tag bordered={false} color="volcano">
              MySQL
            </Tag>
            <Tag bordered={false} color="orange">
              Figma
            </Tag>
            <Tag bordered={false} color="gold">
              Mockups
            </Tag>
            <Tag bordered={false} color="lime">
              Trello
            </Tag>
          </Flex>
        </div>
      </div>
    </section>
  );
}
