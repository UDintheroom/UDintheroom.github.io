$(document).ready(function() {
    // fullpage
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        menu : '.gnb',
        navigation: true,
        anchors: ['home', 'profile', 'portfolio1', 'portfolio2', 'portfolio3', 'portfolio4'],
    });


    // gnb (side menu bar(circle)) + display
    const nav = $('nav');
    const toggleBtn = nav.find('.toggle-btn');
    toggleBtn.on('click', function() {
        nav.toggleClass('open');
    });
    const delayTime = 3450;
    setTimeout(function() {
        nav.css('display', 'flex');
    }, delayTime);


    // intro) hello
    setTimeout(function() {
        $(".intro-animation .intro-text").css('display', 'flex').addClass('animate__animated animate__rubberBand');
        typing();
    }, 3500);

    // intro) hello switch
    $('.kor').mouseover(function() {
        $(this).fadeOut(120, function() {
            $('.eng').fadeIn(120);
        });
    });
    $('.eng').mouseout(function() {
        $(this).fadeOut(120, function() {
            $('.kor').fadeIn(120);
        });
    });


    // profile) hash tag
    const tag = $(".typing .tag");
    const letters = [
        "도전하는",
        "성실한", 
        "소통하는",
        "멈추지않는",
        "성장하는",
    ];
    const speed = 100;
    let i = 0;
    const typing = async () => {  
        const letter = letters[i].split("");
        while (letter.length) {
            await wait(speed);
            tag.html(tag.html() + letter.shift()); 
        }
        await wait(800);
        remove();
    }
    const remove = async () => {
        const letter = letters[i].split("");
        while (letter.length) {
            await wait(speed);
            letter.pop();
            tag.html(letter.join("")); 
        }
        i = !letters[i+1] ? 0 : i + 1;
        typing();
    }
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }


// !!!!! never delete !!!!!
});
