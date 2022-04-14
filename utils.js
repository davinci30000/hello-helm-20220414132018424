

  
const welcomeMessage = "Buenas, este curso está muy muy desactualizado y faltan detalles que no están explicados en ningún sitio. Como esto de que para ejecutar las toolchains, en el stage de deploy, tengo que haberle dado antes permiso de lectura al servicio toolchain sobre el grupo apps";
const portMessage = "Application Running on port";

const getWelcomeMessage = () => {
    return welcomeMessage;
};

const getPortMessage = () => {
    return portMessage;
};

exports.getWelcomeMessage = getWelcomeMessage;
exports.getPortMessage = getPortMessage;