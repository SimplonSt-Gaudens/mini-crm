var customers = [
    {
        "id":1,
        "first_name":"Allan",
        "last_name":"Cerveaux",
        "company":"Simplon",
        "role":"Formateur",
        "phone":"06.61.64.13.69",
        "email":"acerveaux@simplon.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia."
    },
    {
        "id":2,
        "first_name":"Jean",
        "last_name":"Pascal",
        "company":"Simplon",
        "role":"Employé",
        "phone":"06.61.25.35.69",
        "email":"jpascal@mail.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    },
    {
        "id":3,
        "first_name":"Romuald",
        "last_name":"Laurem",
        "company":"S.Lipsum",
        "role":"Manager",
        "phone":"06.61.25.35.69",
        "email":"rlaureml@lipsum.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    },    {
        "id":3,
        "first_name":"Romuald",
        "last_name":"Laurem",
        "company":"S.Lipsum",
        "role":"Manager",
        "phone":"06.61.25.35.69",
        "email":"rlaureml@lipsum.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    },    {
        "id":3,
        "first_name":"Romuald",
        "last_name":"Laurem",
        "company":"S.Lipsum",
        "role":"Manager",
        "phone":"06.61.25.35.69",
        "email":"rlaureml@lipsum.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    },    {
        "id":3,
        "first_name":"Romuald",
        "last_name":"Laurem",
        "company":"S.Lipsum",
        "role":"Manager",
        "phone":"06.61.25.35.69",
        "email":"rlaureml@lipsum.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    },
]

// Write you're code here. Enjoy !

// var customer1 = customers[0];
// console.log(customer1);
// var dataCustomer1 = customer1.id+ ' ' +customer1.first_name+ ' ' +customer1.last_name+ ' ' +customer1.company+ ' ' +customer1.role+ ' ' +customer1.phone+ ' ' +customer1.email+ ' ' +customer1.description;
// console.log(dataCustomer1);
// var customer2 = customers[1];
// console.log(customer2);
// var dataCustomer2 = customer2.id+ ' ' +customer2.first_name+ ' ' +customer2.last_name+ ' ' +customer2.company+ ' ' +customer2.role+ ' ' +customer2.phone+ ' ' +customer2.email+ ' ' +customer2.description;
// console.log(dataCustomer2);
// var customer3 = customers[2];
// console.log(customer3);
// var dataCustomer3 = customer3.id+ ' ' +customer3.first_name+ ' ' +customer3.last_name+ ' ' +customer3.company+ ' ' +customer3.role+ ' ' +customer3.phone+ ' ' +customer3.email+ ' ' +customer3.description;
// console.log(dataCustomer3);

// var main = document.getElementById('main');
// console.log(main);

// main.innerHTML = dataCustomer1 + '<br />' +dataCustomer2 + '<br/>' +dataCustomer3;


var main = document.getElementById('main');
for(var i = 0; i < customers.length; i++){
    customer(customers[i].id, customers[i].first_name, customers[i].last_name, customers[i].company, customers[i].role, customers[i].phone, customers[i].email, customers[i].description);
}

function customer(id, first_name, last_name, company, role, phone, email, description){
    var div = document.createElement("div");
    div.className = "card";
    main.appendChild(div);
    var template = '<div class="content"><div class="header">'+id+ ' ' +first_name+ ' ' + last_name + '</div><div class="meta">' +company+ ' ' +role+ ' ' +phone+ ' ' +email+ '</div></div><div class="content">' +description + '</div>';
    div.innerHTML = template;
}