export async function buscarPratos() {
    
  const apiUrl = 'http://192.168.0.125:3000/pratos/'

  try {
    console.log("A")
    const response = await fetch(apiUrl);

    const text = await response.text(); // Obtenha a resposta como texto
    console.log("Resposta bruta da api:",text)

    if (!response.ok) {
      throw new Error(`Erro ao buscar pratos: ${response.status} ${response.statusText}`);
    }
    // const data = await response.json();
    const data = JSON.parse(text); // Converta o texto em JSON
    return data;
  } catch (error) {
    console.error('Erro ao buscar pratos:', error);
    throw error;
  }
}
