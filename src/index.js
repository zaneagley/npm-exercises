import $ from "jquery";




    $('#mainSection').click(function () {
        console.log('Clicked');
       $('#mainSection').css('background-color', 'blue')
    });


    const sayHello = word => console.log(word);


    sayHello('hello');

