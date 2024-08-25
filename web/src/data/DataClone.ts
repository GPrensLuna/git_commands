export const DataClone = [
  {
    id: "git_clone",
    title: "Clonar un repositorio",
    description:
      "Descarga una copia de un repositorio remoto a tu máquina local. Esto te permite trabajar en una copia del proyecto sin afectar el repositorio original.",
    code: "git clone <url>",
    img: "/clone/git_clone.png",
    roles: ["clone"],
    emoji: "🔄",
  },
  {
    id: "git_clone_branch",
    title: "Clonar un repositorio y cambiar a una rama específica",
    description:
      "Clona un repositorio remoto y automáticamente cambia a una rama específica. Útil para empezar a trabajar directamente en una rama determinada.",
    code: "git clone -b <branch_name> <url>",
    img: "/clone/git_clone_branch.png",
    roles: ["clone"],
    emoji: "🔄",
  },
  {
    id: "git_clone_depth",
    title: "Clonar un repositorio con un historial limitado",
    description:
      "Clona un repositorio pero limita la profundidad del historial a un número específico de commits. Esto es útil para reducir el tamaño del clon si solo necesitas un historial reciente.",
    code: "git clone --depth <number> <url>",
    img: "/clone/git_clone_depth.png",
    roles: ["clone"],
    emoji: "🔄",
  },
  {
    id: "git_clone_single_branch",
    title: "Clonar solo una rama específica",
    description:
      "Clona solo una rama específica del repositorio remoto, sin descargar el historial de otras ramas. Esto es útil para trabajar en una rama concreta sin necesidad de todo el historial del proyecto.",
    code: "git clone --branch <branch_name> --single-branch <url>",
    img: "/clone/git_clone_single_branch.png",
    roles: ["clone"],
    emoji: "🔄",
  },
  {
    id: "git_clone_submodules",
    title: "Clonar un repositorio con submódulos",
    description:
      "Clona un repositorio y también inicializa y clona los submódulos asociados. Esto asegura que también obtienes las dependencias del proyecto.",
    code: "git clone --recurse-submodules <url>",
    img: "/clone/git_clone_submodules.png",
    roles: ["clone"],
    emoji: "🔄",
  },
  {
    id: "git_clone_bare",
    title: "Clonar un repositorio en modo 'bare'",
    description:
      "Clona un repositorio en modo 'bare', es decir, sin el directorio de trabajo. Esto se utiliza comúnmente para crear un repositorio central que pueda ser utilizado como referencia o como servidor de repositorios.",
    code: "git clone --bare <url>",
    img: "/clone/git_clone_bare.png",
    roles: ["clone"],
    emoji: "🔄",
  },
  {
    id: "git_clone_mirror",
    title: "Clonar un repositorio en modo 'mirror'",
    description:
      "Clona un repositorio en modo 'mirror', que es similar a 'bare' pero incluye todas las referencias remotas y ramas. Es útil para mantener una copia exacta del repositorio remoto.",
    code: "git clone --mirror <url>",
    img: "/clone/git_clone_mirror.png",
    roles: ["clone"],
    emoji: "🔄",
  },
  {
    id: "git_clone_config",
    title: "Clonar un repositorio con configuraciones específicas",
    description:
      "Permite establecer configuraciones de Git específicas al clonar un repositorio. Esto puede ser útil para definir configuraciones cloneizadas al momento de clonar.",
    code: "git clone --config key=value <url>",
    img: "/clone/git_clone_config.png",
    roles: ["clone"],
    emoji: "🔄",
  },
  {
    id: "git_clone_origin",
    title: "Clonar un repositorio con un nombre de origen específico",
    description:
      "Permite especificar el nombre del repositorio remoto al clonar. El nombre por defecto es 'origin', pero puedes cambiarlo si es necesario.",
    code: "git clone --origin <remote_name> <url>",
    img: "/clone/git_clone_origin.png",
    roles: ["clone"],
    emoji: "🔄",
  },
];
