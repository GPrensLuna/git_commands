export const DataFetch = [
  {
    id: "git_fetch",
    title: "Traer cambios del repositorio remoto",
    description:
      "Descarga los cambios desde el repositorio remoto sin fusionarlos automáticamente en tu rama actual. Permite revisar cambios antes de integrarlos.",
    code: "git fetch origin",
    img: "/img/git_fetch.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_all",
    title: "Traer cambios de todos los remotos",
    description:
      "Descarga los cambios de todos los repositorios remotos configurados. Es útil cuando trabajas con múltiples remotos y quieres sincronizar todos los cambios.",
    code: "git fetch --all",
    img: "/img/git_fetch_all.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_prune",
    title: "Eliminar referencias a ramas remotas que ya no existen",
    description:
      "Actualiza las referencias a ramas remotas y elimina las que ya no existen en el remoto. Mantiene tu repositorio limpio de referencias obsoletas.",
    code: "git fetch --prune",
    img: "/img/git_fetch_prune.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_tags",
    title: "Traer todas las etiquetas del repositorio remoto",
    description:
      "Descarga todas las etiquetas del repositorio remoto. Útil para obtener etiquetas de versiones y otras anotaciones.",
    code: "git fetch --tags",
    img: "/img/git_fetch_tags.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_remotes",
    title: "Traer cambios de un remoto específico",
    description:
      "Descarga los cambios desde un remoto específico, sin fusionarlos automáticamente en tu rama actual. Es útil para obtener actualizaciones de un remoto en particular.",
    code: "git fetch <remote>",
    img: "/img/git_fetch_remotes.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_update",
    title: "Actualizar las referencias de los remotos",
    description:
      "Descarga los cambios del remoto y actualiza las referencias a las ramas remotas, sin fusionar los cambios en tu rama local.",
    code: "git fetch --update-head-ok",
    img: "/img/git_fetch_update.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_no_tags",
    title: "Traer cambios sin etiquetas",
    description:
      "Descarga los cambios desde el repositorio remoto sin traer las etiquetas. Útil si solo necesitas cambios en las ramas.",
    code: "git fetch --no-tags",
    img: "/img/git_fetch_no_tags.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_refspec",
    title: "Traer cambios según refspec",
    description:
      "Descarga un conjunto específico de cambios de un remoto usando un refspec. Permite obtener solo ciertas ramas o referencias.",
    code: "git fetch <remote> <refspec>",
    img: "/img/git_fetch_refspec.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_depth",
    title: "Traer cambios con profundidad limitada",
    description:
      "Descarga una cantidad limitada de commits, solo los últimos n. Útil para obtener un historial más corto.",
    code: "git fetch --depth <n>",
    img: "/img/git_fetch_depth.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_deepen",
    title: "Ampliar el historial de commits",
    description:
      "Amplía el historial de commits descargado anteriormente, agregando hasta n commits adicionales.",
    code: "git fetch --deepen <n>",
    img: "/img/git_fetch_deepen.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_shallow_since",
    title: "Traer cambios desde una fecha específica",
    description:
      "Descarga solo los cambios desde una fecha específica, útil para obtener una historia parcial.",
    code: "git fetch --shallow-since=<date>",
    img: "/img/git_fetch_shallow_since.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch_shallow_exclude",
    title: "Excluir ciertos commits al traer cambios",
    description:
      "Excluye ciertos commits de la historia superficial al realizar la descarga.",
    code: "git fetch --shallow-exclude=<commit>",
    img: "/img/git_fetch_shallow_exclude.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
];
