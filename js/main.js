const loadFetchData = ()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res => res.json())
    .then(data => loadDisplayData(data.data.tools.slice(0,6)))
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
        <div class="card p-3 shadow-lg">
            <img class="rounded" src="${image}" class="card-img-top" alt="..." height="200">
            <div class="card-body">
                <h6 class="card-title fw-bold">Features</h6>
                <div>
                    <p>1. ${features[0]}</p>               
                    <p>2. ${features[1]}</p>
                    <p>3. ${features[2]}</p>
                </div>
                <hr/>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="fw-bold">${name}</h6>
                        <p>${published_in}</p>
                    </div>
                    <div>
                        <button class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        mainContainer.appendChild(div);
    });
};

const seeMoreDisplay =()=>{
    const seeMoreButton = document.getElementById('see-more-btn');
    seeMoreButton.style.display = 'none';
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res => res.json())
    .then(data => loadDisplayData(data.data.tools.slice(6,12)))
    .catch(error => console.log(error));
};