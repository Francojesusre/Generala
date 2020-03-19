var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  name: 'GeneralApp', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,


  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },

});

//- botones de ventana
var ac1 = app.actions.create({
  buttons: [{
      text: 'Uno',
      bold: true,
      onClick: function () {
        app.dialog.alert('Boton 1 tocado');
        tocar(1);
      }
    },
    {
      text: 'Dos',
      bold: true,
      onClick: function () {
        app.dialog.alert('Boton 2 tocado');
        tocar(2);
      }
    },
    {
      text: 'Tres',
      bold: true,
      onClick: function () {
        app.dialog.alert('Boton 3 tocado');
        tocar(3);
      }
    },
    {
      text: 'Cuatro',
      bold: true,
      onClick: function () {
        app.dialog.alert('Boton 4 tocado');
        tocar(4);
      }
    },
    {
      text: 'Cinco',
      bold: true,
      onClick: function () {
        app.dialog.alert('Boton 5 tocado');
        tocar(5);
      }
    },
    {
      text: 'Tachar',
      bold: true,
      onClick: function () {
        app.dialog.alert('Boton X tocado');
        tocar('X');
      }
    },
    {
      text: 'Cancelar',
      color: 'red'
    },
  ]
});

var ac2 = app.actions.create({
  buttons: [{
      text: 'Servido',
      bold: true,
      onClick: function () {
        app.dialog.alert('Boton servido tocado');
        var tiro;
        tiro = 'servido'
        tocar(tiro);
      }
    },
    {
      text: 'No servido',
      bold: true,
      onClick: function () {
        app.dialog.alert('Boton no servido tocado');
        var tiro;
        tiro = 'noservido'
        tocar(tiro);
      }
    },
    {
      text: 'Tachar',
      bold: true,
      onClick: function () {
        app.dialog.alert('Boton X tocado');
        tocar('X');
      }
    },
    {
      text: 'Cancelar',
      color: 'red'
    },
  ]
});


var mainView = app.views.create('.view-main');

var j1 = "";
var j2 = "";
var idTocado;



// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");

  $$('#ini').on('click', function () {
    if(($$('#j1').val()=='') || ($$('#j2').val()=='')){
      app.dialog.alert('Ingrese nombre de los equipos');
    }else{
      $$('#ini').attr('href', '/anotador/');
      j1 = $$('#j1').val(); 
      j2 = $$('#j2').val();
    }
  })


});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized
  console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);

  $$('#nj1').text(j1);
  $$('#nj2').text(j2);

  $$('.ac-1').on('click', function () {
    idTocado = this.id;
    ac1.open();
  });

  $$('.ac-2').on('click', function () {
    idTocado = this.id;
    ac2.open();
  });

  $$('#limpiar').on('click', function(){
    limpia();
  });

  
// ver restart
  $$('#volverinicio').on('click', function(){
    limpia();
    $$('#volverinicio').attr('href', '/');
    $$('#j1').text(' '); 
    $$('#j2').text(' ');
  })
})


//FUNCIONES PROPIAS
function tocar(index) {
  var aux;
  iden = idTocado;
  alert(iden + " / " + index);
  aux = calcula(idTocado, index);
  if(index=='servido'||(index=='noservido')){
    index = 1;
  }
  aux = aux * index;
  $$('#' + iden).text(aux); //cambiar valor final
  total();
  $$('#'+ iden).attr("disabled", true);
}

function total() {
  var i, pf1 = 0,
    tot1 = 0;
  for (i = 0; i < 12; i++) {
    pf1 = $$('#j1_' + i).html();
    pf1 = parseInt(pf1);
    if (pf1 > 0) {
      tot1 = tot1 + pf1;
    }
  }
  var pf2 = 0,
    tot2 = 0;
  for (i = 0; i < 12; i++) {
    pf2 = $$('#j2_' + i).html();
    pf2 = parseInt(pf2);
    if (pf2 > 0) {
      tot2 = tot2 + pf2;
    }
  }
  $$('#tj1').text(tot1);
  $$('#tj2').text(tot2);
}

function limpia() {
  var i;
  for (i = 0; i > 12; i++) {
    $$('#j1_' + i).text('-');
    $$('#j2_' + i).text('-');
  }
  $$('#tj1').text(0);
  $$('#tj2').text(0);
}



function calcula(id, ref) {
  var a = 0;
  switch (id) {
    case 'j1_1':
      a = 1;
      break
    case 'j1_2':
      a = 2;
      break
    case 'j1_3':
      a = 3;
      break
    case 'j1_4':
      a = 4;
      break
    case 'j1_5':
      a = 5;
      break
    case 'j1_6':
      a = 6;
      break
      //servido / no servido
    case 'j1_7':
      if (ref == 'servido') {
        a = 25;
      } else {
        a = 20;
      }
      break
    case 'j1_8':
      if (ref == 'servido') {
        a = 30;
      } else {
        a = 25;
      }
      break
    case 'j1_9':
      if (ref == 'servido') {
        a = 45;
      } else {
        a = 40;
      }
      break
    case 'j1_10':
      if (ref == 'servido') {
        a = 55;
      } else {
        a = 50;
      }
      break
    case 'j1_11':
      if (ref == 'servido') {
        a = 65;
      } else {
        a = 60;
      }
      break
    
      //jugador 2  
    case 'j2_1':
      a = 1;
      break
    case 'j2_2':
      a = 2;
      break
    case 'j2_3':
      a = 3;
      break
    case 'j2_4':
      a = 4;
      break
    case 'j2_5':
      a = 5;
      break
    case 'j2_6':
      a = 6;
      break
      //servido / no servido
    case 'j2_7':
      if (ref == 'servido') {
        a = 25;
      } else {
        a = 20;
      }
      break
    case 'j2_8':
      if (ref == 'servido') {
        a = 30;
      } else {
        a = 25;
      }
      break
    case 'j2_9':
      if (ref == 'servido') {
        a = 45;
      } else {
        a = 40;
      }
      break
    case 'j2_10':
      if (ref == 'servido') {
        a = 55;
      } else {
        a = 50;
      }
      break
    case 'j2_11':
      if (ref == 'servido') {
        a = 65;
      } else {
        a = 60;
      }
      break
  }
  return (a)
}