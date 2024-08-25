export const DataSwitch = [
  {
    id: "git_switch_branch",
    title: "Cambiar de rama",
    description:
      "Cambia entre ramas en tu repositorio. Utiliza este comando para moverte entre ramas de desarrollo o características diferentes.",
    code: "git switch <nameBranch>",
    img: "/switch/git_switch_branch.png",
    roles: ["switch"],
    emoji: "🌿",
  },
  {
    id: "git_switch_create",
    title: "Crear y cambiar a una nueva rama",
    description:
      "Crea una nueva rama y cambia a ella en un solo paso. Esto es útil para comenzar a trabajar en una nueva característica o corrección inmediatamente.",
    code: "git switch -c <nameBranch>",
    img: "/switch/git_switch.png",
    roles: ["switch"],
    emoji: "🌿",
  },
  {
    id: "git_switch_existing",
    title: "Cambiar a una rama existente",
    description:
      "Cambia a una rama existente en tu repositorio. Utiliza este comando para moverte entre ramas ya creadas.",
    code: "git switch <nameBranch>",
    img: "/switch/git_switch.png",
    roles: ["switch"],
    emoji: "🌿",
  },
  {
    id: "git_switch_detach",
    title: "Cambiar a un commit específico (modo detach)",
    description:
      "Cambia a un commit específico en modo detached HEAD. Esto es útil para explorar el historial o probar cambios sin afectar las ramas actuales.",
    code: "git switch --detach <commit-hash>",
    img: "/switch/git_switch.png",
    roles: ["switch"],
    emoji: "🌿",
  },
  {
    id: "git_switch_branchexisting",
    title: "Cambiar a una rama existente (verificación)",
    description:
      "Cambia a una rama existente y verifica su existencia antes de cambiar. Esto es útil para asegurarse de que la rama está disponible en el repositorio.",
    code: "git switch --verify <nameBranch>",
    img: "/switch/git_switch.png",
    roles: ["switch"],
    emoji: "🌿",
  },
  {
    id: "git_switch_abort",
    title: "Abortar el cambio de rama",
    description:
      "Si has iniciado un cambio de rama pero deseas cancelar, utiliza este comando para abortar el cambio y regresar a la rama anterior.",
    code: "git switch --abort",
    img: "/switch/git_switch.png",
    roles: ["switch"],
    emoji: "🌿",
  },
  {
    id: "git_switch_force",
    title: "Forzar el cambio de rama",
    description:
      "Forza el cambio a una rama, incluso si hay cambios no confirmados en el directorio de trabajo. Úsalo con precaución para evitar la pérdida de trabajo.",
    code: "git switch --force <nameBranch>",
    img: "/switch/git_switch.png",
    roles: ["switch"],
    emoji: "🌿",
  },
  {
    id: "git_switch_no_track",
    title: "Cambiar a una rama sin seguimiento",
    description:
      "Cambia a una rama sin establecer seguimiento para la rama remota correspondiente. Esto es útil si no deseas que la rama local esté vinculada a una rama remota.",
    code: "git switch --no-track <nameBranch>",
    img: "/switch/git_switch.png",
    roles: ["switch"],
    emoji: "🌿",
  },
  {
    id: "git_switch_list",
    title: "Listar ramas al cambiar",
    description:
      "Lista las ramas disponibles al cambiar entre ellas. Esto te permite ver una lista de ramas mientras realizas el cambio.",
    code: "git switch --list",
    img: "/switch/git_switch.png",
    roles: ["switch"],
    emoji: "🌿",
  },
];
