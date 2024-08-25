export const DataMerge = [
  {
    id: "git_merge",
    title: "Fusionar ramas",
    description:
      "Combina los cambios de una rama con otra. Este comando es útil para integrar los cambios realizados en ramas de características a la rama principal.",
    code: "git merge <NameBranch>",
    img: "/img/git_merge.png",
    roles: ["personal", "stark"],
    emoji: "🔀",
  },
  {
    id: "git_merge_no_ff",
    title: "Fusionar ramas sin fast-forward",
    description:
      "Fusiona una rama en la rama actual sin permitir el avance rápido. Esto crea un nuevo commit de fusión incluso si la fusión podría haberse hecho con un avance rápido.",
    code: "git merge --no-ff <NameBranch>",
    img: "/img/git_merge_no_ff.png",
    roles: ["personal", "stark"],
    emoji: "🔀",
  },
  {
    id: "git_merge_squash",
    title: "Fusionar con squash",
    description:
      "Combina todos los commits de una rama en un solo commit al fusionarla en la rama actual. Útil para simplificar el historial antes de la fusión.",
    code: "git merge --squash <NameBranch>",
    img: "/img/git_merge_squash.png",
    roles: ["personal", "stark"],
    emoji: "🔀",
  },
  {
    id: "git_merge_ab",
    title: "Fusionar con estrategia de resolución de conflictos",
    description:
      "Fusiona dos ramas especificando una estrategia para resolver conflictos. Puede ser útil cuando se enfrentan conflictos complejos.",
    code: "git merge -s <strategy> <NameBranch>",
    img: "/img/git_merge_strategy.png",
    roles: ["personal", "stark"],
    emoji: "🔀",
  },
  {
    id: "git_merge_commit",
    title: "Fusionar con mensaje de commit personalizado",
    description:
      "Fusiona una rama en la rama actual y proporciona un mensaje de commit personalizado para el commit de fusión.",
    code: "git merge <NameBranch> -m 'Mensaje de commit personalizado'",
    img: "/img/git_merge_commit.png",
    roles: ["personal", "stark"],
    emoji: "🔀",
  },
  {
    id: "git_merge_abort",
    title: "Abortar fusión en conflicto",
    description:
      "Aborta una fusión que está en conflicto y devuelve el repositorio al estado anterior a la fusión.",
    code: "git merge --abort",
    img: "/img/git_merge_abort.png",
    roles: ["personal", "stark"],
    emoji: "🔀",
  },
  {
    id: "git_merge_edit",
    title: "Editar mensaje de commit de fusión",
    description:
      "Permite editar el mensaje del commit de fusión antes de completarla. Esto es útil si deseas proporcionar un mensaje más descriptivo o detallado.",
    code: "git merge <NameBranch> --edit",
    img: "/img/git_merge_edit.png",
    roles: ["personal", "stark"],
    emoji: "✏️",
  },
  {
    id: "git_merge_strategy_option",
    title: "Especificar opciones para la estrategia de fusión",
    description:
      "Especifica opciones adicionales para la estrategia de fusión seleccionada. Utiliza este comando para ajustar el comportamiento de la estrategia de fusión.",
    code: "git merge --strategy-option=<option> <NameBranch>",
    img: "/img/git_merge_strategy_option.png",
    roles: ["personal", "stark"],
    emoji: "⚙️",
  },
  {
    id: "git_merge_no_commit",
    title: "Fusionar sin hacer commit automáticamente",
    description:
      "Fusiona dos ramas pero no realiza automáticamente un commit de fusión. Esto te permite revisar los cambios antes de hacer el commit.",
    code: "git merge --no-commit <NameBranch>",
    img: "/img/git_merge_no_commit.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_merge_strategy",
    title: "Seleccionar estrategia de fusión",
    description:
      "Permite seleccionar una estrategia de fusión diferente. Es útil para manejar casos específicos de fusión con diferentes enfoques.",
    code: "git merge --strategy=<strategy> <NameBranch>",
    img: "/img/git_merge_strategy.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_merge_allow_unrelated_histories",
    title: "Permitir fusiones de historiales no relacionados",
    description:
      "Permite fusionar ramas que no tienen un historial común. Útil cuando se fusionan repositorios separados.",
    code: "git merge --allow-unrelated-histories <NameBranch>",
    img: "/img/git_merge_allow_unrelated_histories.png",
    roles: ["personal", "stark"],
    emoji: "🔗",
  },
  {
    id: "git_merge_no_ff_default_message",
    title: "Fusionar sin avance rápido con mensaje predeterminado",
    description:
      "Fusiona una rama en la rama actual sin permitir el avance rápido y utiliza un mensaje de commit predeterminado para la fusión.",
    code: "git merge --no-ff <NameBranch>",
    img: "/img/git_merge_no_ff_default_message.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
];
