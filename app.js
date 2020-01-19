$(document).ready(function(){
    // REEMPLAZAR CONTENIDO
    $('#titulo').html('Lorem ipsum dolor sit, amet consectetur adipisicing.')

    $('.container li:first').html('lo que sea')
    $('.container li:last').html('me da igual')

    // QUITAR Y REMOVER CLASES CSS
    $('#li-2').addClass('text-danger')
    $('#li-2').addClass('text-uppercase')

    $('.container p').removeClass('text-success')
    $('.container ul').removeClass('list-unstyled')

    // AGREGAR AL PRINCIPIO Y AL FINAL
    $('#li-3').append(' lo que pienses')
    $('.container ul').append('<li id="blue">ME IMPORTA UN CARAJO</li>')
    $('.container ul').prepend('<li>Soy un agente del CAOS :<span class="smile">)</span></li>')
    
    // AGREGAR PROPIEDADES CSS
    $('#blue').css({ color: 'blue', fontWeight : 'bold'})
    $('.container li:first').css({ fontWeight : 'bold', fontStyle : 'italic'})
    $('.smile').css({ color: 'red' })

    // ESCONDER ELEMENTOS
    $('.container p:first').hide()

    // AGREGAR ATRIBUTOS
    $('img').attr({ src : 'https://pbs.twimg.com/media/EGTNkb8UcAAYxxQ.jpg', width : '500px' })
    $('.container .botones').addClass('my-1')

    // PARRAFO
    $('#quote').css({ color : 'white', fontWeight : 'bold' })
    $('#quote').addClass('pl-2')

    // EVENTOS
    parrafo = $('#result p')
    $('.btn-success').click(function(){
        parrafo.addClass('display-4')
    })

    $('.btn-danger').click(function () { 
        parrafo.removeClass('display-4')        
    });

    $('.btn-primary').click(function(){
        parrafo.toggleClass('bg-danger')
    })

    $('.btn-warning').click(function (e) { 
        $('#photo').toggle(500);
    });

    // PREVENTDEFAULT
    $('#formulario').submit(function(e){
        e.preventDefault()
        let nombre = $('#nombre').val()
        console.log(nombre)
    })    

    // FADE IN - FADE OUT
    let resultado = $('#resultado')
    $('#btn-agregar').click(function (e) { 
        resultado.fadeIn('fast')                
    });
    $('#btn-quitar').click(function (e) { 
        resultado.fadeOut('slow')
    });
    $('#btn-toggle').click(function (e) { 
        resultado.toggle(1000)
    });

    // ANIMATE
    let cuadrito = $('#cuadrito')

    $('#btn-animate').click(function (e) { 
        cuadrito.animate({
            left : '250px',
            opacity: '0.5',
            height: '+=150px',
            width: '+=150px'
        }, 500, function(){
            cuadrito.animate({
                left : '110px',
                opacity: '1',
                height: '-=150px',
                width: '-=150px'
            }, 500)
        })
    })
})