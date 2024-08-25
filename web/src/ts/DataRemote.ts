export const DataRemote = [
  {
    id: "git_remote_add",
    title: "Configurar el repositorio remoto",
    description:
      "Agrega un repositorio remoto para sincronizar los cambios. Este comando establece una conexión con un repositorio remoto, permitiéndote hacer push y pull de cambios.",
    code: "git remote add origin <url>",
    img: "/img/git_remote.png",
    roles: ["personal", "stark"],
    emoji: "🔗",
  },
  {
    id: "git_remote_remove",
    title: "Eliminar un repositorio remoto",
    description:
      "Elimina un repositorio remoto configurado. Utiliza este comando si ya no necesitas sincronizar con el repositorio remoto.",
    code: "git remote remove <name>",
    img: "/img/git_remote_remove.png",
    roles: ["personal", "stark"],
    emoji: "🔗",
  },
  {
    id: "git_remote_set_url",
    title: "Cambiar la URL del repositorio remoto",
    description:
      "Cambia la URL del repositorio remoto configurado. Útil si el repositorio remoto ha cambiado de ubicación.",
    code: "git remote set-url origin <new_url>",
    img: "/img/git_remote_set_url.png",
    roles: ["personal", "stark"],
    emoji: "🔗",
  },
  {
    id: "git_remote_show",
    title: "Mostrar información sobre los repositorios remotos",
    description:
      "Muestra información detallada sobre los repositorios remotos configurados, incluyendo las URL y las ramas rastreadas.",
    code: "git remote show <name>",
    img: "/img/git_remote_show.png",
    roles: ["personal", "stark"],
    emoji: "🔗",
  },
  {
    id: "git_remote",
    title: "Listar repositorios remotos",
    description:
      "Lista los repositorios remotos configurados para el proyecto. Esto te permite ver qué repositorios están disponibles para sincronización.",
    code: "git remote",
    img: "/img/git_remote_list.png",
    roles: ["personal", "stark"],
    emoji: "🔗",
  },
  {
    id: "git_remote_v",
    title: "Listar repositorios remotos con URL",
    description:
      "Lista los repositorios remotos configurados junto con sus URLs. Esto te ayuda a verificar las URL asociadas a cada repositorio remoto.",
    code: "git remote -v",
    img: "/img/git_remote_v.png",
    roles: ["personal", "stark"],
    emoji: "🔗",
  },
  {
    id: "git_remote_rename",
    title: "Renombrar un repositorio remoto",
    description:
      "Cambia el nombre de un repositorio remoto configurado. Utiliza este comando si necesitas reorganizar o renombrar tus conexiones remotas.",
    code: "git remote rename <old_name> <new_name>",
    img: "/img/git_remote_rename.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_remote_prune",
    title: "Eliminar referencias obsoletas",
    description:
      "Elimina las referencias obsoletas a ramas remotas que ya no existen. Utiliza este comando para mantener tu lista de ramas remotas actualizada.",
    code: "git remote prune <name>",
    img: "/img/git_remote_prune.png",
    roles: ["personal", "stark"],
    emoji: "🗑️",
  },
  {
    id: "git_remote_update",
    title: "Actualizar información de repositorios remotos",
    description:
      "Actualiza la información de los repositorios remotos, obteniendo las ramas y etiquetas más recientes. Esto te ayuda a mantener tu información de referencia actualizada.",
    code: "git remote update",
    img: "/img/git_remote_update.png",
    roles: ["personal", "stark"],
    emoji: "🔄",
  },
  {
    id: "git_fetch",
    title: "Obtener cambios del repositorio remoto",
    description:
      "Obtiene los cambios del repositorio remoto sin aplicarlos a tu rama actual. Utiliza este comando para revisar los cambios antes de fusionarlos.",
    code: "git fetch <remote>",
    img: "/img/git_fetch.png",
    roles: ["personal", "stark"],
    emoji: "📥",
  },
  {
    id: "git_remote_set_branches",
    title: "Configurar ramas rastreadas",
    description:
      "Configura qué ramas serán rastreadas por un repositorio remoto específico. Esto te permite gestionar las ramas que se sincronizan con el remoto.",
    code: "git remote set-branches <name> <branch>...",
    img: "/img/git_remote_set_branches.png",
    roles: ["personal", "stark"],
    emoji: "📋",
  },
  {
    id: "git_remote_show_verbose",
    title: "Mostrar información detallada sobre los repositorios remotos",
    description:
      "Muestra información detallada sobre los repositorios remotos, incluyendo los detalles de las ramas remotas y las URL. Utiliza la opción `--verbose` para obtener más detalles.",
    code: "git remote show <name> --verbose",
    img: "/img/git_remote_show_verbose.png",
    roles: ["personal", "stark"],
    emoji: "🔍",
  },
];
