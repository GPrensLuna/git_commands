export const DataCommit = [
  {
    id: "git_commit_m",
    title: "Hacer commit",
    description:
      "Crea un commit con un mensaje que describe los cambios realizados. Los commits registran las modificaciones en el historial del proyecto.",
    code: 'git commit -m "<contenido>"',
    img: "/commit/git_commit_m.png",
    roles: ["commit", "basic"],
    emoji: "📝",
  },
  {
    id: "git_commit_amend",
    title: "Modificar el último commit",
    description:
      "Permite modificar el último commit, ya sea para actualizar el mensaje o añadir nuevos cambios. Utiliza esto para corregir errores en el último commit.",
    code: 'git commit --amend -m "<nuevo_mensaje>"',
    img: "/commit/git_commit_amend.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_all",
    title: "Hacer commit de todos los cambios",
    description:
      "Crea un commit de todos los archivos que han sido añadidos al área de staging, sin necesidad de especificar cada archivo individualmente.",
    code: 'git commit -a -m "<contenido>"',
    img: "/commit/git_commit_all.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_verbose",
    title: "Hacer commit con información detallada",
    description:
      "Crea un commit mostrando información detallada de los cambios que se han realizado. Esto proporciona un resumen de los archivos modificados y el contenido del commit.",
    code: 'git commit -v -m "<contenido>"',
    img: "/commit/git_commit_verbose.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_no_edit",
    title: "Hacer commit sin editar el mensaje",
    description:
      "Crea un commit con el mensaje predeterminado para el commit actual sin abrir un editor para modificar el mensaje. Utiliza esto para commits rápidos.",
    code: "git commit --no-edit",
    img: "/commit/git_commit_no_edit.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_sign",
    title: "Hacer commit firmado",
    description:
      "Crea un commit con una firma GPG para verificar la autenticidad del autor. Esto ayuda a garantizar la integridad del commit.",
    code: 'git commit -S -m "<contenido>"',
    img: "/commit/git_commit_sign.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_allow_empty",
    title: "Hacer commit vacío",
    description:
      "Permite crear un commit vacío. Esto es útil cuando deseas registrar un commit sin cambios en el código, por ejemplo, para registrar una nota o un punto de control.",
    code: 'git commit --allow-empty -m "<contenido>"',
    img: "/commit/git_commit_allow_empty.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_no_verify",
    title: "Hacer commit sin verificar",
    description:
      "Realiza un commit sin ejecutar los hooks de pre-commit o commit-msg. Esto puede ser útil si quieres hacer un commit rápidamente sin pasar por los controles de calidad configurados.",
    code: 'git commit --no-verify -m "<contenido>"',
    img: "/commit/git_commit_no_verify.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_date",
    title: "Hacer commit con fecha personalizada",
    description:
      "Permite especificar una fecha personalizada para el commit. Esto es útil si necesitas registrar un commit con una fecha diferente a la actual.",
    code: 'git commit --date="<fecha>" -m "<contenido>"',
    img: "/commit/git_commit_date.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_quiet",
    title: "Hacer commit en silencio",
    description:
      "Realiza un commit sin mostrar la salida estándar. Esto es útil si deseas hacer un commit sin ver el resumen de los cambios o mensajes adicionales.",
    code: 'git commit --quiet -m "<contenido>"',
    img: "/commit/git_commit_quiet.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_reuse_message",
    title: "Hacer commit reutilizando mensaje",
    description:
      "Crea un nuevo commit utilizando el mensaje de un commit anterior. Esto es útil si deseas reutilizar un mensaje de commit previo para un nuevo commit.",
    code: "git commit --reuse-message=<commit>",
    img: "/commit/git_commit_reuse_message.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_reset_author",
    title: "Restablecer autor del commit",
    description:
      "Restablece el autor del commit al autor configurado en la configuración global de Git. Esto puede ser útil si necesitas cambiar el autor del commit actual.",
    code: 'git commit --reset-author -m "<contenido>"',
    img: "/commit/git_commit_reset_author.png",
    roles: ["commit"],
    emoji: "📝",
  },
  {
    id: "git_commit_message_file",
    title: "Hacer commit con mensaje desde un archivo",
    description:
      "Lee el mensaje de commit desde un archivo en lugar de especificarlo en la línea de comandos. Esto es útil para mensajes largos o predefinidos guardados en un archivo.",
    code: "git commit --message-file=<file>",
    img: "/commit/git_commit_message_file.png",
    roles: ["commit"],
    emoji: "📝",
  },
];
