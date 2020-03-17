var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
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
    },
    {
      text: 'Dos',
      bold: true
    },
    {
      text: 'Tres',
      bold: true
    },
    {
      text: 'Cuatro',
      bold: true
    },
    {
      text: 'Cinco',
      bold: true
    },
    {
      text: 'Tachar',
      bold: true
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
    },
    {
      text: 'No servido',
      bold: true
    },
    {
      text: 'Tachar',
      bold: true
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
var a; //variable para numeros de los puntajes (ventana)

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");

  $$('#ini').on('click', function () {
    j1 = $$('#j1').val(); //NO PONER var, asi se usa la variable global definida.
    j2 = $$('#j2').val();

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

  $$('#j1_1').on('click', function () {
    ac1.open();
  });
  $$('#j1_2').on('click', function () {
    ac1.open();
  });
  $$('#j1_3').on('click', function () {
    ac1.open();
  });
  $$('#j1_4').on('click', function () {
    ac1.open();
  });
  $$('#j1_5').on('click', function () {
    ac1.open();
  });
  $$('#j1_6').on('click', function () {
    ac1.open();
  });
  $$('#j1_7').on('click', function () {
    ac2.open();
  });
  $$('#j1_8').on('click', function () {
    ac2.open();
  });
  $$('#j1_9').on('click', function () {
    ac2.open();
  });
  $$('#j1_10').on('click', function () {
    ac2.open();
  });
  $$('#j1_11').on('click', function () {
    ac2.open();
  });
  $$('#j2_1').on('click', function () {
    ac1.open();
  });
  $$('#j2_2').on('click', function () {
    ac1.open();
  });
  $$('#j2_3').on('click', function () {
    ac1.open();
  });
  $$('#j2_4').on('click', function () {
    ac1.open();
  });
  $$('#j2_5').on('click', function () {
    ac1.open();
  });
  $$('#j2_6').on('click', function () {
    ac1.open();
  });
  $$('#j2_7').on('click', function () {
    ac2.open();
  });
  $$('#j2_8').on('click', function () {
    ac2.open();
  });
  $$('#j2_9').on('click', function () {
    ac2.open();
  });
  $$('#j2_10').on('click', function () {
    ac2.open();
  });
  $$('#j2_11').on('click', function () {
    ac2.open();
  });

})