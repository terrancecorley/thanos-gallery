(() => {
 
    let wrapper = document.querySelector('#thanos-img__wrapper');
    let img = document.querySelector('#thanos-img');
    let name = document.querySelector('#thanos-img__name');
    let quote = document.querySelector('#thanos-img__quote');

    const randNum = () => {
        let number = Math.floor(Math.random() * 5) + 1;
        return number;
    };
    
    let imgSrc;
    let prevNum;
    const fetchImg = () => {
        fetch('https://picsum.photos/600/600/?random')
            .then(res => imgSrc = res.url)
            .then(() => {
                img.onload = () => {
                    img.classList.add('fade-in-out');
                    name.classList.add('fade-in-out');
                    quote.classList.add('fade-in-out');

                    let number = randNum();
                    while (number === prevNum) {
                        number = randNum();
                    }
                    name.textContent = names[number];
                    quote.textContent = quotes[number];

                    prevNum = number;
                };

                img.src = imgSrc;
            });
    };

    fetchImg();
    
    let names = [
        'Pickle Rick',
        'Morty',
        'Morty #537',
        'Rick',
        'Evil Rick',
        'Jared'
    ];

    let quotes = [
        'Nobody exists on purpose. Nobody belongs anywhere. We\'re all going to die. Come watch TV.',
        'Weddings are basically funerals with cake',
        'What about the reality where Hitler cured cancer, Morty? The answer is: Don\'t think about it',
        'I just killed my family! I don’t care who they were!',
        'I turned myself into a pickle. I\'m Pickle Riiiiick',
        'He\'s not a hot girl. He can\'t just bail on his life and set up shop in someone else\'s.'
    ];

    name.textContent = names[0];
    quote.textContent = quotes[0];

    const updateImg = () => {
        fetchImg();
        img.classList.remove('fade-in-out');
        name.classList.remove('fade-in-out');
        quote.classList.remove('fade-in-out');
    };

    wrapper.addEventListener('click', updateImg);

  

})();