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
        const {image,features,name,published_in,id} = singleData;   
        //console.log(singleData);
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
    const {description,image_link,pricing,features,integrations,input_output_examples,accuracy} = allDetailsData;
    let featureName = [];
    for(let feature in features){
        let featureItems = features[feature].feature_name;
        featureName.push(featureItems);
    };
    console.log(allDetailsData);
    const modalContainer = document.getElementById("modal-body");
    modalContainer.innerHTML = `
        <div class="row g-0">
           <div class="col-sm-12 col-md-6 px-4 d-flex flex-column border border-danger rounded-3">
                <div class="card-body">
                    <div class="mt-3">
                       <h5 class="fw-bold">${description}</h5>
                    </div>
                    <div class="d-lg-flex flex-row justify-content-between mt-5"> 
                        <div class="text-center fw-bold bg-body-secondary rounded-3 p-4 text-primary">
                        <small>${pricing[0].price ? pricing[0].price : 'Free of Cost'} ${pricing[0].plan}</small></div>
                        <div class="text-center fw-bold bg-body-secondary rounded-3 p-4 mx-2 text-info">
                        <small>${pricing[1].price ? pricing[1].price : 'Free of Cost'} ${pricing[1].plan}</small></div>
                        <div class="text-center fw-bold bg-body-secondary rounded-3 p-4 text-danger">
                        <small>${pricing[2].price ? pricing[2].price : 'Free of Cost'} ${pricing[2].plan}</small></div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                             <h5 class="fw-bold">Features</h5>
                             <li>${featureName[0]}</li>               
                             <li>${featureName[1]}</li>               
                             <li>${featureName[2]}</li>               
                        </div>
                        <div>
                             <h5 class="fw-bold">integrations</h5>
                             <li>${integrations[0] ? integrations[0] : 'No Data Found'}</li>               
                             <li>${integrations[1] ? integrations[1] : 'No Data Found'}</li>
                             <li>${integrations[2] ? integrations[2] : 'No Data Found'}</li>
                             <li>${integrations[3] ? integrations[3] : 'No Data Found'}</li>
                             <li>${integrations[4] ? integrations[4] : 'No Data Found'}</li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 px-4">
                <div class="position-relative">
                    <img class="img-fluid rounded-3" src="${image_link[0]}" alt="">
                    <span id="accuracy" class="badge text-bg-danger position-absolute top-0 end-0 p-2">${accuracy.score ? accuracy.score : 'no'} accuracy</span>
                </div>
                <div class="mx-4 w-75 mx-auto mt-4 text-center">
                    <h5 class="fw-bold">${input_output_examples[0].input}</h5>
                    <p>${input_output_examples[0].output ? input_output_examples[0].output : 'No! Not Yet! Take a Break!!!'}</p>
                </div>
            </div>
        </div>
    `;
}; 


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