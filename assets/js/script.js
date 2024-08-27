let radiologia = [
    {hora : "11:00", especialista : "Ignacio Schulz", paciente : "Fracisca Rojas", rut : "9878782-1", prevision : "FONASA"},
    {hora : "11:30", especialista : "FEDERICO SUBERCASEAUX", paciente : "PAMELA ESTRADA", rut : "15345241-3", prevision : "ISAPRE"},
    {hora : "15:00", especialista : "FERNANDO WURTHZ", paciente : "ARMANDO LUNA", rut : "16445345-9", prevision : "ISAPRE"},
    {hora : "15:30", especialista : "ANA MARIA GODOY", paciente : "MANUEL GODOY", rut : "17666419-0", prevision : "FONASA"},
    {hora : "16:00", especialista : "PATRICIA SUAZO", paciente : "RAMON ULLOA", rut : "14989389-K", prevision : "FONASA"}
];

let traumatologia = [
    {hora : "8:00", especialista : "Maria Paz Altuzarra", paciente : "Paula Sanchez", rut : "9878782-1", prevision : "FONASA"},
    {hora : "10:00", especialista : "Raul Araya", paciente : "Angelica Navas", rut : "15345241-3", prevision : "ISAPRE"},
    {hora : "10:30", especialista : "Maria Arriagada", paciente : "Ana Klapp", rut : "16445345-9", prevision : "ISAPRE"},
    {hora : "11:00", especialista : "Alejandro Badilla", paciente : "Felipe Mardones", rut : "17666419-0", prevision : "FONASA"},
    {hora : "11:30", especialista : "Cecilia Budnik", paciente : "Diego Marre", rut : "14989389-K", prevision : "FONASA"},
    {hora : "12:00", especialista : "Arturo Cavagnaro", paciente : "Cecilia Mendez", rut : "14989389-K", prevision : "FONASA"},
    {hora : "12:30", especialista : "Andres Kanacri", paciente : "Marcial Suazo", rut : "14989389-K", prevision : "FONASA"}
];

let dental = [
    {hora : "11:00", especialista : "Ignacio Schulz", paciente : "MARCELA RETAMAL", rut : "9878782-1", prevision : "FONASA"},
    {hora : "11:30", especialista : "FEDERICO SUBERCASEAUX", paciente : "PAMELA ESTRADA", rut : "15345241-3", prevision : "ISAPRE"},
    {hora : "15:00", especialista : "FERNANDO WURTHZ", paciente : "ARMANDO LUNA", rut : "16445345-9", prevision : "ISAPRE"},
    {hora : "15:30", especialista : "ANA MARIA GODOY", paciente : "MANUEL GODOY", rut : "17666419-0", prevision : "FONASA"},
    {hora : "16:00", especialista : "PATRICIA SUAZO", paciente : "RAMON ULLOA", rut : "14989389-K", prevision : "FONASA"},
    {hora : "11:30", especialista : "PATRICIA SUAZO", paciente : "ANA SEPULVEDA", rut : "14989389-K", prevision : "FONASA"}
];

document.write(`Primera hora radiologia : Nombre : ${radiologia[0].paciente} - prevision : ${radiologia[0].prevision} | Ultima hora radiologia : Nombre : ${radiologia[4].paciente} - prevision : ${radiologia[4].prevision}<br><br>`);
document.write(`Primera hora traumatologia : Nombre : ${traumatologia[0].paciente} - prevision : ${traumatologia[0].prevision} | Ultima hora traumatologia : Nombre : ${traumatologia[6].paciente} - prevision : ${traumatologia[6].prevision}<br><br>`);
document.write(`Primera hora dental : Nombre : ${dental[0].paciente} - prevision : ${dental[0].prevision} | Ultima hora dental : Nombre : ${dental[5].paciente} - prevision : ${dental[5].prevision}<br>`);

function mostrarTabla(lista, titulo) {
    document.write(`<h3>${titulo}</h3>`);
    document.write("<table border='1'><tr><th>Hora</th><th>especialista</th><th>paciente</th><th>ruT</th><th>Previsión</th></tr>");
    lista.forEach(atencion => {
        document.write(`<tr>
            <td>${atencion.hora}</td>
            <td>${atencion.especialista}</td>
            <td>${atencion.paciente}</td>
            <td>${atencion.rut}</td>
            <td>${atencion.prevision}</td>
        </tr>`);
    });
    document.write("</table>");
}
mostrarTabla(radiologia, "Radiología");
mostrarTabla(traumatologia, "Traumatología");
mostrarTabla(dental, "Dental");