export const DataCheckout = [
  {
    id: "git_checkout",
    title: "Cambiar entre commits o ramas",
    description:
      "Permite navegar entre commits, ramas o etiquetas específicas. Útil para revisar el estado del proyecto en diferentes puntos en el tiempo.",
    code: "git checkout <branch_name>\ngit checkout <commit_hash>",
    img: "/img/git_checkout_commits.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_file",
    title: "Restaurar un archivo específico",
    description:
      "Permite restaurar un archivo específico al estado del último commit. Útil para descartar cambios no deseados en un archivo.",
    code: "git checkout -- <file_path>",
    img: "/img/git_checkout_file.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_branch",
    title: "Crear y cambiar a una nueva rama",
    description:
      "Permite crear una nueva rama y cambiar a ella en un solo paso. Esto es útil para comenzar a trabajar en una nueva característica o corrección.",
    code: "git checkout -b <new_branch_name>",
    img: "/img/git_checkout_branch.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_tag",
    title: "Cambiar a una etiqueta específica",
    description:
      "Permite cambiar al estado del proyecto en una etiqueta específica. Esto es útil para revisar versiones o puntos de referencia específicos en el historial.",
    code: "git checkout <tag_name>",
    img: "/img/git_checkout_tag.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_detached",
    title: "Cambiar a un estado 'detached HEAD'",
    description:
      "Permite cambiar a un commit específico sin mover la rama actual. Esto es útil para explorar el estado de un commit sin cambiar el estado de las ramas.",
    code: "git checkout <commit_hash>",
    img: "/img/git_checkout_detached.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_force",
    title: "Forzar cambio de rama",
    description:
      "Permite cambiar a una rama y descartar cambios no confirmados en el área de trabajo. Útil si deseas cambiar de rama y perder los cambios actuales.",
    code: "git checkout -f <branch_name>",
    img: "/img/git_checkout_force.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_orphan",
    title: "Crear una rama huérfana",
    description:
      "Crea una nueva rama sin historial, comenzando con un árbol vacío. Esto es útil para iniciar un nuevo historial de commits desde cero.",
    code: "git checkout --orphan <new_branch_name>",
    img: "/img/git_checkout_orphan.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_merge",
    title: "Cambiar de rama durante un merge",
    description:
      "Permite cambiar a una rama mientras se realiza un merge. Si hay conflictos, te permite resolverlos antes de continuar con el cambio de rama.",
    code: "git checkout --merge <branch_name>",
    img: "/img/git_checkout_merge.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_ours",
    title: "Aceptar los cambios actuales durante un merge",
    description:
      "Durante un conflicto de merge, usa esta opción para aceptar los cambios en la rama actual en lugar de los cambios en la rama fusionada.",
    code: "git checkout --ours <file_path>",
    img: "/img/git_checkout_ours.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_theirs",
    title: "Aceptar los cambios fusionados durante un merge",
    description:
      "Durante un conflicto de merge, usa esta opción para aceptar los cambios en la rama fusionada en lugar de los cambios en la rama actual.",
    code: "git checkout --theirs <file_path>",
    img: "/img/git_checkout_theirs.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_b",
    title: "Forzar la creación de una rama",
    description:
      "Forzar la creación de una rama, reemplazando una rama existente si ya existe. Esto es útil para reiniciar una rama desde un punto específico en el historial.",
    code: "git checkout -B <branch_name> <start_point>",
    img: "/img/git_checkout_b.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_checkout_track",
    title: "Crear y rastrear una nueva rama remota",
    description:
      "Crea una nueva rama que rastrea una rama remota. Esto es útil para configurar el seguimiento de ramas remotas en tu repositorio local.",
    code: "git checkout --track <remote>/<branch_name>",
    img: "/img/git_checkout_track.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
];
