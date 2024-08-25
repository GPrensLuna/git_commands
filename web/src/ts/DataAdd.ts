export const DataAdd = [
  {
    id: "git_add-All",
    title: "Añadir archivos",
    description:
      "Agrega archivos al área de staging para que estén listos para ser confirmados. Puedes añadir archivos específicos o todos los archivos modificados.",
    code: "git add .",
    img: "/img/git_add.png",
    roles: ["add", "basic"],
    emoji: "📂",
  },
  {
    id: "git_add",
    title: "Añadir archivos",
    description:
      "Agrega archivos al área de staging para que estén listos para ser confirmados. Puedes añadir archivos específicos o todos los archivos modificados.",
    code: "git add <name_of_file>",
    img: "/img/git_add.png",
    roles: ["add", "basic"],
    emoji: "📂",
  },
  {
    id: "git_add_all",
    title: "Añadir todos los archivos",
    description:
      "Añade todos los archivos modificados y nuevos al área de staging. Esto incluye archivos que no están en `.gitignore`.",
    code: "git add -A",
    img: "/img/git_add_all.png",
    roles: ["add"],
    emoji: "📂",
  },
  {
    id: "git_add_patch",
    title: "Añadir archivos de manera interactiva",
    description:
      "Permite seleccionar interactivamente partes de archivos para agregar al área de staging. Esto es útil para hacer commits más granulares.",
    code: "git add -p",
    img: "/img/git_add_patch.png",
    roles: ["add"],
    emoji: "📂",
  },
  {
    id: "git_add_update",
    title: "Añadir archivos actualizados",
    description:
      "Añade solo los archivos que han sido modificados (actualizados) al área de staging, ignorando archivos nuevos no rastreados.",
    code: "git add -u",
    img: "/img/git_add_update.png",
    roles: ["add"],
    emoji: "📂",
  },
  {
    id: "git_add_ignore",
    title: "Añadir archivos ignorados",
    description:
      "Añade archivos que están en `.gitignore` al área de staging, aunque estén configurados para ser ignorados.",
    code: "git add --force <name_of_file>",
    img: "/img/git_add_ignore.png",
    roles: ["add"],
    emoji: "📂",
  },
  {
    id: "git_add_resume",
    title: "Añadir cambios a archivos en el índice",
    description:
      "Añade cambios adicionales a archivos que ya están en el área de staging, permitiendo actualizar los cambios que se incluirán en el próximo commit.",
    code: "git add --update <name_of_file>",
    img: "/img/git_add_resume.png",
    roles: ["add"],
    emoji: "📂",
  },
  {
    id: "git_add_interactive",
    title: "Añadir archivos de manera interactiva",
    description:
      "Abre una interfaz interactiva para seleccionar archivos y cambios para agregar al área de staging. Esto te permite tener una vista más estructurada de los cambios.",
    code: "git add -i",
    img: "/img/git_add_interactive.png",
    roles: ["add"],
    emoji: "📂",
  },
  {
    id: "git_add_ignore_errors",
    title: "Añadir archivos ignorando errores",
    description:
      "Añade archivos al área de staging, ignorando los errores que puedan ocurrir durante el proceso. Utiliza este comando cuando se espera que puedan ocurrir errores y se desee proceder de todos modos.",
    code: "git add --ignore-errors <name_of_file>",
    img: "/img/git_add_ignore_errors.png",
    roles: ["add"],
    emoji: "📂",
  },
  {
    id: "git_add_n",
    title: "Añadir archivos sin incluir cambios",
    description:
      "Añade archivos al área de staging para que Git los rastree, pero no los incluye en el próximo commit hasta que se agreguen con `git add` nuevamente. Utiliza esto para preparar archivos para seguimiento sin añadir cambios aún.",
    code: "git add -N <name_of_file>",
    img: "/img/git_add_n.png",
    roles: ["add"],
    emoji: "📂",
  },
  {
    id: "git_add_edit",
    title: "Añadir archivos con edición previa",
    description:
      "Permite editar el archivo que se está agregando al área de staging antes de completar el proceso de adición. Esto es útil para hacer ajustes específicos a los cambios antes de confirmarlos.",
    code: "git add -e <name_of_file>",
    img: "/img/git_add_edit.png",
    roles: ["add"],
    emoji: "✏️",
  },
  {
    id: "git_add_patch",
    title: "Añadir partes específicas de archivos",
    description:
      "Permite seleccionar partes específicas de archivos para agregar al área de staging. Esto es útil para hacer commits más precisos y controlados.",
    code: "git add --patch <name_of_file>",
    img: "/img/git_add_patch.png",
    roles: ["add"],
    emoji: "📂",
  },
  {
    id: "git_add_intent_to_add",
    title: "Añadir archivos con intención de añadir",
    description:
      "Marca archivos como añadidos al área de staging sin incluir los cambios realizados en ellos. Útil para indicar que se tiene la intención de añadir estos archivos en un commit futuro.",
    code: "git add --intent-to-add <name_of_file>",
    img: "/img/git_add_intent_to_add.png",
    roles: ["add"],
    emoji: "📂",
  },
];
