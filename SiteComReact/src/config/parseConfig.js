import Parse from 'parse';

// Inicializa o Parse com suas credenciais do Back4App
Parse.initialize(
  "SUA_APPLICATION_ID", // Substitua pela sua Application ID do Back4App
  "SUA_CLIENT_KEY"     // Substitua pela sua Client Key do Back4App
);

// Define o servidor do Back4App
Parse.serverURL = 'https://parseapi.back4app.com/';

export default Parse; 