// Firebase configuration
const firebaseConfig = {
    apiKey: "sua-api-key",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto-id",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "seu-messaging-sender-id",
    appId: "seu-app-id"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o formulário de recarregar a página
    
    // Obtém o valor do campo de e-mail
    const email = document.querySelector('input[type="email"]').value;

    try {
        // Adiciona o e-mail no Firestore (coleção chamada 'newsletter')
        await db.collection('newsletter').add({ email });
        alert('E-mail cadastrado com sucesso!'); // Mensagem de sucesso
    } catch (error) {
        console.error('Erro ao cadastrar e-mail:', error);
        alert('Erro ao cadastrar. Tente novamente.'); // Mensagem de erro
    }
});

async function fetchEmails() {
    try {
        // Busca todos os documentos da coleção 'newsletter'
        const snapshot = await db.collection('newsletter').get();

        // Itera por cada documento e exibe no console
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data()); // Mostra o ID e os dados do documento
        });
    } catch (error) {
        console.error('Erro ao buscar e-mails:', error); // Mensagem de erro
    }
}

// Chama a função para buscar os e-mails
fetchEmails();
