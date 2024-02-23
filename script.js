const cmdText = document.getElementById('cmdText');

const textLines = [
  "****************************************************",
  "************** ACCESO NO AUTORIZADO **************",
  "****************************************************",
  "              [Archivo Confidencial]",
  "",
  "         ║     BASE DE DATOS DE AVIACIÓN    ║",
  "         ║       Rusia y Siria              ║",
  "",
  "¡Acceso No Autorizado Detectado!",
  "",
  "[INFORMACIÓN DEL VUELO]",
  "Número de Vuelo: RU-CN273",
  "Ruta: Moscú (Rusia) a Damasco (Siria)",
  "Altura de Crucero: 35,000 pies",
  "Velocidad Actual: 560 mph",
  "",
  "[CONTROLES DEL AVIÓN]",
  "Estado de la Aeronave: Operativo",
  "Sistemas de Navegación: Desbloqueados",
  "Protocolos de Seguridad: Comprometidos",
  "",
  "[DATOS DE LA TORRE DE CONTROL - RUSIA]",
  "Ubicación: Moscú",
  "Frecuencia de Comunicación: 124.55 MHz",
  "Estado: Activo y Sin Sospechas",
  "",
  "[DATOS DE LA TORRE DE CONTROL - SIRIA]",
  "Ubicación: Damasco",
  "Frecuencia de Comunicación: 118.20 MHz",
  "Estado: Activo y Sin Sospechas",
  "",
  "¡ADVERTENCIA!",
  "Este acceso no autorizado ha sido registrado."
];

function generateText() {
  let fullText = '';

  for (let i = 0; i < 20; i++) {
    // Utiliza las clases de resaltado directamente en el texto
    fullText += textLines.join('\n')
      .replace(/ACCESO NO AUTORIZADO/g, '<span class="highlight">¡ACCESO NO AUTORIZADO!</span>')
      .replace(/¡Acceso No Autorizado Detectado!/g, '<span class="highlight">¡Acceso No Autorizado Detectado!</span>')
      .replace(/ha sido registrado./g, '<span class="highlight">ha sido registrado.</span>')
      .replace(/Archivo Confidencial/g, '<span class="highlight">Archivo Confidencial</span>')
      .replace(/¡ADVERTENCIA!/g, '<span class="highlight">¡ADVERTENCIA!</span>') + '\n\n';


    }

  cmdText.innerHTML = fullText;
}

function scrollUp() {
  cmdText.parentElement.scrollTop += 1;

  if (cmdText.parentElement.scrollTop >= cmdText.scrollHeight / 2) {
    cmdText.parentElement.scrollTop = 0;
    generateText();
  }
}

generateText();

setInterval(scrollUp, 50);
