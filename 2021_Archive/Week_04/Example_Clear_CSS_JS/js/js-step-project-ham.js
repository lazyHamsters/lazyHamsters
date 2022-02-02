document.addEventListener('DOMContentLoaded', onReady);

function onReady() {

    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".main-menu a");

    /**
     * @desc  функція, яка перемикання пунктів меню в Header по 'Click'.
     * @returns  null та відповідне візуальне підключення.
     */


    function mouseenterFunc() {
        if (!this.parentNode.classList.contains("active")) {
            for (let i = 0; i < links.length; i++) {
                if (links[i].parentNode.classList.contains("active")) {
                    links[i].parentNode.classList.remove("active");
                }
                links[i].style.opacity = "0.75";
                links[i].style.color = "white";
            }

            this.parentNode.classList.add("active");
            this.style.opacity = "1";
            this.style.color = '#18cfab';

            const width = this.getBoundingClientRect().width;
            const height = this.getBoundingClientRect().height;
            const left = this.getBoundingClientRect().left + window.pageXOffset;
            const top = this.getBoundingClientRect().top + window.pageYOffset;
            //const color = colors[Math.floor(Math.random() * colors.length)];

            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            target.style.borderColor = '#18cfab';
            target.style.transform = "none";
        }
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (e) => e.preventDefault());
        links[i].addEventListener("mouseenter", mouseenterFunc);
    }

    function resizeFunc() {
        const active = document.querySelector(".main-menu li.active");

        if (active) {
            const left = active.getBoundingClientRect().left + window.pageXOffset;
            const top = active.getBoundingClientRect().top + window.pageYOffset;

            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
        }
    }

    window.addEventListener("resize", resizeFunc);


    const liTabsTitle = document.getElementsByClassName('tabs-title');
    const liTabsContent = document.getElementsByClassName('tabs-title-content');
    const ulMenu = document.getElementsByClassName('tabs')[0];
    ulMenu.addEventListener('click', onClick);


    /**
     * @desc  функція, яка перемикання пунктів меню в Our Services по 'Click'.
     * @returns  null та відповідне візуальне підключення.
     */

    function onClick(event) {
        for (let i = 0; i < liTabsTitle.length; i++) {
            if (liTabsTitle[i] === event.target) {
                liTabsTitle[i].classList.add('active');
                liTabsContent[i].classList.add('visible');
            } else {
                liTabsTitle[i].classList.remove('active');
                liTabsContent[i].classList.remove('visible');
            }
        }
    }


    const liTabsTitleSecond = document.getElementsByClassName('tabs-second-title');

    const blockServices = document.getElementsByClassName('block');

    const ulMenuSecond = document.getElementsByClassName('tabs-second')[0];
    ulMenuSecond.addEventListener('click', onClickSecond);

    /**
     * @desc  функція, яка перемикання пунктів в Our Amazing Work меню по 'Click'.
     * @returns  null та відповідне візуальне підключення.
     */
    let serviceNumber = 0;

    function onClickSecond(event) {

        for (let i = 0; i < liTabsTitleSecond.length; i++) {
            if (liTabsTitleSecond[i] === event.target) {
                liTabsTitleSecond[i].classList.add('active-second');
                serviceNumber = i;
            } else {
                liTabsTitleSecond[i].classList.remove('active-second');
            }
        }
        switch (serviceNumber) {
            case 0: {
                for (let j = 0; j < blockServices.length; j++) {
                    blockServices[j].classList.add('visible');
                }
            }
                break;
            case 1: {
                for (let j = 0; j < blockServices.length; j++) {
                    if (blockServices[j].classList.contains('graphic-design')) {
                        blockServices[j].classList.add('visible');
                    } else {
                        blockServices[j].classList.remove('visible');
                    }
                }
                break;
            }
            case 2: {
                for (let j = 0; j < blockServices.length; j++) {
                    if (blockServices[j].classList.contains('web-design')) {
                        blockServices[j].classList.add('visible');
                    } else {
                        blockServices[j].classList.remove('visible');
                    }
                }
                break;
            }
            case 3: {
                for (let j = 0; j < blockServices.length; j++) {
                    if (blockServices[j].classList.contains('landing-page')) {
                        blockServices[j].classList.add('visible');
                    } else {
                        blockServices[j].classList.remove('visible');
                    }
                }
                break;

            }
            case 4: {
                for (let j = 0; j < blockServices.length; j++) {
                    if (blockServices[j].classList.contains('word-press')) {
                        blockServices[j].classList.add('visible');
                    } else {
                        blockServices[j].classList.remove('visible');
                    }
                }
                break;
            }
        }
    }

    const btnLoadMoreFirst = document.getElementsByClassName('btn-load-more')[0];
    btnLoadMoreFirst.addEventListener('click', onClickBtnFirst);
    let countBtnFirst = 0;
    const blockArray = [
        ['web-design', 'img/Our_Amazing_Work/Web_Design/web-design-1.jpg', 'Web Design'],
        ['landing-page', 'img/Our_Amazing_Work/Landing_Pages/landing-page-1.jpg', 'Landing Page'],
        ['graphic-design', 'img/Our_Amazing_Work/Graphic_Design/graphic-design-1.jpg', 'Graphic Design'],
        ['landing-page', 'img/Our_Amazing_Work/Landing_Pages/landing-page-3.jpg', 'Landing Page'],
        ['web-design', 'img/Our_Amazing_Work/Web_Design/web-design-2.jpg', 'Web Design'],
        ['graphic-design', 'img/Our_Amazing_Work/Graphic_Design/graphic-design-2.jpg', 'Graphic Design'],
        ['word-press', 'img/Our_Amazing_Work/Wordpress/wordpress-9.png', 'Wordpress'],
        ['landing-page', 'img/Our_Amazing_Work/Landing_Pages/landing-page-2.jpg', 'Landing Page'],
        ['word-press', 'img/Our_Amazing_Work/Wordpress/wordpress-3.jpg', 'Wordpress'],
        ['landing-page', 'img/Our_Amazing_Work/Landing_Pages/landing-page-5.jpg', 'Landing Page'],
        ['web-design', 'img/Our_Amazing_Work/Web_Design/web-design-3.jpg', 'Web Design'],
        ['graphic-design', 'img/Our_Amazing_Work/Graphic_Design/graphic-design-9.jpg', 'Graphic Design'],
        ['word-press', 'img/Our_Amazing_Work/Wordpress/wordpress-5.jpg', 'Wordpress'],
        ['landing-page', 'img/Our_Amazing_Work/Landing_Pages/landing-page-6.jpg', 'Landing Page'],
        ['graphic-design', 'img/Our_Amazing_Work/Graphic_Design/graphic-design-3.jpg', 'Graphic Design'],
        ['word-press', 'img/Our_Amazing_Work/Wordpress/wordpress-6.jpg', 'Wordpress'],
        ['web-design', 'img/Our_Amazing_Work/Web_Design/web-design-4.jpg', 'Web Design'],
        ['word-press', 'img/Our_Amazing_Work/Wordpress/wordpress-7.jpg', 'Wordpress'],
        ['graphic-design', 'img/Our_Amazing_Work/Graphic_Design/graphic-design-4.jpg', 'Graphic Design'],
        ['landing-page', 'img/Our_Amazing_Work/Landing_Pages/landing-page-7.jpg', 'Landing Page'],
        ['web-design', 'img/Our_Amazing_Work/Web_Design/web-design-5.jpg', 'Web Design'],
        ['graphic-design', 'img/Our_Amazing_Work/Graphic_Design/graphic-design-5.jpg', 'Graphic Design'],
        ['word-press', 'img/Our_Amazing_Work/Wordpress/wordpress-8.jpg', 'Wordpress'],
        ['web-design', 'img/Our_Amazing_Work/Web_Design/web-design-6.jpg', 'Web Design'],
        ['landing-page', 'img/Our_Amazing_Work/Landing_Pages/landing-page-8.jpg', 'Landing Page'],
        ['graphic-design', 'img/Our_Amazing_Work/Graphic_Design/graphic-design-6.jpg', 'Graphic Design'],
        ['web-design', 'img/Our_Amazing_Work/Web_Design/web-design-7.jpg', 'Web Design'],
        ['landing-page', 'img/Our_Amazing_Work/Landing_Pages/landing-page-4.jpg', 'Landing Page'],
        ['web-design', 'img/Our_Amazing_Work/Web_Design/web-design-8.jpg', 'Web Design'],
        ['word-press', 'img/Our_Amazing_Work/Wordpress/wordpress-4.jpg', 'Wordpress'],
        ['graphic-design', 'img/Our_Amazing_Work/Graphic_Design/graphic-design-7.jpg', 'Graphic Design'],
        ['word-press', 'img/Our_Amazing_Work/Wordpress/wordpress-1.jpg', 'Wordpress'],
        ['web-design', 'img/Our_Amazing_Work/Web_Design/web-design-9.jpg', 'Web Design'],
        ['landing-page', 'img/Our_Amazing_Work/Landing_Pages/landing-page-9.jpg', 'Landing Page'],
        ['word-press', 'img/Our_Amazing_Work/Wordpress/wordpress-2.jpg', 'Wordpress'],
        ['graphic-design', 'img/Our_Amazing_Work/Graphic_Design/graphic-design-8.jpg', 'Graphic Design'],

    ];

    /**
     * @desc  функція, яка виведення 12 блоків в поле Our Amazing Work  по 'Click' на кнопці 'Load More';
     * a, b - порядкові номера елементів масиву з блоками, які необхідно виводити;
     * string - назва класу;
     * @returns  виведення 12 (або частини в залежності від вибору в меню) блоків в поле Our Amazing Work  по 'Click'
     *           на кнопці 'Load More' з урахуванням вибору в меню.
     */

    function addBlockToAmazingWork(a, b) {
        for (let i = a; i < b; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = `block ${blockArray[i][0]} visible`;
            newDiv.innerHTML = `<img src="${blockArray[i][1]}" alt="Creative design"><div class="head-part"></div>
                            <div class="main-part"><div class="icons"><a href="#">
                            <div class="first-icon"><i class="fas fa-link"></i></div></a>
                            <a href="#"><div class="second-icon"><i class="fas fa-search"></i></div></a></div>
                            <div class="context-logo">creative design</div>
                            <div class="service-class">${blockArray[i][2]}</div></div>`;
            mainDivBlock.appendChild(newDiv);
        }
        switch (serviceNumber) {
            case 0: {
                for (let j = 0; j < blockServices.length; j++) {
                    blockServices[j].classList.add('visible');
                }
            }
                break;
            case 1: {
                for (let j = 0; j < blockServices.length; j++) {
                    if (blockServices[j].classList.contains('graphic-design')) {
                        blockServices[j].classList.add('visible');
                    } else {
                        blockServices[j].classList.remove('visible');
                    }
                }
                break;
            }
            case 2: {
                for (let j = 0; j < blockServices.length; j++) {
                    if (blockServices[j].classList.contains('web-design')) {
                        blockServices[j].classList.add('visible');
                    } else {
                        blockServices[j].classList.remove('visible');
                    }
                }
                break;
            }
            case 3: {
                for (let j = 0; j < blockServices.length; j++) {
                    if (blockServices[j].classList.contains('landing-page')) {
                        blockServices[j].classList.add('visible');
                    } else {
                        blockServices[j].classList.remove('visible');
                    }
                }
                break;
            }
            case 4: {
                for (let j = 0; j < blockServices.length; j++) {
                    if (blockServices[j].classList.contains('word-press')) {
                        blockServices[j].classList.add('visible');
                    } else {
                        blockServices[j].classList.remove('visible');
                    }
                }
                break;
            }
        }


    }

    const mainDivBlock = document.getElementById('our-services');
    const btnLoadMore = document.getElementsByClassName('effects-remove');
    addBlockToAmazingWork(1, 12);

    /**
     * @desc  функція, яка встановлення / зняття видимості з кнопки чи анімації по 'Click' на кнопці 'Load More';
     * a, b - порядкові номера контейнерів классу "effects-remove";
     * string - назва класу;
     * @returns  встановлює відміняє клас "string" на вказаних елементах классу "effects-remove".
     */
    function changeVisibilityForBtnLoadMore(a, b, string) {
        if (a === b) {
            btnLoadMore[a].classList.add(`${string}`);
        } else {
            btnLoadMore[a].classList.add(`${string}`);
            btnLoadMore[b].classList.remove(`${string}`);
        }
    }


    let myDay = new Date().toString().substr(8, 2);
    let myMonth = new Date().toString().substr(4, 3);

    const postMouseOver = document.getElementsByClassName('post');
    const postDataImg = document.getElementsByClassName('data-img');
    const blockBreakNews = document.getElementById('temp-id');
    blockBreakNews.addEventListener('mouseover', onMouseover);

    /**
     * @desc  функція, зміни дати в розділі Breaking News по 'MouseOver'.
     * @returns  null та відповідне візуальне підключення.
     */

    function onMouseover(event) {
        for (let i = 0; i < postMouseOver.length; i++) {
            if (postMouseOver[i] === event.target) {
                postDataImg[i].innerHTML = `${myDay} &nbsp ${myMonth}`;
                console.log(`look i ${i}, look inner i = ${myDay}`);
            }
        }
    }


    /**
     * @desc  функція, яка перемикання пунктів в Our Amazing Work меню по 'Click'.
     * @returns  null та відповідне візуальне підключення.
     */

    function onClickBtnFirst() {
        countBtnFirst++;

        switch (countBtnFirst) {
            case 1: {
                changeVisibilityForBtnLoadMore(0, 1, 'effects-remove-active');
                setTimeout(() => changeVisibilityForBtnLoadMore(1, 0, 'effects-remove-active'), 3000);
                setTimeout(() => addBlockToAmazingWork(12, 24), 3000);
                let tempId = setTimeout(() => changeVisibilityForBtnLoadMore(1, 0, 'effects-remove-active'), 3000);
                clearTimeout(tempId);
                tempId = setTimeout(() => addBlockToAmazingWork(12, 24), 3000);
                clearTimeout(tempId);
                break;
            }
            case 2: {
                changeVisibilityForBtnLoadMore(0, 1, 'effects-remove-active');
                setTimeout(() => changeVisibilityForBtnLoadMore(1, 1, 'effects-remove-active'), 3000);

                setTimeout(() => addBlockToAmazingWork(24, 36), 3000);

                break;

            }
        }
    }

    /*
    Next part add Block to Our Amazing Work!
     */


    /*
    What People Say About theHam
     */
    const arrayWhatPeopleSay = [
        [
            'Josh Dibble',
            'Product Owner for London based FinTech',
            'Interested in where machine learning can take your company and career? Browse data courses below and join our experts as they dive into tools like Apache Spark and Kafka and work with you to develop the practical knowledge and experience to open doors for your current projects!',
            'User_1.jpg'
        ],
        [
            'Dudu Hazal',
            'Chaos Engineer @DFDS',
            'Our aim is to create opportunities for those in tech — whether they be developers, architects, product managers, producers, DevOps engineers, Cloud engineers, anybody! — to come together to learn and collaborate.Join our community to learn and share skills with thousands of developers passionate about software craftsmanship and progressive technologies!',
            'User_2.jpg'
        ],
        [
            'Morty Merr',
            'Public speaker, RxSwift fapboy',
            'Want to streamline your product development while creating strong and autonomous teams? Our expert-led product leadership courses are a mix of practical and theory-based workshops, covering product leadership and management, advanced Scrum courses, Agile at scale, tech talk delivery, LeSS basics and more!',
            'User_3.jpg'
        ],
        [
            'Sinisa Louc',
            'Backend Engineer at Spotcap',
            'Delivering collaborative and practical Python training courses, our industry-leading experts help you get the most out of Python by applying what you learn to practical problems so that you can take away real skills and experience to your current and future projects!',
            'User_4.jpg'
        ],
        [
            'Ellie Nikakis',
            'PR and Marketing Manager for Vollie',
            'Want to ramp up the speed and efficiency with which your teams deliver on their projects? At Skills Matter you can discover a range of expert-led and comprehensive DevOps courses, including those in Docker fundamentals, Chaos engineering, advanced DevOps training, security, scaling and more. Our DevOps courses are perfect for those looking to move towards a continuous delivery model and who want to learn the latest DevOps concepts and tools!',
            'User_5.jpg'
        ],
        [
            'Alvaro Sanmartin',
            'Founder @Minds Studio',
            'Business agility continues to drive growth for some of the world’s largest organisations. Whether you are looking for Agile certification or want to improve how you apply agility to your testing or project management, these expert-led Agile courses provide you with the knowledge to make collaboration and iteration central to your current and upcoming projects!',
            'User_6.jpg'
        ],
        [
            'Dylan Beattie',
            'Developer, systems architect',
            'Interested in using Kubernetes in your projects? Want a thorough insight into AWS? Delivered by experts, our in-depth Cloud training courses are a great way to meet and collaborate with other passionate cloud engineers so that you can take away an advanced understanding of the latest concepts, tools and languages within cloud technologies!',
            'User_7.jpg'
        ],
        [
            'Scott Matthewman',
            'Software developer',
            'Nothing helps us learn better than being surrounded by passionate people. These expert-led JavaScript courses cover tools like WebAssembly, Angular, and Webpack Academy as well as the application of reactive programming and advanced JavaScript. Through these JavaScript developer training courses you can develop the tools and knowledge to get the most out of your use of JavaScript!',
            'User_8.jpg'
        ],
    ];


    let actualPositionInSlider = [0, 1, 2, 3];
    let clientNumber = 0;
    const userSliderBtn = document.getElementsByClassName('box-square');
    userSliderBtn[0].addEventListener('click', onClickSliderElementMoveLeft);
    userSliderBtn[1].addEventListener('click', onClickSliderElementMoveRight);

    /**
     * @desc  функція, яка змінює користувачів в полі Client feedback, по 'Click' на кнопку з ліва.
     * arrayDataWork - масив з інформацією про відгуки (відгук. фото, ім'я та посада);
     * arrayActualSetting - масив з інформацією про останній варіант відображення користувачів;
     * r - номер  відгукуж, який є активним;
     * @returns  відповідне візуальне відтворення на полі Client feedback.
     */

    function onClickSliderElementMoveLeft() {
        for (let j = 0; j < actualPositionInSlider.length; j++) {
            actualPositionInSlider[j] = +actualPositionInSlider[j] + 1;
            if (actualPositionInSlider[j] === 8) {
                actualPositionInSlider[j] = 0;
            }

            if (j === clientNumber) {
                let a = actualPositionInSlider[j];
                let tempBlock = document.getElementsByClassName('user-feedback')[0];
                tempBlock.innerHTML = `${arrayWhatPeopleSay[a][2]}`;
                tempBlock = document.getElementsByClassName('user-name')[0];
                tempBlock.innerHTML = `${arrayWhatPeopleSay[a][0]}`;
                tempBlock = document.getElementsByClassName('user-position')[0];
                tempBlock.innerHTML = `${arrayWhatPeopleSay[a][1]}`;
                tempBlock = document.getElementsByClassName('border')[0];
                tempBlock.innerHTML = `<img src="img/faces/${arrayWhatPeopleSay[a][3]}" alt="Client">`;

            }
        }

        console.log(`look --- ${actualPositionInSlider}`);
        let tempBlock = document.getElementsByClassName('border');
        let t = 0;
        for (let m = 0; m < actualPositionInSlider.length; m ++) {
            t = actualPositionInSlider[m];
            tempBlock[m+1].innerHTML = `<img src="img/faces/${arrayWhatPeopleSay[t][3]}" alt="Client">`;
        }
    }

    function onClickSliderElementMoveRight() {
        for (let j = 0; j < actualPositionInSlider.length; j++) {
            actualPositionInSlider[j] = +actualPositionInSlider[j] - 1;
            if (actualPositionInSlider[j] === -1) {
                actualPositionInSlider[j] = 7;
            }


            if (j === clientNumber) {
                let a = actualPositionInSlider[j];
                let tempBlock = document.getElementsByClassName('user-feedback')[0];
                tempBlock.innerHTML = `${arrayWhatPeopleSay[a][2]}`;
                tempBlock = document.getElementsByClassName('user-name')[0];
                tempBlock.innerHTML = `${arrayWhatPeopleSay[a][0]}`;
                tempBlock = document.getElementsByClassName('user-position')[0];
                tempBlock.innerHTML = `${arrayWhatPeopleSay[a][1]}`;
                tempBlock = document.getElementsByClassName('border')[0];
                tempBlock.innerHTML = `<img src="img/faces/${arrayWhatPeopleSay[a][3]}" alt="Client">`;
            }
        }
        console.log(`look --- ${actualPositionInSlider}`);
        let tempBlock = document.getElementsByClassName('border');
        let t = 0;
        for (let m = 0; m < actualPositionInSlider.length; m ++) {
            t = actualPositionInSlider[m];
            tempBlock[m+1].innerHTML = `<img src="img/faces/${arrayWhatPeopleSay[t][3]}" alt="Client">`;
        }
    }
    /**
     * @desc  функція, яка переписує відгукі в полі Client feedback.
     * arrayData - масив з інформацією про відгуки (відгук. фото, ім'я та посада);
     * і - номер відгукуж;
     * @returns  відповідне візуальне відтворення на полі Client feedback.
     */

    function setNewFeedback(arrayData, i) {
        let tempBlock = document.getElementsByClassName('user-feedback')[0];
        tempBlock.innerHTML = `${arrayData[i][2]}`;
        tempBlock = document.getElementsByClassName('user-name')[0];
        tempBlock.innerHTML = `${arrayData[i][0]}`;
        tempBlock = document.getElementsByClassName('user-position')[0];
        tempBlock.innerHTML = `${arrayData[i][1]}`;
        tempBlock = document.getElementsByClassName('border')[0];
        tempBlock.innerHTML = `<img src="img/faces/${arrayData[i][3]}" alt="Client_${i}">`;
    }


    /**
     * @desc  функція, яка переписує відгукі в полі Client feedback  по 'Click' на користувачі.
     * @returns  відповідне візуальне відтворення на полі Client feedback.
     */


    const blockToChange = document.getElementsByClassName('small-image');
    const userSmallPicture = document.getElementsByClassName('user-photography-small');
    /*
    const userSlider = document.getElementsByClassName('user-slider')[0];
     */
    const userSlider = document.getElementById('example');
    userSlider.addEventListener('click', onClickSliderElement);



    function onClickSliderElement(event) {
        let element = event.target;
        if (element === event.currentTarget) {
            event.preventDefault();
            return;
        }
        for (let i = 0; i < blockToChange.length; i++) {

            if (blockToChange[i] === event.target) {
                userSmallPicture[i].classList.remove('active-third');
                userSmallPicture[i].classList.add('active-third');
                clientNumber = i;
                setNewFeedback(arrayWhatPeopleSay, i);
            } else {
                userSmallPicture[i].classList.remove('active-third');
            }
        }
        userSmallPicture[clientNumber].classList.add('active-third');
    console.log(`look on clientNumber ---> ${clientNumber}`);
    }

}





