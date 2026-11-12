// Edit this file to update profile, project copy, research, skills and experience.
// No live API requests are needed to display the portfolio.
export const profile = {
  name: 'Syed Qaiser Abbas Bukhari',
  shortName: 'Qaiser Bukhari',
  initials: 'QB',
  title: 'Machine Learning Engineer',
  specialisations: ['LLMs', 'Natural Language Processing', 'Computer Vision'],
  location: 'Bahawalpur, Pakistan',
  email: 'syeqaiser485@gmail.com',
  github: 'https://github.com/syed14125',
  linkedin: 'https://linkedin.com/in/syed-qasir-abbas-bukhari-95190b248',
  cv: '/documents/syed-qaiser-abbas-bukhari-cv.pdf',
  introduction: 'AI/ML developer, final-semester MPhil Artificial Intelligence researcher and NLP instructor. I work across computer vision, natural language processing, retrieval-augmented generation, local language models and brain-imaging machine learning.',
};

export const categories = ['All projects', 'LLMs & RAG', 'Computer Vision', 'NLP', 'AI Agents'] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Exclude<Category, 'All projects'>;
  technologies: string[];
  repository?: string;
  status?: string;
  image: string;
  imageAlt: string;
  summary: string;
  tagline: string;
  featured: boolean;
  overview: string;
  problem: string;
  capabilities: string[];
  approach: { title: string; description: string }[];
  boundary: string;
};

export const projects: Project[] = [
  {
    slug: 'local-rag-research-paper-assistant',
    title: 'Local RAG Research Paper Assistant',
    category: 'LLMs & RAG',
    technologies: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Ollama'],
    repository: 'https://github.com/syed14125/local-rag-research-paper-assistant',
    image: '/artwork/rag.webp',
    imageAlt: 'Concept artwork of illuminated research passages connected to a glass question mark',
    summary: 'Context-aware answers from research PDFs, powered by retrieval and local language models.',
    tagline: 'A closer connection between questions and research.',
    featured: true,
    overview: 'A PDF question-answering application that uses retrieval-augmented generation and local language models to respond with context from research papers.',
    problem: 'Finding a specific idea in a collection of research papers can interrupt the reading process. This project provides a question-answering workflow centred on the material in those documents.',
    capabilities: ['Question answering over research PDFs.', 'Document retrieval to provide relevant context for responses.', 'Local language models within a Streamlit application.'],
    approach: [
      { title: 'Application layer', description: 'The supplied implementation stack uses Python and Streamlit for the application, with LangChain, FAISS and Ollama supporting the RAG workflow.' },
      { title: 'Retrieval, explained', description: 'In a typical RAG system, a retrieval stage selects passages relevant to a question. FAISS supports similarity search, while LangChain offers tools for connecting retrieval and language-model steps. These describe the roles of the listed tools, rather than unverified code-level configuration.' },
      { title: 'Local generation', description: 'Ollama provides a local language-model runtime. Retrieved document context helps ground the answer; this does not by itself guarantee factual correctness.' },
    ],
    boundary: 'No citation feature, document limit, response-speed benchmark or accuracy result is claimed. The artwork illustrates the concept and is not an application screenshot.',
  },
  {
    slug: 'ai-resume-job-matcher',
    title: 'AI Resume & Job Matcher',
    category: 'NLP',
    technologies: ['Python', 'Streamlit', 'NLP'],
    repository: 'https://github.com/syed14125/ai-resume-job-matcher',
    image: '/artwork/resume.webp',
    imageAlt: 'Concept artwork of a resume and job description linked by illuminated matching passages',
    summary: 'Resume-to-role comparison with keyword matching, skill gaps and AI career suggestions.',
    tagline: 'Make the gap between experience and opportunity clearer.',
    featured: false,
    overview: 'A resume and job-description matching application with ATS-style scoring, keyword matching, skill-gap analysis and AI career suggestions.',
    problem: 'Candidates need a clear way to compare what a role asks for with what their resume communicates. The application helps surface shared keywords and missing skills so users can understand where to improve.',
    capabilities: ['Compare a resume with a job description.', 'Generate an ATS-style matching assessment.', 'Identify matching keywords and missing skills.', 'Provide AI career suggestions.'],
    approach: [
      { title: 'Text comparison', description: 'The project applies NLP to resume and job-description text. Specific parsing methods, model providers and scoring formulas are not asserted.' },
      { title: 'Application interface', description: 'Python supports the application logic and Streamlit provides its user interface.' },
      { title: 'Actionable interpretation', description: 'Keyword matching and skill-gap analysis help users reflect on their resume. Users should only add skills and experience they actually possess.' },
    ],
    boundary: 'ATS-style scoring is an application-generated assessment. It does not reproduce every employer’s ATS, guarantee hiring outcomes or establish a candidate’s suitability on its own.',
  },
  {
    slug: 'brain-tumor-detection',
    title: 'Brain Tumor Detection & Classification',
    category: 'Computer Vision',
    technologies: ['PyTorch', 'CNNs', 'Grad-CAM', 'Streamlit'],
    repository: 'https://github.com/syed14125/brain-tumor-detection',
    image: '/artwork/brain.webp',
    imageAlt: 'Abstract blue glass brain with an illustrative mint and gold attention glow; not an MRI scan',
    summary: 'Four-class MRI image classification with Grad-CAM visualisations and a Streamlit interface.',
    tagline: 'Inspecting image predictions with explainable vision.',
    featured: true,
    overview: 'An educational and research project for four-class MRI image classification, combining convolutional neural networks with Grad-CAM visualisations and a Streamlit application interface.',
    problem: 'Image classification produces a prediction, but understanding which image regions influence that prediction is another challenge. The project pairs classification with an attention visualisation for model inspection.',
    capabilities: ['Four-class MRI image classification.', 'CNN-based modelling using PyTorch.', 'Grad-CAM visualisations for inspecting model attention.', 'A Streamlit application interface.'],
    approach: [
      { title: 'Image classification', description: 'Convolutional neural networks learn spatial features from images. PyTorch is the listed deep-learning framework; no specific network architecture, dataset or class names are claimed.' },
      { title: 'Model inspection', description: 'Grad-CAM highlights regions associated with a model’s prediction. It is a tool for inspecting model behaviour, not proof that the model reasons correctly.' },
      { title: 'Application interface', description: 'Streamlit presents the classification project through an application interface. The cover artwork is conceptual and does not show the running application.' },
    ],
    boundary: 'Educational/research project only. No clinical validation or diagnostic suitability is claimed. The 0.778 research result elsewhere on this portfolio belongs to separate fMRI stress-response research, not this model.',
  },
  {
    slug: 'fake-news-detection',
    title: 'Fake News Detection',
    category: 'NLP',
    technologies: ['NLP', 'Machine Learning', 'Jupyter Notebook'],
    repository: 'https://github.com/syed14125/fake-news-detection',
    image: '/artwork/news.webp',
    imageAlt: 'Concept artwork of news articles flowing through a text-analysis prism into a classification token',
    summary: 'A notebook-based text-classification project exploring NLP and machine learning for news content.',
    tagline: 'Exploring patterns in news through text classification.',
    featured: false,
    overview: 'A text-classification project applying natural language processing and machine learning to fake-news detection in a Jupyter Notebook workflow.',
    problem: 'News text can contain patterns that a machine-learning classifier can analyse. This project explores that classification task through a notebook, while keeping the distinction between predicting a label and verifying a claim clear.',
    capabilities: ['NLP and machine-learning text classification for fake-news detection.', 'A Jupyter Notebook project format.'],
    approach: [
      { title: 'NLP representation', description: 'NLP helps represent and analyse text for a classification task. The specific representation, preprocessing steps and algorithms are not specified in the verified description.' },
      { title: 'Notebook workflow', description: 'The repository presents the project through a notebook workflow. No deployed app, dataset or evaluation result is claimed.' },
    ],
    boundary: 'A classification prediction is not independent fact verification. This project should not be represented as a tool that establishes whether any individual news claim is true.',
  },
  {
    slug: 'plant-diseases-detection',
    title: 'Plant Diseases Detection',
    category: 'Computer Vision',
    technologies: ['Jupyter Notebook'],
    repository: 'https://github.com/syed14125/plant-diseases-detection',
    image: '/artwork/plant.webp',
    imageAlt: 'Concept artwork of a leaf framed by a subtle image-analysis motif',
    summary: 'A plant disease detection project presented through a Jupyter Notebook repository.',
    tagline: 'An exploration of plant disease detection.',
    featured: false,
    overview: 'A plant disease detection project presented in a Jupyter Notebook repository.',
    problem: 'The project explores the task of detecting plant disease. Its public presentation here is deliberately limited to the supplied, verified repository description.',
    capabilities: ['A repository containing a Jupyter Notebook plant disease detection project.'],
    approach: [
      { title: 'Notebook-based project', description: 'Jupyter Notebook is the confirmed project format. Repository inspection was unavailable while preparing this portfolio, so architecture, libraries, plant species, datasets and supported disease categories are not specified.' },
    ],
    boundary: 'No deployed application, agricultural outcomes or performance metrics are claimed. The leaf artwork is an illustration of the topic, not a sample prediction or dataset image.',
  },
  {
    slug: 'jobpilot',
    title: 'JobPilot — AI Job-Hunting Agent',
    category: 'AI Agents',
    technologies: ['Python', 'Ollama', 'Anaconda'],
    status: 'In development',
    image: '/artwork/jobpilot.webp',
    imageAlt: 'Concept artwork of a glass compass, opportunity cards and a local AI assistant orb',
    summary: 'A local AI agent in development for discovering jobs and freelance projects and preparing applications.',
    tagline: 'Exploring a local AI companion for the job search.',
    featured: true,
    overview: 'JobPilot is a local AI agent being developed to find jobs and freelance projects and prepare applications using a local language model.',
    problem: 'Finding relevant opportunities and preparing applications involves repeated reading and writing. JobPilot’s intended purpose is to support this workflow through a local AI approach.',
    capabilities: ['Development work on a local AI job-hunting agent.', 'A project stack of Python, Ollama and an Anaconda environment.'],
    approach: [
      { title: 'Intended capabilities', description: 'The development goal is to help find jobs and freelance projects and prepare application material. These are intended capabilities, not a claim of reliable completed automation.' },
      { title: 'Local AI approach', description: 'Ollama is the listed runtime for a local language model, Python is the programming language and Anaconda provides the development environment.' },
      { title: 'Current status', description: 'In development. No verified public repository URL has been supplied, so this page has no repository button.' },
    ],
    boundary: 'No reliable autonomous applications, CAPTCHA bypass, successful platform integrations or employment results are claimed. The artwork is a concept illustration of the intended workflow.',
  },
];

export const research = {
  role: 'MPhil Researcher — Artificial Intelligence',
  institution: 'The Islamia University of Bahawalpur',
  dates: '2026–Present',
  topic: 'Using Functional Magnetic Resonance Imaging (fMRI) to Identify Neural Correlates of Human Stress Responses.',
  supervisor: 'Dr. Amna Ashraf',
  description: 'Investigating brain-state patterns through brain-imaging machine learning, with careful attention to evaluation and interpretation.',
  metrics: [
    { value: '90', label: 'Participants' },
    { value: '426', label: 'Connectivity regions' },
    { value: '0.778', label: 'Mean paired accuracy', note: 'Within-person brain-state decoding' },
  ],
  methods: ['Leakage-free and nested validation', 'FDR correction', 'Network-level virtual-lesion analysis'],
  other: [
    { title: 'Urdu question answering', text: 'Work on RAG hallucination reduction for Urdu question answering.' },
    { title: 'Handwritten text recognition', text: 'Literature analysis related to struck-out handwritten text recognition.' },
  ],
};

export const skillGroups = [
  { title: 'Programming & data', icon: 'code', skills: ['Python', 'NumPy', 'pandas', 'Jupyter Notebook'] },
  { title: 'Machine learning', icon: 'chart', skills: ['Regression', 'SVM', 'SVR', 'Random Forest', 'PCA', 'Ensemble methods', 'Model evaluation', 'Nested cross-validation'] },
  { title: 'Deep learning & vision', icon: 'brain', skills: ['PyTorch', 'CNNs', 'MLPs', 'Graph convolutional networks', 'Transformers', 'OpenCV', 'Grad-CAM'] },
  { title: 'NLP & generative AI', icon: 'sparkles', skills: ['Text classification', 'RAG', 'LLMs', 'Hugging Face', 'LangChain', 'FAISS', 'Ollama'] },
  { title: 'Applications & tools', icon: 'layers', skills: ['Streamlit', 'Django', 'Anaconda', 'Kaggle GPU Notebooks'] },
];

export const experience = [
  { title: 'MPhil Researcher in Artificial Intelligence', organisation: 'The Islamia University of Bahawalpur', dates: '2026–Present', text: 'Brain-imaging machine learning research, with work on reliable evaluation and interpretation of brain-network contributions.' },
  { title: 'Instructor — Natural Language Processing', organisation: 'Undergraduate teaching', text: 'Teaching undergraduate Natural Language Processing and preparing course lectures and learning materials.' },
  { title: 'AI Trainer', organisation: 'AI Training Hub · Bahawalpur', text: 'Delivering practical AI training and developing a programme covering AI fundamentals through agent development.' },
];

export const education = [
  { degree: 'MPhil Artificial Intelligence', institution: 'The Islamia University of Bahawalpur', status: 'In progress · Final semester' },
  { degree: 'BS Artificial Intelligence', institution: 'The Islamia University of Bahawalpur', status: '2020–2024' },
];
