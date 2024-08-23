import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import codingMoney from "../../Assets/Projects/coding_money_chat.png";
import aiGemini from "../../Assets/Projects/ai_gemini.png";
import newsApp from "../../Assets/Projects/news_app.png";
import aiImageGenerator from "../../Assets/Projects/ai_image.png";
import aiKeywordExtracter from "../../Assets/Projects/ai_keyword_extracter.png";

import wildfireTracking from "../../Assets/Projects/wildfire_app.png";
import videoWebRtc from "../../Assets/Projects/video_chat_webrtc.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoWebRtc}
              isBlog={false}
              title="WebRTC Video Chat App"
              description="Built a cutting-edge video chat app with WebRTC's SDP, ICE, and DTLS protocols for low-latency streaming. Used PeerJS for robust connections and React JS with Material UI for a responsive frontend. Optimized Node JS server with Express, Cors, and Nodemon for real-time data exchange."
              ghLink="https://github.com/KishoreKelam/Video-chat-app-webRTC"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wildfireTracking}
              isBlog={false}
              title="NASA Wildfire Tracker"
              description="Developed a real-time Wildfire Tracker leveraging NASA's Open API (EONET) for accurate event data. Utilized Google Maps React to plot dynamic markers, each comprising a custom component with location and info details. Integrated Iconify library for visually appealing icons. Built on Google Cloud Platform (GCP) for efficient management and scalability."
              ghLink="https://github.com/KishoreKelam/Nasa-wildfire-tracker"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsApp}
              isBlog={false}
              title="News App"
              description="Crafted a sleek and responsive News App with React JS, harnessing its virtual DOM for lightning-fast rendering. Paired with Bootstrap for a visually stunning UI, leveraging its grid system and components for a seamless user experience. Implemented a robust news aggregator, fetching and displaying real-time updates from diverse sources."
              ghLink="https://github.com/KishoreKelam/News-App"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingMoney}
              isBlog={false}
              title="Coding Money Chat Bot"
              description="Built a groundbreaking, browser-based AI chatbot using Vertex AI or Google AI Studio, empowering users to experiment with conversational prompts and customize knowledge contexts for tailored interactions. This innovative prototype, Coding Money AI Chatbot, harnesses the power of generative AI to revolutionize human-computer interactions."
              ghLink="https://github.com/KishoreKelam/Coding-money-chatBot"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiImageGenerator}
              isBlog={false}
              title="Ai Image Generator"
              description="Developed an innovative AI Image Generator leveraging Open AI's powerful DALL-E-3 API and React JS. Users can input a text description and click a button to generate a stunning image instantly. Utilized useRef() to create a direct reference to the DOM element, enabling seamless interaction. This cutting-edge application showcases the potential of AI-generated art."
              ghLink="https://github.com/KishoreKelam/AI-Image-Generator"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiKeywordExtracter}
              isBlog={false}
              title="AI Keyword Extractor"
              description="Built a cutting-edge AI Keyword Extractor using React and Chakra UI, harnessing the power of Open AI's Completions API. This innovative tool extracts crucial keywords from text data, empowering users to uncover hidden insights and patterns. Customizable prompts allow for tailored results, making it a game-changer for data analysis and research. Experience the future of text analysis with AI Keyword Extractor."
              ghLink="https://github.com/KishoreKelam/Ai-chatGpt-keyword-extracter"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiGemini}
              isBlog={false}
              title="Ai Chat APP with Gemini models"
              description="Developed a groundbreaking AI Chat App leveraging React JS and Google Gemini API, powered by the cutting-edge technology of Gemini model. This innovative application redefines the boundaries of human-computer interaction, enabling users to engage in intelligent conversations with a sophisticated AI model. Experience the future of chatbots with AI Chat App."
              ghLink="https://github.com/KishoreKelam/AI-Chat-app-Gemini"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
