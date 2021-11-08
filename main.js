// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.


// struttura dati
const post = [
    {
        author : {
            name : 'nome1',
            avatar : 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        date : '1 mese fa',
        text : 'sdkjfhksdjhfksjdhfksjhdfshoiweoijlksdflkjsdfljslkdjflskjdfljsdf',
        Image : 'https://picsum.photos/id/237/600/350',
        likes : 80,
    },
    {
        author : {
            name : 'nome1',
            avatar : 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        date : '1 mese fa',
        text : 'sdkjfhksdjhfksjdhfksjhdfshoiweoijlksdflkjsdfljslkdjflskjdfljsdf',
        Image : 'https://picsum.photos/id/237/600/350',
        likes : 80,
    },
    {
        author : {
            name : 'nome1',
            avatar : 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        date : '1 mese fa',
        text : 'sdkjfhksdjhfksjdhfksjhdfshoiweoijlksdflkjsdfljslkdjflskjdfljsdf',
        Image : 'https://picsum.photos/id/237/600/350',
        likes : 80,
    },
    {
        author : {
            name : 'nome1',
            avatar : 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        date : '1 mese fa',
        text : 'sdkjfhksdjhfksjdhfksjhdfshoiweoijlksdflkjsdfljslkdjflskjdfljsdf',
        Image : 'https://picsum.photos/id/237/600/350',
        likes : 80,
    },
    {
        author : {
            name : 'nome1',
            avatar : 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        date : '1 mese fa',
        text : 'sdkjfhksdjhfksjdhfksjhdfshoiweoijlksdflkjsdfljslkdjflskjdfljsdf',
        Image : 'https://picsum.photos/id/237/600/350',
        likes : 80,
    },
]

// render dei post
// - ottenere container post
// - markup post
// - aggiunta post a container

const container = document.querySelector('.posts-list');

draw_post(post, container);

// aggiunta like (++)
const like_buttons = document.querySelectorAll('.like-button');

for (let i = 0; i < like_buttons.length; i++) {
    const btn = like_buttons[i];
    btn.addEventListener('click', (event) => {
        // rimuovere il comportamento di default del click
        event.preventDefault();

        // ottenere il padre
        console.log('Parent', btn.closest('.likes'));
        const like_parent = btn.closest('.likes');
        const like_counter = like_parent.querySelector('.js-likes-counter');

        // ottenere valore like attuale
        let actual_likes = parseInt(like_counter.innerText);

        if (!btn.classList.contains('like-button--liked') ) {
            btn.classList.add('like-button--liked');

            like_counter.innerText = ++actual_likes;
        } else {
            btn.classList.remove('like-button--liked');

            like_counter.innerText = --actual_likes;
        }
    });
    
}

// gen post items
function draw_post(post, container) {
    for (let i = 0; i < post.length; i++) {
        const card = post[i];
        
        // destrutturazione dell'oggetto
        const {author, date, text, Image, likes} = card

        container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${author.avatar}" alt="${author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text}</div>
            <div class="post__image">
                <img src="${Image}" alt="${author.name}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `;
    }
}


















