const fetchMobileDataFromApi = async () => {
    const fetchApi = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const jsonData = await fetchApi.json();
    const data = jsonData.data.tools;
    showDataInUserInterface(data);
}
const showDataInUserInterface = (data) => {
    console.log(data);
    const showingDataInDiv = document.getElementById('show-data');
    data = data.slice(0,6);
    data.forEach(allData => {
        const dataContainer = document.createElement('div');
        dataContainer.innerHTML = `
            <div class="card border-solid border-2 border-black-300">
                <figure class="px-10 pt-10">
                    <img src="${allData.image}" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2>Features</h2>
                    <ol>
                        <li>1. ${allData.features[0]}</li>
                        <li>2. ${allData.features[1]}</li>
                        <li>3. ${allData.features[2]}</li>
                    </ol>
                    <div class="divider"></div>
                    <h2 class="card-title">${allData.name}</h2>
                    <p>${allData.published_in}</p>
                </div>
            </div>
        `;
        showingDataInDiv.appendChild(dataContainer);
    })
}
fetchMobileDataFromApi();
