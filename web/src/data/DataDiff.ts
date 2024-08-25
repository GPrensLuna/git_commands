export const DataDiff = [
  {
    id: "git_diff",
    title: "Ver diferencias",
    description:
      "Muestra las diferencias entre los archivos modificados y la última confirmación en el repositorio. Útil para revisar los cambios realizados antes de hacer un commit.",
    code: "git diff",
    img: "/diff/git_diff.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_staged",
    title: "Ver diferencias en el área de staging",
    description:
      "Muestra las diferencias entre los archivos en el área de staging y la última confirmación. Esto ayuda a revisar qué cambios se han preparado para el próximo commit.",
    code: "git diff --cached",
    img: "/diff/git_diff_staged.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_commit",
    title: "Ver diferencias entre commits",
    description:
      "Muestra las diferencias entre dos commits específicos. Esto es útil para comparar versiones del código en diferentes puntos del historial.",
    code: "git diff <commit1> <commit2>",
    img: "/diff/git_diff_commit.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_branch",
    title: "Ver diferencias entre ramas",
    description:
      "Muestra las diferencias entre dos ramas específicas. Esto ayuda a entender qué cambios se han realizado en una rama en comparación con otra.",
    code: "git diff <branch1> <branch2>",
    img: "/diff/git_diff_branch.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_file",
    title: "Ver diferencias en un archivo específico",
    description:
      "Muestra las diferencias entre un archivo específico en el área de trabajo y la última confirmación. Esto ayuda a revisar cambios en archivos individuales.",
    code: "git diff <file_path>",
    img: "/diff/git_diff_file.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_stat",
    title: "Ver resumen de diferencias",
    description:
      "Muestra un resumen estadístico de las diferencias, incluyendo el número de líneas añadidas y eliminadas en los archivos modificados.",
    code: "git diff --stat",
    img: "/diff/git_diff_stat.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_name_only",
    title: "Ver sólo nombres de archivos modificados",
    description:
      "Muestra solo los nombres de los archivos que han cambiado, sin mostrar el contenido de las diferencias.",
    code: "git diff --name-only",
    img: "/diff/git_diff_name_only.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_color",
    title: "Ver diferencias con colores",
    description:
      "Muestra las diferencias con colores para facilitar la lectura de los cambios. Esto ayuda a identificar fácilmente las adiciones y eliminaciones en los archivos modificados.",
    code: "git diff --color",
    img: "/diff/git_diff_color.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_word",
    title: "Ver diferencias a nivel de palabras",
    description:
      "Muestra las diferencias a nivel de palabras en lugar de líneas. Esto ayuda a ver los cambios exactos dentro de las líneas modificadas.",
    code: "git diff --word-diff",
    img: "/diff/git_diff_word.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_name_status",
    title: "Ver nombres y estados de archivos modificados",
    description:
      "Muestra los nombres de los archivos modificados junto con el estado de los cambios (A para añadido, M para modificado, D para eliminado). Esto proporciona una visión rápida del impacto de los cambios.",
    code: "git diff --name-status",
    img: "/diff/git_diff_name_status.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_unified",
    title: "Ver diferencias con número de líneas de contexto ajustado",
    description:
      "Ajusta el número de líneas de contexto mostradas alrededor de las diferencias. El valor por defecto es 3, pero puedes especificar un número diferente para ver más o menos contexto.",
    code: "git diff --unified=<n>",
    img: "/diff/git_diff_unified.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_ignore_space",
    title: "Ignorar cambios en espacios en blanco",
    description:
      "Ignora los cambios en los espacios en blanco al mostrar las diferencias. Esto es útil si solo estás interesado en los cambios reales del contenido y no en los cambios de formato.",
    code: "git diff --ignore-space-change",
    img: "/diff/git_diff_ignore_space.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_ignore_all_space",
    title: "Ignorar todos los espacios en blanco",
    description:
      "Ignora todos los espacios en blanco al mostrar las diferencias. Esto es útil si los cambios en los espacios en blanco no son relevantes para la revisión.",
    code: "git diff --ignore-all-space",
    img: "/diff/git_diff_ignore_all_space.png",
    roles: ["diff"],
    emoji: "🔍",
  },
  {
    id: "git_diff_relative",
    title: "Ver diferencias relativas a una ruta específica",
    description:
      "Muestra diferencias relativas a una ruta específica. Esto es útil si quieres ver cambios solo en una carpeta o archivo específico sin ver el contexto global.",
    code: "git diff --relative <path>",
    img: "/diff/git_diff_relative.png",
    roles: ["diff"],
    emoji: "🔍",
  },
];
