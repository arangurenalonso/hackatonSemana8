let nombreTrabajador=prompt(`Ingrese el nombre del trabajador`);
let horasTrabajadas=parseInt(prompt(`Ingrese las horas trabajadas`));
let salarioHoraHombre=parseInt(prompt(`Ingrese el sueldo horario`));

let sueldoSemanal=salarioHoraHombre*horasTrabajadas;

alert(`${nombreTrabajador} le corresponde ${sueldoSemanal} de sueldo semanal`)
