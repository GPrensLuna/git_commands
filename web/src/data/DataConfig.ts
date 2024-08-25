export const DataConfig = [
  {
    id: "git_init",
    title: "Inicializar un repositorio Git",
    description:
      "Inicializa un nuevo repositorio Git en el directorio actual. Este comando crea un nuevo subdirectorio `.git` que contiene todos los archivos necesarios para el control de versiones.",
    code: "git init",
    img: "/config/git_init.png",
    roles: ["config", "basic"],
    emoji: "🚀",
  },
  {
    id: "git_config_global_user",
    title: "Configurar nombre y correo electrónico global",
    description:
      "Configura tu nombre y correo electrónico global para Git. Estos detalles se asociarán con tus commits y serán utilizados en los metadatos de los mismos.",
    code: 'git config --global user.name "John Doe"\ngit config --global user.email johndoe@example.com',
    img: "/config/git_config.png",
    roles: ["config", "basic"],
    emoji: "🔧",
  },
  {
    id: "git_config_list",
    title: "Ver la configuración de Git",
    description:
      "Muestra la configuración actual de Git que tienes establecida en tu entorno. Esto incluye configuraciones globales y locales de tu repositorio.",
    code: "git config --list",
    img: "/config/git_config_list.png",
    roles: ["config"],
    emoji: "📋",
  },
  {
    id: "git_config_edit",
    title: "Editar la configuración de Git",
    description:
      "Edita el archivo de configuración de Git directamente. Esto te permite modificar las configuraciones globales o locales en un editor de texto.",
    code: "git config --edit",
    img: "/config/git_config_edit.png",
    roles: ["config"],
    emoji: "📝",
  },
  {
    id: "git_config_get",
    title: "Obtener una configuración específica",
    description:
      "Obtén el valor de una configuración específica en tu repositorio. Esto te permite ver la configuración actual para un parámetro en particular.",
    code: "git config <nombre-configuración>",
    img: "/config/git_config_get.png",
    roles: ["config"],
    emoji: "🔍",
  },
  {
    id: "git_config_set",
    title: "Establecer una configuración específica",
    description:
      "Establece el valor de una configuración específica para tu repositorio. Esto es útil para ajustar configuraciones individuales según tus necesidades.",
    code: "git config <nombre-configuración> <valor>",
    img: "/config/git_config_set.png",
    roles: ["config"],
    emoji: "⚙️",
  },
  {
    id: "git_config_unset",
    title: "Eliminar una configuración específica",
    description:
      "Elimina una configuración específica de tu repositorio. Esto te permite revertir configuraciones que ya no sean necesarias.",
    code: "git config --unset <nombre-configuración>",
    img: "/config/git_config_unset.png",
    roles: ["config"],
    emoji: "❌",
  },
  {
    id: "git_config_local",
    title: "Configurar ajustes locales",
    description:
      "Configura ajustes específicos para el repositorio actual. Los ajustes locales solo se aplican al repositorio donde se ejecuta el comando.",
    code: "git config --local <nombre-configuración> <valor>",
    img: "/config/git_config_local.png",
    roles: ["config"],
    emoji: "📂",
  },
  {
    id: "git_config_global",
    title: "Configurar ajustes globales",
    description:
      "Configura ajustes globales que se aplican a todos los repositorios de tu usuario. Utiliza este comando para establecer configuraciones que deseas que sean consistentes en todos tus proyectos Git.",
    code: "git config --global <nombre-configuración> <valor>",
    img: "/config/git_config_global.png",
    roles: ["config"],
    emoji: "🌍",
  },
  {
    id: "git_config_global_editor",
    title: "Configurar editor global",
    description:
      "Configura el editor de texto predeterminado para Git. Utilizado para editar mensajes de commits, configuraciones, etc.",
    code: 'git config --global core.editor "vim"',
    img: "/config/git_config_global_editor.png",
    roles: ["config"],
    emoji: "🖋️",
  },
  {
    id: "git_config_global_merge_tool",
    title: "Configurar herramienta de fusión global",
    description:
      "Configura la herramienta de fusión predeterminada para resolver conflictos de merge.",
    code: 'git config --global merge.tool "vimdiff"',
    img: "/config/git_config_global_merge_tool.png",
    roles: ["config"],
    emoji: "🔄",
  },
  {
    id: "git_config_global_alias",
    title: "Configurar alias global",
    description:
      "Crea un alias para un comando de Git, facilitando su uso al escribir comandos más cortos.",
    code: 'git config --global alias.co "checkout"',
    img: "/config/git_config_global_alias.png",
    roles: ["config"],
    emoji: "🗂️",
  },
  {
    id: "git_config_global_pull_rebase",
    title: "Configurar rebase al hacer pull",
    description:
      "Configura si `git pull` debe realizar un rebase en lugar de una fusión, facilitando un historial más lineal.",
    code: "git config --global pull.rebase true",
    img: "/config/git_config_global_pull_rebase.png",
    roles: ["config"],
    emoji: "🔄",
  },
  {
    id: "git_config_global_signingkey",
    title: "Configurar clave de firma global",
    description:
      "Configura la clave de firma para tus commits, útil si utilizas firmas GPG.",
    code: 'git config --global user.signingkey "ABCD1234"',
    img: "/config/git_config_global_signingkey.png",
    roles: ["config"],
    emoji: "🔑",
  },
  {
    id: "git_config_global_color_ui",
    title: "Configurar color en la salida de Git",
    description:
      "Configura si Git debe colorear la salida en la terminal, mejorando la legibilidad de los mensajes.",
    code: "git config --global color.ui auto",
    img: "/config/git_config_global_color_ui.png",
    roles: ["config"],
    emoji: "🌈",
  },
  {
    id: "git_config_global_commit_gpgSign",
    title: "Configurar firma GPG en commits",
    description:
      "Configura si los commits deben ser firmados automáticamente usando GPG.",
    code: "git config --global commit.gpgSign true",
    img: "/config/git_config_global_commit_gpgSign.png",
    roles: ["config"],
    emoji: "✍️",
  },
];
