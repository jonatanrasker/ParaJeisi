document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const loader = document.querySelector('.loader');

    let cards = [];
    let currentIndex = 0;

    function loadCards() {
        loader.style.display = 'block';
        setTimeout(() => {
            const mockData = [
                {
                    id: 1,
                    text: "Utilize as setas de navegação",
                    color: "#45B7D1", 
                    image: "img0.jpeg",
                },
                {
                    id: 2,
                    text: "Desde que te conheci, você foi motivo de fascinação. Tudo em você me chamava a atenção positivamente.",
                    color: "#000", 
                    image: "img1.jpg",
                    audio: "music1.mp3"
                },
                {
                    id: 3,
                    text: "Ir te buscar no Noara foi a melhor decisão irresponsável que já tomei. " + 
                     "Me deu a oportunidade de conhecer você, te ver, te ouvir e começar a me apaixonar.",
                    color: "#000",
                    image: "img2.jpg",
                    audio: "music2.mp3"
                },
                { id: 4, 
                    text: "Desde o início - até pelos avisos - sabia que havia grande chance de tudo ser bastante temporário. " +
                    "Então, quis aproveitar ao máximo com você e me preparar psicologicamente para o inevitável fim.", 
                    color: "#45B7D1",
                    image: "img3.png",
                    audio: "music3.mp3"
                },
                { id: 5, 
                    text: "Mas quanto mais nos aproximavamos mais me apaixonava por você, toda vez que saiamos eu amava mais de te ouvir tagarelar, a cada promessa que fazia para você reforçava a ideia de tempo indefinido, quando você começou a falar de mim para sua mãe e suas melhores amigas me fez acreditar que aquele sonho podia se tornal real, que podiamos viver juntos e eu poderia dar e demonstrar todo amor que sinto por você", 
                    color: "#FFBE0B",
                    image: "img4.jpg",
                    audio: "music4.mp3" 
                },
                { id: 6, 
                    text: "Eu me imaginei com você quando me apresentou ao Tennessee Whiskey. Pude nos ver dançando juntinhos, bem devagar, entre goles de vinho - e ali desejei com todas as forças viver aquele momento.", 
                    color: "#FF6B6B",
                    image: "img5.jpg",
                    audio: "music5.mp3"  
                },
                { id: 7, 
                    text: "Naquela noite em que dormimos juntos, quando você me disse 'eu te amo' pela primeira vez, um novo universo nasceu dentro de mim. Você se tornou parte permanente da minha existência. Eu também te amava - e era infinitamente bom poder te amar.", 
                    color: "#4ECDC4",
                    image: "img6.jpg",
                    audio: "music6.mp3"  
                },
                { id: 8, 
                    text: "Durante aquele horrível acidente, você esteve ao meu lado como minha mulher - e naquele exato momento, eu desejei com toda força que você fosse realmente minha mulher para sempre. Decidi que faria tudo para te ter ao meu lado, independente do que fosse necessário: do que eu tivesse que mudar, do que precisasse melhorar em mim. Você era meu maior tesouro, e eu juraria a vida inteira demonstrar o quanto você significa para mim, Ser para sempre o que você foi pra mim naquela noite.", 
                    color: "#45B7D1",
                    image: "img7.jpg",
                    audio: "music7.mp3"   
                },
                { id: 9, 
                    text: "Falei de você à minha família inteira. A defendi acima de tudo - desmontei cada mentira, rebati cada absurdo que tentaram dizer sobre você. Deixei claro, sem nenhuma dúvida: você era a minha escolha definitiva.", 
                    color: "#FFBE0B",
                    image: "img8.jpg",
                    audio: "music8.mp3"  
                },
                { id: 10, 
                    text: "Infelizmente, como todo sonho, o meu também encontrou seu fim. Após o acidente, dia após dia, sentia você se esvair entre meus dedos - uma luta impossível contra o inevitável. Eu poderia reinventar-me por completo, enfrentar todos os obstáculos do mundo... mas jamais controlar o que seu coração decidia sentir. Então chegou o dia que tanto temia, trazendo consigo uma dor além de qualquer medida.", 
                    color: "#FF9F1C",
                    image: "img9.jpg",
                    audio: "music9.mp3"   
                },
                { id: 11, 
                    text: "Mas nunca, nem por um instante, consegui deixar de te amar. E não me arrependo de ter mergulhado de cabeça nesse sentimento. Você transformou meu feriado no Noara em algo mágico, criou a experiência gastronômica mais especial num simples lanche, fez de uma sessão de Minecraft meu momento cinematográfico favorito. Encheu meus dias de músicas que agora carrego no coração e de memórias que guardo como tesouros. Amar você foi uma das melhores coisas da minha vida - e sou eternamente grato por termos vivido, mesmo que por pouco tempo, essa história juntos. Eu Amei te amar.", 
                    color: "#FF9F1C",
                    image: "img10.jpg",
                    audio: "music10.mp3"   
                },
                { id: 12, 
                    text: "Cada 'eu te amo' que escapava 'do nada' nunca foi à toa - era meu coração transbordando depois de horas te amando em silêncio. Se tenho algum arrependimento, é dos meus erros, dos momentos em que falhei contigo. Mas saiba que em cada instante, mesmo quando tropeçava, estava dando tudo de mim por seu amor.", 
                    color: "#FF6B6B",
                    image: "img11.jpg",
                    audio: "music11.mp3" 
                },
                { id: 13, 
                    text: "Criei este site porque sempre sonhei em construir algo assim para você - claro que imaginava algo diferente, mais alegre, mas precisava dizer o quanto você significa para mim e expressar minha saudade desse nosso capítulo romântico. Peço desculpas pelos erros de português ou escolhas estranhas na construção: sou desenvolvedor backend, frontend não é minha praia, e decidi fazer tudo manualmente, sem IA. Queria que fosse genuíno, cada linha de código escrita por mim para você.", 
                    color: "#4ECDC4",
                    image: "img12.jpg",
                    audio: "music12.mp3" 
                },
                { id: 14, 
                    text: "Se o óbvio se confirmar e este for mesmo nosso adeus, leve isso: você foi meu amor definitivo. Qualquer outro sentimento será apenas um 'quase você' — porque sua essência, seu rosto, seu ser são incomparáveis. Fui sortudo demais ao cruzar com algo tão perfeito, mesmo que por pouco tempo." +
                        " Sete segundos do seu abraço salvavam sete dias da minha vida.", 
                    color: "#45B7D1",
                    image: "img13.jpg",
                    audio: "music13.mp3" 
                },
                { id: 15, 
                    text: "Eu te amo, Jeisi🖤", 
                    color: "#FFBE0B",
                    image: "img14.jpeg",
                    audio: "music14.mp3" 
                }
            ];
            renderCards(mockData);
            loader.style.display = 'none';
        }, 1000);
    }

    let audioElements = [];

    function renderCards(data) {
        cardContainer.innerHTML = '';
        audioElements = [];
        cards = data.map((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.backgroundImage = `url(${item.image})`;

            const text = document.createElement('p');
            text.textContent = item.text;
            card.appendChild(text);

            // Cria o player de áudio oculto
            const audio = new Audio(item.audio);
            audio.preload = "auto";
            audioElements.push(audio);

            card.style.zIndex = data.length - index;
            cardContainer.appendChild(card);
            return card;
        });
        updateCards();
    }

    

    // Atualiza a posição dos cards
    function updateCards() {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.style.transform = 'translateY(0) rotateY(0deg)';
                card.style.opacity = '1';
    
                // Pausa todos os outros áudios
                audioElements.forEach((audio, i) => {
                    if (i !== index) {
                        audio.pause();
                        audio.currentTime = 0;
                    }
                });
    
                // Toca o áudio do card atual
                audioElements[index].play().catch((err) => {
                    // Evita erro se autoplay estiver bloqueado
                    console.warn('Autoplay bloqueado ou erro de reprodução:', err);
                });
    
            } else if (index < currentIndex) {
                card.style.transform = 'translateY(-100%) rotateY(-30deg)';
                card.style.opacity = '0';
            } else {
                card.style.transform = 'translateY(100%) rotateY(30deg)';
                card.style.opacity = '0';
            }
        });
    }
    
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCards();
            return
        }

        if (currentIndex == cards.length - 1) {
            const proceed = confirm("Deseja seguir?");
            if (proceed) {
                window.location.href = "../convite/index.html";
            }
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCards();
        }
    });

    const hammer = new Hammer(cardContainer);
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

    hammer.on('swipeup', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCards();
        }
    });

    hammer.on('swipedown', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCards();
        }
    });

    loadCards();
});