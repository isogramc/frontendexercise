document.addEventListener('DOMContentLoaded', () => {

    console.log('js is processed');


    $('.btn.button-right').click(function(){
        $('.modal-container').css('display', 'flex');
    });

    $('.btn.button-left.close-fn').click(function(){
        $('.modal-container').toggle();
    });

    getFAQs();
    getProducts();

    function getProducts(){
        const products = [{name: "Warning Red Alert basic", description: "Contains 3 door sensors, 2 door locks, 1 alarm and 1 hub.", price: 59.99, image: 'product-2-transparent'},
            {name: "Warning Red Alert Premium", description: "Contains everything Red Alert Basic has, plus a weather proof camera", price: 109.99, image: 'product-1-transparent'}];

        products.map(product => {
            const path = "/public/assets/images/";
            var productEl = `<div class='product'><img src='${path+product.image}.png' alt='${product.name}'/>
            <div class='product-name'>${product.name}</div>
            <div class='product-description'>${product.description}</div>
            <div class='product-price'>&#128;${product.price}</div></div>`
            $('.products').append(productEl);
        });
    }

    function getFAQs(){

        const faqs = [{question: "How long does red alert stay active after enabling?", answer: "Once you enable Red Alert, it stays active until the moment you have set during the initial setup of your Red Alert Home Alarm. By default this is 08:00 in the morning."},
            {question: "When should I replace red alert?", answer: "Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."},
            {question: "What is the benefit of Red Alert over other alarms?", answer: "Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."},
            {question: "What guarantee does red alert give against burglary?", answer: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {question: "Why is red alert so cheap compared to competitors?", answer: "Lorem 5 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."}];

        faqs.map((faq, index) => {
            var listItem = `<div class='accordion-header' id='header-${index}'>${faq.question}<span id='kar-${index}'>&#9660;</span></div>
                <div class='accordion-body-collapse' id='content-${index}'>${faq.answer}</div>`;
            $('.accordion').append(listItem);
        });
    }


    function flipCarat(number){
        if($("#kar-" + number).html()=='▼'){
            $("#kar-" + number).html('&#9650;');
        } else if ($("#kar-" + number).html()=='▲') {
            $("#kar-" + number).html('&#9660;');
        }
    }

    $(document).on('click', '#header-0, #header-1, #header-2, #header-3, #header-4, #header-5', function (event) {
        var number = event.target.id.split('-')[1];
        $("#content-" + number).toggle();
        flipCarat(number);
        for(var i=0; i<6; i++){
            if(i!=number){
                if ($("#content-" + i).css('display') == 'block') {
                    $("#content-" + i).toggle();
                    flipCarat(i);
                }
            }
        }
    });

})
