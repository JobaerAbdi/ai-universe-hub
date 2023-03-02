const loadFetchData = ()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res => res.json())
    .then(data => loadDisplayData(data.data.tools))
    .catch(error => console.log(error));
};

const loadDisplayData = (allData)=>{
    const mainContainer = document.getElementById('card-container');
    allData.forEach(singleData=>{
        const {image,features,name,published_in} = singleData;    // width="400" height="400"
        console.log(singleData);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card p-3">
            <img class="img-fluid rounded" src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <div>
                    <p>1. ${features[0]}</p>               
                    <p>2. ${features[1]}</p>
                    <p>3. ${features[2]}</p>
                </div>
            </div>
            <hr/>
            <div>
            </div>
        </div>
        `;
        mainContainer.appendChild(div);
    });
};