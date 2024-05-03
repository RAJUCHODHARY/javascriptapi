let box = document.querySelector('#box1');
        let box2 = document.querySelector('#box2');
        let box3 = document.querySelector('#box3');
        let box4 = document.querySelector('#box4');
        let box5 = document.querySelector('#box5');
        let box6 = document.querySelector('#box6');
        let box7 = document.querySelector('#box7');
        let box8 = document.querySelector('#box8');

        let imgs = document.querySelector('img')
        const API_KEY = 'ed087ffb877a789a877a41f2f77b44ca';
        const base_url = 'https://api.themoviedb.org/3/';
        const img_base_url = 'https://image.tmdb.org/t/p/original/';
        const requests = {
            fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
            fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
            fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
            fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
            fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
            fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
            fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
            fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
        };

       
        let imagearray=[];
        const fetchData1 = (endpoint) => {

            fetch(`${base_url}${endpoint}`)
                .then((res) => res.json())
                .then((data) => {
                    data.results.forEach(element => {
                        let divs = document.createElement('div');
                        divs.classList.add('divs')
                        let img = document.createElement('img');
                        img.src = `${img_base_url}${element.poster_path}`;
                        img.classList.add('img')
                        divs.append(img);
                        box1.append(divs);
                    });
                })
        };
        fetchData1(requests.fetchTrending)
        

        const fetchData2 = (endpoint) => {

            fetch(`${base_url}${endpoint}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.results)
                    data.results.forEach(element => {
                        let divs = document.createElement('div');
                        divs.classList.add('divs')
                        let img = document.createElement('img');
                        img.src = `${img_base_url}${element.poster_path}`;
                        img.classList.add('img')
                        divs.append(img);
                        box2.append(divs);
                    });
                })
        };
        fetchData2(requests.fetchNetflixOriginals)
        
        
        const fetchData3 = (endpoint) => {

fetch(`${base_url}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach(element => {
            let divs = document.createElement('div');
            divs.classList.add('divs')
            let img = document.createElement('img');
            img.src = `${img_base_url}${element.poster_path}`;
            img.classList.add('img')
            divs.append(img);
            box3.append(divs);
        });
    })
};
fetchData3(requests.fetchTopRated)


const fetchData4 = (endpoint) => {

fetch(`${base_url}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach(element => {
            let divs = document.createElement('div');
            divs.classList.add('divs')
            let img = document.createElement('img');
            img.src = `${img_base_url}${element.poster_path}`;
            img.classList.add('img')
            divs.append(img);
            box4.append(divs);
        });
    })
};
fetchData4(requests.fetchActionMovies)



const fetchData5 = (endpoint) => {

fetch(`${base_url}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach(element => {
            let divs = document.createElement('div');
            divs.classList.add('divs')
            let img = document.createElement('img');
            img.src = `${img_base_url}${element.poster_path}`;
            img.classList.add('img')
            divs.append(img);
            box5.append(divs);
        });
    })
};
fetchData5(requests.fetchComedyMovies)



const fetchData6 = (endpoint) => {

fetch(`${base_url}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach(element => {
            let divs = document.createElement('div');
            divs.classList.add('divs')
            let img = document.createElement('img');
            img.src = `${img_base_url}${element.poster_path}`;
            img.classList.add('img')
            divs.append(img);
            box6.append(divs);
        });
    })
};
fetchData6(requests.fetchHorrorMovies)



const fetchData7 = (endpoint) => {

fetch(`${base_url}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach(element => {
            let divs = document.createElement('div');
            divs.classList.add('divs')
            let img = document.createElement('img');
            img.src = `${img_base_url}${element.poster_path}`;
            img.classList.add('img')
            divs.append(img);
            box7.append(divs);
        });
    })
};
fetchData7(requests.fetchRomanceMovies)


const fetchData8 = (endpoint) => {

fetch(`${base_url}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach(element => {
            let divs = document.createElement('div');
            divs.classList.add('divs')
            let img = document.createElement('img');
            img.src = `${img_base_url}${element.poster_path}`;
            img.classList.add('img')
            divs.append(img);

            box8.append(divs);
        });
    })
};
fetchData8(requests.fetchDocumentaries)