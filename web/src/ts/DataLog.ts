export const DataLog = [
  {
    id: "git_log",
    title: "Ver historial de commits",
    description:
      "Muestra el historial completo de commits en el repositorio, incluyendo mensajes, autores y fechas de los commits realizados.",
    code: "git log",
    img: "/img/git_log.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_p",
    title: "Ver los cambios en los últimos commits",
    description:
      "Muestra los cambios realizados en los últimos commits, incluyendo las diferencias entre versiones. Ayuda a revisar el historial reciente del proyecto.",
    code: "git log -p",
    img: "/img/git_log_p.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_oneline",
    title: "Ver historial de commits en una sola línea",
    description:
      "Muestra el historial de commits en un formato compacto, con una sola línea por commit. Esto facilita una vista rápida del historial del proyecto.",
    code: "git log --oneline",
    img: "/img/git_log_oneline.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_graph",
    title: "Ver historial de commits con gráfico",
    description:
      "Muestra el historial de commits con un gráfico visual que representa la estructura de ramas y merges, facilitando la comprensión de la historia del proyecto.",
    code: "git log --graph",
    img: "/img/git_log_graph.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_graph_oneline",
    title: "Ver historial de commits con gráfico y formato compacto",
    description:
      "Muestra el historial de commits en formato compacto junto con un gráfico visual que representa la estructura de ramas y merges.",
    code: "git log --graph --oneline",
    img: "/img/git_log_graph_oneline.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_graph_decorate",
    title: "Ver historial de commits con gráfico y decoraciones",
    description:
      "Muestra el historial de commits con un gráfico visual, decoraciones y nombres de ramas y etiquetas para una mejor comprensión del historial del proyecto.",
    code: "git log --graph --decorate",
    img: "/img/git_log_graph_decorate.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_all",
    title: "Ver historial de commits completo con gráfico",
    description:
      "Muestra el historial de commits para todas las ramas en el repositorio, incluyendo un gráfico que representa la estructura de ramas y merges.",
    code: "git log --graph --decorate --all --oneline",
    img: "/img/git_log_all.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_since",
    title: "Ver commits desde una fecha específica",
    description:
      "Muestra los commits realizados desde una fecha específica. Esto es útil para revisar el historial reciente desde un punto temporal determinado.",
    code: "git log --since=<date>",
    img: "/img/git_log_since.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_until",
    title: "Ver commits hasta una fecha específica",
    description:
      "Muestra los commits realizados hasta una fecha específica. Esto es útil para revisar el historial hasta un punto en el tiempo.",
    code: "git log --until=<date>",
    img: "/img/git_log_until.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_author",
    title: "Ver commits de un autor específico",
    description:
      "Muestra los commits realizados por un autor específico. Esto es útil para revisar los cambios hechos por un contribuyente en particular.",
    code: "git log --author=<author_name>",
    img: "/img/git_log_author.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_grep",
    title: "Filtrar commits por mensaje",
    description:
      "Filtra los commits que contienen un mensaje específico. Esto es útil para buscar commits relacionados con un término específico.",
    code: "git log --grep=<search_term>",
    img: "/img/git_log_grep.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_abbrev_commit",
    title: "Ver identificadores de commit abreviados",
    description:
      "Muestra los identificadores de commit abreviados. Esto proporciona una vista más compacta del historial de commits.",
    code: "git log --abbrev-commit",
    img: "/img/git_log_abbrev_commit.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
  {
    id: "git_log_pretty",
    title: "Personalizar el formato de salida",
    description:
      "Permite personalizar el formato de salida del historial de commits. Esto es útil para ajustar la presentación de los commits.",
    code: "git log --pretty=<format>",
    img: "/img/git_log_pretty.png",
    roles: ["personal", "stark"],
    emoji: "📜",
  },
];
