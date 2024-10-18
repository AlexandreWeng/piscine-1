document.getElementById('loadData').addEventListener('click', async () => {
    try {
        // URL de l'ensemble de données (tu devras peut-être ajuster l'URL en fonction des ressources fournies)
        const url = 'https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv'; // exemple de dataset NASA
        
        // Effectuer une requête fetch pour obtenir les données
        let response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erreur : ${response.status}`);
        }
        
        // Récupérer les données sous forme de texte
        let data = await response.text();
        
        // Afficher les données dans l'élément <p> avec l'id "temperatureData"
        document.getElementById('temperatureData').textContent = data;
    } catch (error) {
        console.error('Une erreur est survenue :', error);
        document.getElementById('temperatureData').textContent = 'Failed to load data';
    }
});
