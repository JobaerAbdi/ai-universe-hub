const loadFetchData = ()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res => res.json())
    .then(data => loadDisplayData(data.data.tools))
    .catch(error => console.log(error));
};

const loadDisplayData = (allData)=>{
    allData.forEach(singleData=>{
        console.log(singleData);
    });
};