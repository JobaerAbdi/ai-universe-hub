const loadFetchData = ()=>{
    const spinner = document.getElementById('spinner-id');
    spinner.classList.remove('d-none');
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const spinner = document.getElementById('spinner-id');
        spinner.classList.add('d-none');
        loadDisplayData(data.data.tools.slice(0,6))
    })
    .catch(error => console.log(error));
};

const loadDisplayData = (allData)=>{
    const mainContainer = document.getElementById('card-container');
    allData.forEach(singleData=>{
        const {image,features,name,published_in,id} = singleData;    // width="400" height="400"
        // console.log(singleData);
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
                        <p><i class="fa-solid fa-calendar-days"></i> ${published_in}</p>
                    </div>
                    <div>
                        <button onclick="modalFetchData('${id}')" class="btn btn-primary" data-bs-toggle="modal"   data-bs-target="#modal-id">Details</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        mainContainer.appendChild(div);
    });
};

const modalFetchData = (id)=>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayModalData(data.data))
    .catch(error => console.log(error));
};


const displayModalData = (allDetailsData)=>{
    const {description,image_link,pricing,features,integrations,logo} = allDetailsData;
    console.log(features);
    console.log(allDetailsData);
    const modalContainer = document.getElementById("modal-body");
    modalContainer.innerHTML = `
            <div class="col-md-12">
                <div class="card-body">
                    <div>
                       <h5>${description}</h5>
                    </div>
                    <div class="d-flex justify-content-between"> 
                        <div class="text-center fw-bold w-25"><small>${pricing[0].price} ${pricing[0].plan}</small></div>
                        <div class="text-center fw-bold w-25"><small>${pricing[1].price} ${pricing[1].plan}</small></div>
                        <div class="text-center fw-bold w-50"><small>${pricing[2].price} ${pricing[2].plan}</small></div>
                        <div></div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                             <h5>Features</h5>
                             <li>${features}</li>               
                        </div>
                        <div>
                             <h5>integrations</h5>
                             <li>${integrations[0]}</li>               
                             <li>${integrations[1]}</li>
                             <li>${integrations[2]}</li>
                        </div>
                    </div>
                </div>

                <div class="card-footer border-0 bg-body">
                </div>
            </div>
            <div class="col-md-12 bg-info">
                <img class="img-fluid rounded-3" src="${image_link[0]}" alt="">
            </div>
    `;
}; 





/* const displayModalData = (allDetailsData)=>{
    const {description,image_link,pricing,logo} = allDetailsData;
    console.log(allDetailsData);
    const modalContainer = document.getElementById("modal-body");
    modalContainer.innerHTML = `
    <div class="card">
        <div class="row g-0">
            <div class="col-md-6">
                <div class="card-body">
                    <div>
                        <h6 class="fw-bold">${description}</h6>
                    </div>
                    <div class="d-flex justify-content-between"> 
                        <div class="text-center fw-bold"><small>${pricing[0].price} ${pricing[0].plan}</small></div>
                        <div class="text-center fw-bold"><small>${pricing[1].price} ${pricing[1].plan}</small></div>
                        <div class="text-center fw-bold"><small>${pricing[2].price} ${pricing[2].plan}</small></div>
                        <div></div>
                    </div>
                    <div></div>
               </div>
            </div>
            <div class="col-md-6 bg-danger">
                <img class="img-fluid rounded-3" src="${image_link[0]}" alt="">
            </div>
        </div>
    </div>
    `;
}; */








/* const displayModalData = (allDetailsData)=>{
    const {} = allDetailsData;
    //console.log(allDetailsData);
    document.getElementById("modal-body").innerHTML = `
    <div class= "card mb-3">
        <div class="row g-0">
            <div class="col-md-12">
                <img src=${image_url} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-12 d-flex flex-column">
                <div class="card-body">
                    <h5 class="card-title">${title} <span class="badge text-bg-warning">
                    ${others_info.is_trending ? "Trending" : "Not trending"}</span></h5>
                    <p class="card-text">
                        ${details}
                    </p>
                </div>
                <div class="card-footer border-0 bg-body d-flex justify-content-between">
                    <div class="d-flex gap-2">
                        <img src=${author.img} class="img-fluid rounded-circle" 
                        alt="..." height="40" width="40"/>
                        <div>
                            <p class="m-0 p-0">${author.name ? author.name : "Not available"}</p>
                            <p class="m-0 p-0">${author.published_date}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fas fa-eye"></i>
                        <p class="m-0 p-0">${total_view}</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fas fa-star"></i>
                        <p class="m-0 p-0">${rating.number}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}; */

const seeMoreButton =()=>{
    const seeMoreButton = document.getElementById('see-more-btn');
    seeMoreButton.style.display = 'none';
    const spinner = document.getElementById('spinner-id');
    spinner.classList.remove('d-none');
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const spinner = document.getElementById('spinner-id');
        spinner.classList.add('d-none');
        loadDisplayData(data.data.tools.slice(6,12))
    })
    .catch(error => console.log(error));
};