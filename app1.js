const input = document.getElementById('ingresar-tareas');
const boton = document.querySelector('button');
const listaTareas = document.getElementById('lista-tareas');

const agregarTarea = () => {
    if (input.value){
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        let texto = document.createElement('p');
        texto.innerText = input.value;
        console.log(texto);
        tareaNueva.appendChild(texto);

        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'iconos-completar');
        completar.addEventListener('click',tareaCompletada);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'iconos-eliminar');
        eliminar.addEventListener('click',eliminarTarea);

        iconos.append(completar, eliminar);

        listaTareas.appendChild(tareaNueva);
    } else{
        alert("ingrese una tarea");
    }
}

const tareaCompletada = (e) => {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

const eliminarTarea = (e) => {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click',agregarTarea);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        agregarTarea();
    }
})