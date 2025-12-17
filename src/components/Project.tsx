import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock11 from '../assets/images/mock11.png';
import mock14 from '../assets/images/mock14.png';
import mock13 from '../assets/images/mock13.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://code-spark-25.vercel.app/" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://code-spark-25.vercel.app/" target="_blank" rel="noreferrer"><h2>NeuroNodes-Prompt-Driven Automation</h2></a>
                <p>Developed a multi-agent AI automation platform with a custom MCP server, integrating LLMs, web scraping, and deep research workflows for dynamic task execution</p>
            </div>
            <div className="project">
                <a href="https://github.com/lakshmanmandapati/PKLot_System_OpenCV" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/lakshmanmandapati/PKLot_System_OpenCV" target="_blank" rel="noreferrer"><h2>PKLoT Management System</h2></a>
                <p>Built a smart parking lot management system for vehicle entry, slot allocation, and real-time parking status tracking.</p>
            </div>
            <div className="project">
                <a href="https://github.com/lakshmanmandapati/jetson_adas" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/lakshmanmandapati/jetson_adas" target="_blank" rel="noreferrer"><h2>Driver Monitoring System (ADAS Modules)</h2></a>
                <p>Built a real-time driver monitoring system combining MediaPipe and YOLO to detect drowsiness, gaze, and phone usage with intelligent alert mechanisms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/lakshmanmandapati/LLaMa3-Implementation" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/lakshmanmandapati/LLaMa3-Implementation" target="_blank" rel="noreferrer"><h2>Llama 3 — From Scratch Implementation</h2></a>
                <p>Built Llama 3 from scratch using PyTorch, implementing core Transformer components and validating inference with official model weights.</p>
            </div>
            <div className="project">
                <a href="https://lakshmanmandapati.github.io/lm-notion/" target="_blank" rel="noreferrer"><img src={mock13} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lakshmanmandapati.github.io/lm-notion/" target="_blank" rel="noreferrer"><h2>LM’s Notion-Note Taker Platform</h2></a>
                <p>Developed an LLM-powered Notion note-taking platform that converts user input into structured, organized notes automatically.</p>
            </div>
            <div className="project">
                <a href="https://github.com/lakshmanmandapati/Archtek" target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/lakshmanmandapati/Archtek" target="_blank" rel="noreferrer"><h2>ArchTek — Architecture Generator</h2></a>
                <p>Created a prompt-driven platform that generates system workflows and architecture diagrams from natural-language inputs.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;