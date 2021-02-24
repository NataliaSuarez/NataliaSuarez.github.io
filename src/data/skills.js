const backend = [
  {
    data: {
      php: 0.8,
      symfony: 0.9,
      laravel: 0.7,
      java: 0.4,
      kotlin: 0.5,
      node: 0.7,
      feathers: 0.7,
      python: 0.8,
      django: 0.8,
    },
    meta: { color: "#00b92e" },
    name: "Backend",
  },
];
const backendCaptions = {
  php: "PHP",
  symfony: "Symfony",
  laravel: "Laravel",
  java: "Java",
  kotlin: "Kotlin",
  node: "Node",
  feathers: "Feathers",
  python: "Python",
  django: "Django",
};

const frontend = [
  {
    data: {
      react: 0.8,
      vue: 0.6,
      flux: 0.7,
      reactnative: 0.5,
      vuenative: 0.5,
      html: 0.95,
      javascript: 0.8,
      motores: 0.98,
    },
    meta: { class: "#01a029" },
    name: "Frontend",
  },
];
const frontendCaptions = {
  react: "React",
  vue: "Vue",
  flux: "Flux",
  reactnative: "React Native",
  vuenative: "Vue Native",
  html: "Html y CSS",
  javascript: "JS",
  motores: "Motores de html",
};

const devOps = [
  {
    data: {
      docker: 0.6,
      dokku: 0.4,
      heroku: 0.5,
      bash: 0.8,
    },
    meta: { color: "#00b92e" },
    name: "Tools",
  },
];
const devOpsCaptions = {
  docker: "Docker",
  dokku: "Dokku",
  heroku: "Heroku",
  bash: "Bash",
};

export const data = [backend, frontend, devOps];
export const captions = [backendCaptions, frontendCaptions, devOpsCaptions];
