export const DataStatus = [
  {
    id: "git_status",
    title: "Ver estado",
    description:
      "Muestra el estado actual del repositorio local, incluyendo cambios no confirmados, archivos en el área de staging y cambios en el índice.",
    code: "git status",
    img: "/status/git_status.png",
    roles: ["status"],
    emoji: "📋",
  },
  {
    id: "git_status_short",
    title: "Ver estado (abreviado)",
    description:
      "Muestra un resumen más corto del estado del repositorio, incluyendo solo los cambios no confirmados y el área de staging.",
    code: "git status -s",
    img: "/status/git_status_short.png",
    roles: ["status"],
    emoji: "📋",
  },
  {
    id: "git_status_p",
    title: "Ver estado con detalles de parcheo",
    description:
      "Muestra el estado del repositorio con detalles adicionales sobre los cambios que se pueden añadir al área de staging.",
    code: "git status -p",
    img: "/status/git_status_patch.png",
    roles: ["status"],
    emoji: "📋",
  },
  {
    id: "git_status_untracked",
    title: "Ver archivos no rastreados",
    description:
      "Muestra solo los archivos no rastreados en el repositorio. Útil para identificar archivos que aún no están bajo control de versiones.",
    code: "git status --untracked-files",
    img: "/status/git_status_untracked.png",
    roles: ["status"],
    emoji: "📋",
  },
  {
    id: "git_status_ignored",
    title: "Ver archivos ignorados",
    description:
      "Muestra archivos que están siendo ignorados según las reglas de `.gitignore`. Esto ayuda a verificar qué archivos están siendo excluidos del control de versiones.",
    code: "git status --ignored",
    img: "/status/git_status_ignored.png",
    roles: ["status"],
    emoji: "📋",
  },
  {
    id: "git_status_uno",
    title: "Ver estado (sin archivos modificados)",
    description:
      "Muestra el estado del repositorio sin mostrar los archivos modificados que no están en el área de staging. Esto es útil si solo quieres ver los cambios que están listos para ser confirmados.",
    code: "git status -uno",
    img: "/status/git_status_uno.png",
    roles: ["status"],
    emoji: "📋",
  },
  {
    id: "git_status_branch",
    title: "Ver estado con información de rama",
    description:
      "Muestra el estado del repositorio con información adicional sobre la rama actual y su relación con la rama remota. Esto es útil para ver el estado de la rama y si está adelantada o atrasada respecto a la rama remota.",
    code: "git status -b",
    img: "/status/git_status_branch.png",
    roles: ["status"],
    emoji: "📋",
  },
  {
    id: "git_status_z",
    title: "Ver estado con salida separada por nulos",
    description:
      "Muestra el estado del repositorio con la salida separada por nul caracteres en lugar de saltos de línea. Esto es útil para procesar la salida del comando `git status` con herramientas de análisis de texto.",
    code: "git status -z",
    img: "/status/git_status_z.png",
    roles: ["status"],
    emoji: "📋",
  },
  {
    id: "git_status_porcelain",
    title: "Ver estado (formato porcelana)",
    description:
      "Muestra el estado del repositorio en un formato estable y más fácil de analizar por scripts. Es útil para herramientas y scripts que necesitan procesar la salida del estado del repositorio.",
    code: "git status --porcelain",
    img: "/status/git_status_porcelain.png",
    roles: ["status"],
    emoji: "📋",
  },
];
