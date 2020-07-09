1. Construir un formulario con HTML que pida los siguientes datos:
* Nombre
* Apellido
* Email
* Fecha de nacimiento
* Número de documento
* Nombre de calle
* Número de calle
* Depto (opcional)
* Piso (opcional)
* Ciudad
* Provincia
* Botón ENVIAR (type submit)
* Botón LIMPIAR (type button)

Tener en cuenta el type de los inputs. No todos tienen que ser type="text"

2. El formulario tiene un evento asociado onsubmit que se ejecuta cuando se hace click en el botón "ENVIAR" (por eso ese botón es de type submit, para ejecutar el evento). La función asocuada a ese evento es donde deben llevarse a cabo las siguiente acciones:

* Cuando se haga click en enviar, mostrar un alerts que diga "No se han completado todos los campos requeridos". Los campos requeridos son: Nombre, Apellido, Email, Fecha de nacimiento, Número de documento, Nombre de calle, Número de calle, Ciudad y Provincia.
* Mostrar además un mensaje de error en rojo debajo de cada input requerido que no haya sido completado al momento de enviar el formulario.
* Si el formulario fue completado correctamente, cuando de haga click en ENVIAR, todos los datos ingresados deben mostrarse en la parte donde dice VISTA PREVIA en el HTML.
* El botón LIMPIAR debe borrar todos los datos que han sido escritos en el formulario. La función que deben modificar es borrarFormulario().