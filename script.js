let box1 = document.querySelector('#box1');
let firstcardwidth;
let arrowbtn1 = document.querySelectorAll('#trandingmovies i');
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

//---------------------fetchTrending
const fetchData1 = (endpoint) => {
    fetch(`${base_url}${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                let li = document.createElement('li');
                li.classList.add('card');
                let div = document.createElement('div');
                div.classList.add('img');
                let img = document.createElement('img');
                img.src = `${img_base_url}${element.poster_path}`;
                img.setAttribute("draggable", "false")
                div.append(img);
                li.append(div);
                box1.append(li);
            });
            firstcardwidth = box1.querySelector('.card').offsetWidth;
        })
};
fetchData1(requests.fetchTrending);

const crauserchindren1 = [...box1.children];
let isdragging = false, startx, startscorling;
let cardperview1 = Math.round(box1.offsetWidth / firstcardwidth);
crauserchindren1.slice(-cardperview1).reverse().forEach(cards => {
    box1.insertAdjacentHTML("afterbegin", cards.outerHTML)
});
crauserchindren1.slice(0, cardperview1).forEach(cards => {
    box1.insertAdjacentHTML("beforeend", cards.outerHTML)
});
arrowbtn1.forEach((btn) => {
    btn.addEventListener('click', () => {
        box1.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth;
    });
})
const infinitscrol1 = () => {
    if (box1.scrollLeft === box1.scrollWidth - box1.offsetWidth) {
        box1.classList.add("notranslet");
        box1.scrollLeft = box1.offsetWidth;
        box1.classList.remove("notranslet");
    }
}
box1.addEventListener('scroll', infinitscrol1);





//---------------------------fetchNetflixOriginals
let box2 = document.querySelector('#box2');
let arrowbtn2 = document.querySelectorAll('#NetflixOriginals i');
const fetchData2 = (endpoint) => {
    fetch(`${base_url}${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                let li = document.createElement('li');
                li.classList.add('card');
                let div = document.createElement('div');
                div.classList.add('img');
                let img = document.createElement('img');
                img.src = `${img_base_url}${element.poster_path}`;
                img.setAttribute("draggable", "false")
                div.append(img);
                li.append(div);
                box2.append(li);
            });
            firstcardwidth = box2.querySelector('.card').offsetWidth;
        })
};
fetchData2(requests.fetchNetflixOriginals);


const crauserchindren2 = [...box2.children];
let cardperview2 = Math.round(box2.offsetWidth / firstcardwidth);
crauserchindren2.slice(-cardperview2).reverse().forEach(cards => {
    box2.insertAdjacentHTML("afterbegin", cards.outerHTML)
});
crauserchindren2.slice(0, cardperview2).forEach(cards => {
    box2.insertAdjacentHTML("beforeend", cards.outerHTML)
});
arrowbtn2.forEach((btn) => {
    btn.addEventListener('click', () => {
        box2.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth;
    });
})
const infinitscrol2 = () => {
    if (box2.scrollLeft === box2.scrollWidth - box2.offsetWidth) {
        box2.classList.add("notranslet");
        box2.scrollLeft = box2.offsetWidth;
        box2.classList.remove("notranslet");
    }
}
box2.addEventListener('scroll', infinitscrol2);




// ----------------------------fetchTopRated
let box3 = document.querySelector('#box3');
let arrowbtn3 = document.querySelectorAll('#TopRated i');
const fetchData3 = (endpoint) => {
    fetch(`${base_url}${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                let li = document.createElement('li');
                li.classList.add('card');
                let div = document.createElement('div');
                div.classList.add('img');
                let img = document.createElement('img');
                img.src = `${img_base_url}${element.poster_path}`;
                img.setAttribute("draggable", "false")
                div.append(img);
                li.append(div);
                box3.append(li);
            });
            firstcardwidth = box3.querySelector('.card').offsetWidth;
        })
};
fetchData3(requests.fetchTopRated);


const crauserchindren3 = [...box3.children];
let cardperview3 = Math.round(box3.offsetWidth / firstcardwidth);
crauserchindren3.slice(-cardperview3).reverse().forEach(cards => {
    box3.insertAdjacentHTML("afterbegin", cards.outerHTML)
});
crauserchindren3.slice(0, cardperview3).forEach(cards => {
    box3.insertAdjacentHTML("beforeend", cards.outerHTML)
});
arrowbtn3.forEach((btn) => {
    btn.addEventListener('click', () => {
        box3.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth;
    });
})
const infinitscrol3 = () => {
    if (box3.scrollLeft === box3.scrollWidth - box3.offsetWidth) {
        box3.classList.add("notranslet");
        box3.scrollLeft = box3.offsetWidth;
        box3.classList.remove("notranslet");
    }
}
box3.addEventListener('scroll', infinitscrol3);



//------------------------- fetchActionMovies

let box4 = document.querySelector('#box4');
let arrowbtn4 = document.querySelectorAll('#ActionMovies i');
const fetchData4 = (endpoint) => {
    fetch(`${base_url}${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                let li = document.createElement('li');
                li.classList.add('card');
                let div = document.createElement('div');
                div.classList.add('img');
                let img = document.createElement('img');
                img.src = `${img_base_url}${element.poster_path}`;
                img.setAttribute("draggable", "false")
                div.append(img);
                li.append(div);
                box4.append(li);
            });
            firstcardwidth = box4.querySelector('.card').offsetWidth;
        })
};
fetchData4(requests.fetchActionMovies);


const crauserchindren4 = [...box4.children];
let cardperview4 = Math.round(box4.offsetWidth / firstcardwidth);
crauserchindren4.slice(-cardperview4).reverse().forEach(cards => {
    box4.insertAdjacentHTML("afterbegin", cards.outerHTML)
});
crauserchindren4.slice(0, cardperview4).forEach(cards => {
    box4.insertAdjacentHTML("beforeend", cards.outerHTML)
});
arrowbtn4.forEach((btn) => {
    btn.addEventListener('click', () => {
        box4.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth;
    });
})
const infinitscrol4 = () => {
    if (box4.scrollLeft === box4.scrollWidth - box4.offsetWidth) {
        box4.classList.add("notranslet");
        box4.scrollLeft = box4.offsetWidth;
        box4.classList.remove("notranslet");
    }
}
box4.addEventListener('scroll', infinitscrol4);



//-------------fetchComedyMovies
let box5 = document.querySelector('#box5');
let arrowbtn5 = document.querySelectorAll('#ComedyMovies i');
const fetchData5 = (endpoint) => {
    fetch(`${base_url}${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                let li = document.createElement('li');
                li.classList.add('card');
                let div = document.createElement('div');
                div.classList.add('img');
                let img = document.createElement('img');
                img.src = `${img_base_url}${element.poster_path}`;
                img.setAttribute("draggable", "false")
                div.append(img);
                li.append(div);
                box5.append(li);
            });
            firstcardwidth = box5.querySelector('.card').offsetWidth;
        })
};
fetchData5(requests.fetchComedyMovies);


const crauserchindren5 = [...box5.children];
let cardperview5 = Math.round(box5.offsetWidth / firstcardwidth);
crauserchindren5.slice(-cardperview5).reverse().forEach(cards => {
    box5.insertAdjacentHTML("afterbegin", cards.outerHTML)
});
crauserchindren5.slice(0, cardperview5).forEach(cards => {
    box5.insertAdjacentHTML("beforeend", cards.outerHTML)
});
arrowbtn5.forEach((btn) => {
    btn.addEventListener('click', () => {
        box5.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth;
    });
})
const infinitscrol5 = () => {
    if (box5.scrollLeft === box5.scrollWidth - box5.offsetWidth) {
        box5.classList.add("notranslet");
        box5.scrollLeft = box5.offsetWidth;
        box5.classList.remove("notranslet");
    }
}
box5.addEventListener('scroll', infinitscrol5);



//----------------------- fetchHorrorMovies



let box6 = document.querySelector('#box6');
let arrowbtn6 = document.querySelectorAll('#HorrorMovies i');
const fetchData6 = (endpoint) => {
    fetch(`${base_url}${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                let li = document.createElement('li');
                li.classList.add('card');
                let div = document.createElement('div');
                div.classList.add('img');
                let img = document.createElement('img');
                img.src = `${img_base_url}${element.poster_path}`;
                img.setAttribute("draggable", "false")
                div.append(img);
                li.append(div);
                box6.append(li);
            });
            firstcardwidth = box6.querySelector('.card').offsetWidth;
        })
};
fetchData6(requests.fetchHorrorMovies);


const crauserchindren6 = [...box6.children];
let cardperview6 = Math.round(box6.offsetWidth / firstcardwidth);
crauserchindren6.slice(-cardperview6).reverse().forEach(cards => {
    box6.insertAdjacentHTML("afterbegin", cards.outerHTML)
});
crauserchindren6.slice(0, cardperview6).forEach(cards => {
    box6.insertAdjacentHTML("beforeend", cards.outerHTML)
});
arrowbtn6.forEach((btn) => {
    btn.addEventListener('click', () => {
        box6.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth;
    });
})
const infinitscrol6 = () => {
    if (box6.scrollLeft === box6.scrollWidth - box6.offsetWidth) {
        box6.classList.add("notranslet");
        box6.scrollLeft = box6.offsetWidth;
        box6.classList.remove("notranslet");
    }
}
box6.addEventListener('scroll', infinitscrol6);



//------------------------------fetchRomanceMovies


let box7 = document.querySelector('#box7');
let arrowbtn7 = document.querySelectorAll('#RomanceMovies i');
const fetchData7 = (endpoint) => {
    fetch(`${base_url}${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                let li = document.createElement('li');
                li.classList.add('card');
                let div = document.createElement('div');
                div.classList.add('img');
                let img = document.createElement('img');
                img.src = `${img_base_url}${element.poster_path}`;
                img.setAttribute("draggable", "false")
                div.append(img);
                li.append(div);
                box7.append(li);
            });
            firstcardwidth = box7.querySelector('.card').offsetWidth;
        })
};
fetchData7(requests.fetchRomanceMovies);


const crauserchindren7 = [...box7.children];
let cardperview7 = Math.round(box7.offsetWidth / firstcardwidth);
crauserchindren7.slice(-cardperview7).reverse().forEach(cards => {
    box7.insertAdjacentHTML("afterbegin", cards.outerHTML)
});
crauserchindren7.slice(0, cardperview7).forEach(cards => {
    box7.insertAdjacentHTML("beforeend", cards.outerHTML)
});
arrowbtn7.forEach((btn) => {
    btn.addEventListener('click', () => {
        box7.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth;
    });
})
const infinitscrol7 = () => {
    if (box7.scrollLeft === box7.scrollWidth - box7.offsetWidth) {
        box7.classList.add("notranslet");
        box7.scrollLeft = box7.offsetWidth;
        box7.classList.remove("notranslet");
    }
}
box7.addEventListener('scroll', infinitscrol7);




//----------------------fetchDocumentaries



let box8 = document.querySelector('#box8');
let arrowbtn8 = document.querySelectorAll('#Documentaries i');
const fetchData8 = (endpoint) => {
    fetch(`${base_url}${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                let li = document.createElement('li');
                li.classList.add('card');
                let div = document.createElement('div');
                div.classList.add('img');
                let img = document.createElement('img');
                img.src = `${img_base_url}${element.poster_path}`;
                img.setAttribute("draggable", "false")
                div.append(img);
                li.append(div);
                box8.append(li);
            });
            firstcardwidth = box8.querySelector('.card').offsetWidth;
        })
};
fetchData8(requests.fetchDocumentaries);


const crauserchindren8 = [...box8.children];
let cardperview8 = Math.round(box8.offsetWidth / firstcardwidth);
crauserchindren8.slice(-cardperview8).reverse().forEach(cards => {
    box7.insertAdjacentHTML("afterbegin", cards.outerHTML)
});
crauserchindren8.slice(0, cardperview8).forEach(cards => {
    box8.insertAdjacentHTML("beforeend", cards.outerHTML)
});
arrowbtn8.forEach((btn) => {
    btn.addEventListener('click', () => {
        box8.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth;
    });
})
const infinitscrol8 = () => {
    if (box8.scrollLeft === box8.scrollWidth - box8.offsetWidth) {
        box8.classList.add("notranslet");
        box8.scrollLeft = box8.offsetWidth;
        box8.classList.remove("notranslet");
    }
}
box8.addEventListener('scroll', infinitscrol8);



//---------------------------------header


let img = document.querySelector('#img');
let span = document.querySelector('#spans');
let email = document.querySelector('#email');
let gender = document.querySelector('#gender');

let usergenerator = async () => {
    const usedata = await fetch(`https://randomuser.me/api/`);
    let answershow = await usedata.json();
    console.log(answershow)
    answershow.results.forEach((elements) => {
        img.src = `${elements.picture.large}`;
        email.innerHTML = `${elements.email}`
        let names = `${elements.name.first} ${elements.name.last}`;
        span.innerHTML = names;

    });

}
usergenerator();