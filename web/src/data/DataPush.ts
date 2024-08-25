export const DataPush = [
  {
    id: "git_push",
    title: "Sincronizar cambios con el repositorio remoto",
    description:
      "Envía tus cambios locales al repositorio remoto o actualiza tu repositorio local con los cambios del remoto. Mantiene tu repositorio sincronizado con el origen.",
    code: "git push origin <branch>\ngit pull origin <branch>",
    img: "/img/git_push.png",
    roles: ["push"],
    emoji: "🔄",
  },
  {
    id: "git_push_force",
    title: "Forzar el push de cambios",
    description:
      "Envía tus cambios al repositorio remoto sobrescribiendo cualquier cambio en conflicto. Utiliza este comando con cuidado para evitar perder datos.",
    code: "git push --force origin <branch>",
    img: "/img/git_push_force.png",
    roles: ["push"],
    emoji: "🔄",
  },
  {
    id: "git_push_set_upstream",
    title: "Establecer upstream para una rama",
    description:
      "Establece una rama remota como upstream para la rama local actual. Esto permite que los comandos `git push` y `git pull` se sincronicen con la rama remota predeterminada.",
    code: "git push --set-upstream origin <branch>",
    img: "/img/git_push_set_upstream.png",
    roles: ["push"],
    emoji: "🔄",
  },
  {
    id: "git_push_delete",
    title: "Eliminar una rama remota",
    description:
      "Elimina una rama en el repositorio remoto. Útil para limpiar ramas antiguas o que ya no son necesarias.",
    code: "git push origin --delete <branch>",
    img: "/img/git_push_delete.png",
    roles: ["push"],
    emoji: "🔄",
  },
  {
    id: "git_push_tags",
    title: "Empujar etiquetas al repositorio remoto",
    description:
      "Envía todas las etiquetas locales al repositorio remoto. Utiliza este comando para sincronizar tus etiquetas de versión con el remoto.",
    code: "git push origin --tags",
    img: "/img/git_push_tags.png",
    roles: ["push"],
    emoji: "🔄",
  },
  {
    id: "git_push_all",
    title: "Empujar todas las ramas",
    description:
      "Envía todas las ramas locales al repositorio remoto. Utiliza este comando para sincronizar todas tus ramas con el remoto.",
    code: "git push --all origin",
    img: "/img/git_push_all.png",
    roles: ["push"],
    emoji: "🌐",
  },
  {
    id: "git_push_only_tags",
    title: "Empujar solo etiquetas",
    description:
      "Envía solo las etiquetas locales al repositorio remoto. Utiliza este comando para sincronizar tus etiquetas sin afectar las ramas.",
    code: "git push --tags origin",
    img: "/img/git_push_only_tags.png",
    roles: ["push"],
    emoji: "🏷️",
  },
  {
    id: "git_push_force_with_lease",
    title: "Forzar push con protección de arrendamiento",
    description:
      "Envía tus cambios al repositorio remoto sobrescribiendo los cambios solo si no se han producido cambios en el remoto desde el último pull. Esto ayuda a prevenir la pérdida de datos.",
    code: "git push --force-with-lease origin <branch>",
    img: "/img/git_push_force_with_lease.png",
    roles: ["push"],
    emoji: "🔄",
  },
  {
    id: "git_push_dry_run",
    title: "Simular push",
    description:
      "Muestra qué cambios se enviarían al repositorio remoto sin realizar el push real. Útil para verificar antes de hacer un push.",
    code: "git push --dry-run origin <branch>",
    img: "/img/git_push_dry_run.png",
    roles: ["push"],
    emoji: "🔍",
  },
  {
    id: "git_push_head",
    title: "Empujar la rama actual",
    description:
      "Envía la rama en la que estás trabajando (HEAD) al repositorio remoto. Útil si deseas evitar escribir el nombre de la rama.",
    code: "git push origin HEAD",
    img: "/img/git_push_head.png",
    roles: ["push"],
    emoji: "🚀",
  },
  {
    id: "git_push_recurse_submodules",
    title: "Empujar submódulos",
    description:
      "Empuja cambios en los submódulos junto con el push principal. Utiliza este comando si tu repositorio contiene submódulos.",
    code: "git push --recurse-submodules=on-demand origin <branch>",
    img: "/img/git_push_recurse_submodules.png",
    roles: ["push"],
    emoji: "🔗",
  },
];
