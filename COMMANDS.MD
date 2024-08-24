# Commands of the git
----

## Descargar git para empezar

**[Downloads GIT]([https://](https://git-scm.com/download/win))**

## prev config git
> **`git config --global user.name "John Doe"`**
> **`git config --global user.email johndoe@example.com`**

![alt](/img/git_config.png)
----

## Commands for init

- > **`git init`**  

    *comando para inicializar un repositorio local controlado por **git***

    ![alt](/img/git_init.png)
----

- > **`git branch -m <name>`**

    *comando para inicializar una nueva rama en el proyecto con la **-m** le indicamos que lo vamos a nombrar <name>, que se reemplaza por el nombre que deseamos*
    > **`git branch -m main`** 
    > *Crea una rama del proyecto cn el nombre main*

    ![alt](/img/git_branch.png)
----

- > **`git switch <nameBranch> `**  

    *comando para cambiar entre las diversas branch que se van creando mejora la gestión y flujo de trabajo*

    ![alt](/img/git_switch.png)
----


- > **`git add <name_of_file>`**  

    *comando para añadir archivos (guardar) al repositorio local*
    > **`git add COMMANDS.MD`** 

    > *Crea una captara de código actual ubicado en el archivo*

    > **`git add .`** 
    > *Crea una captara de todo código actual*
    
    ![alt](/img/git_add.png)
----

- > **`git commit -m "<contenido>"`**  

    *comando para escribir un comentario frente a los cambios realizados en el archivo tiene que ir entre " "*
    > **`git commit -m "commit inicial del proyecto"`**
    > *Crea una comentario a lo archivos modificados

    ![alt](/img/git_commit.png)
----

- > **`git status`**  

    *comando para ver en que proceso están los archivos del repositorio local*

    ![alt](/img/git_status.png)
----
- > **`git tag <nameTag>`**  

    *comando para crear un punto de restauración con un identificador para distinguir las versiones*

    ![alt](/img/git_tag.png)
----

- > **`git log`**  

    *comando para ver todos los commit anterior mente realizados*
    
    ![alt](/img/git_log.png)

    *si añades un tag también se puede visualizar en los log*

    ![alt](/img/git_log_tag.png)

    ----
    otras opciones 
    ----
    - ***cambia la forma de como se ve en consola***

    > **`git log --graph `** 

    > **`git log --graph  --pretty=oneline`** 

    > **`git log --graph  --decorate --all --oneline`** 

     
----

- > **`git checkout `**  

    *comando para ver movernos entre branch o commits creados, en otras palabras se utiliza para moverse a distintos momentos del código*
    ----
    otras opciones 
    ----
    - ***Ejemplos***

    > **`git checkout <name_of_file>`** 
    > como moverse o navegar entre commit, brach y tag


    - ***forma de ir a una commit***

    ![alt](/img/git_checkout_commits.png)
    
    - ***forma de ir a una brach***

    ![alt](/img/git_checkout_branch.png)
    
    - ***forma de ir a un tag***

    ![alt](/img/git_checkout_tag.png)


----

- > **`git merge <NameBranch> `**  

    *comando para actualizar el código en distintas ramas*

    ![alt](/img/git_merge.png)

     > **En este caso se actualizo la rama de prueba con los cambios que se realizaron en la branch main**

----
- > **`git reset qweqwe`**  

    *comando para restablecer el código a un commit anterior*

----

- > **`git diff dddqwqweqwd`**  

    *comando para revisar los cambios realizados antes de hacer un commit*

----

