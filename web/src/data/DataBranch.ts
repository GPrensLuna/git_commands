export const DataBranch = [
  {
    id: "git_branch-m",
    title: "Cambiar nombre de rama",
    description:
      "Cambia el nombre de la rama actual a la nueva especificada. Utiliza este comando para mantener nombres de ramas organizados y significativos.",
    code: "git branch -m <nuevo-nombre>",
    img: "/branch/git_branch-m.png",
    roles: ["branch", "basic"],
    emoji: "🌿",
  },
  {
    id: "git_branch_delete",
    title: "Eliminar rama",
    description:
      "Elimina una rama del repositorio. Utiliza este comando con cuidado para evitar eliminar ramas que aún contengan cambios importantes.",
    code: "git branch -d <nombre-de-rama>",
    img: "/branch/git_branch.png",
    roles: ["branch", "basic"],
    emoji: "🌿",
  },
  {
    id: "git_branch_delete_force",
    title: "Eliminar rama forzadamente",
    description:
      "Elimina una rama del repositorio sin importar si tiene cambios no fusionados. Úsalo con precaución para evitar la pérdida de trabajo importante.",
    code: "git branch -D <nombre-de-rama>",
    img: "/branch/git_branch.png",
    roles: ["branch", "basic"],
    emoji: "🌿",
  },
  {
    id: "git_branch_remote",
    title: "Listar ramas remotas",
    description:
      "Muestra una lista de todas las ramas remotas disponibles en el repositorio. Esto te permite ver las ramas en los repositorios remotos a los que estás conectado.",
    code: "git branch -r",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
  {
    id: "git_branch_all",
    title: "Listar ramas locales y remotas",
    description:
      "Muestra una lista de todas las ramas locales y remotas en el repositorio. Esto te da una visión completa de todas las ramas disponibles en tu proyecto.",
    code: "git branch -a",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
  {
    id: "git_branch_verbose",
    title: "Ver ramas con última confirmación",
    description:
      "Muestra una lista de todas las ramas junto con la última confirmación en cada una. Esto te ayuda a identificar rápidamente el último estado de las ramas.",
    code: "git branch -v",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
  {
    id: "git_branch_verbose_verbose",
    title: "Ver ramas con información de seguimiento",
    description:
      "Muestra una lista de ramas locales junto con la información de seguimiento de cada una. Esto te ayuda a ver con qué ramas remotas están relacionadas.",
    code: "git branch -vv",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
  {
    id: "git_branch_contains",
    title: "Ver ramas que contienen un commit",
    description:
      "Muestra las ramas que contienen un commit específico. Esto es útil para encontrar en qué ramas se ha incluido un determinado cambio.",
    code: "git branch --contains <commit-id>",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
  {
    id: "git_branch_merged",
    title: "Ver ramas fusionadas",
    description:
      "Muestra las ramas que han sido fusionadas en la rama actual. Esto te ayuda a identificar ramas que ya se han integrado y pueden ser eliminadas si ya no son necesarias.",
    code: "git branch --merged",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
  {
    id: "git_branch_no_merged",
    title: "Ver ramas no fusionadas",
    description:
      "Muestra las ramas que aún no han sido fusionadas en la rama actual. Esto es útil para ver qué ramas todavía tienen cambios que no se han integrado.",
    code: "git branch --no-merged",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
  {
    id: "git_branch_show_current",
    title: "Ver rama actual",
    description:
      "Muestra solo el nombre de la rama actual. Es una forma rápida de verificar en qué rama estás trabajando en ese momento.",
    code: "git branch --show-current",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
  {
    id: "git_branch_edit_description",
    title: "Editar descripción de la rama",
    description:
      "Abre un editor para añadir o editar la descripción de la rama actual. Esto puede ser útil para agregar notas o información sobre la rama.",
    code: "git branch --edit-description",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
  {
    id: "git_branch_set_upstream",
    title: "Configurar upstream para la rama",
    description:
      "Configura la rama actual para rastrear una rama remota específica. Esto es útil para sincronizar la rama local con una rama remota.",
    code: "git branch --set-upstream-to=<rama>",
    img: "/branch/git_branch.png",
    roles: ["branch"],
    emoji: "🌿",
  },
];
