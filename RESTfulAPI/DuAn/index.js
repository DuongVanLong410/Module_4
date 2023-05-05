function getList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/products",
        Headers: {
            'Content-Type': 'application/json'
        },
        success: (products) => {
            console.log(products);
            let html = ` <body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
            <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                    aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"
                                                         href="#about">About</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Masthead-->
    <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
            <!-- Masthead Avatar Image-->
            <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..."/>
            <!-- Masthead Heading-->
            <h1 class="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Masthead Subheading-->
            <p class="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </header>
    <!-- Portfolio Section-->
    <section class="page-section portfolio" id="portfolio">
        <div class="container">
            <!-- Portfolio Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <div>
            <!-- Portfolio Grid Items-->
            <div class="row justify-content-center">
                <!-- Portfolio Item 1-->

                {toAdd}
            </div>

    </section>
    <!-- About Section-->
    <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
            <!-- About Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- About Section Content-->
            <div class="row">
                <div class="col-lg-4 ms-auto"><p class="lead">Freelancer is a free bootstrap theme created by Start
                    Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as
                    well as optional SASS stylesheets for easy customization.</p></div>
                <div class="col-lg-4 me-auto"><p class="lead">You can create your own custom avatar for the masthead,
                    change the icon in the dividers, and add your email address to the contact form to make it fully
                    functional!</p></div>
            </div>
            <!-- About Section Button-->
            <div class="text-center mt-4">
                <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                    <i class="fas fa-download me-2"></i>
                    Free Download!
                </a>
            </div>
        </div>
    </section>
    <!-- Contact Section-->
    <section class="page-section" id="contact">
        <div class="container">
            <!-- Contact Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Contact Section Form-->
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-7">
                    <!-- * * * * * * * * * * * * * * *-->
                    <!-- * * SB Forms Contact Form * *-->
                    <!-- * * * * * * * * * * * * * * *-->
                    <!-- This form is pre-integrated with SB Forms.-->
                    <!-- To make this form functional, sign up at-->
                    <!-- https://startbootstrap.com/solution/contact-forms-->
                    <!-- to get an API token!-->
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <!-- Name input-->
                        <div class="form-floating mb-3">
                            <input class="form-control" id="name" type="text" placeholder="Enter your name..."
                                   data-sb-validations="required"/>
                            <label for="name">Full name</label>
                            <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <!-- Email address input-->
                        <div class="form-floating mb-3">
                            <input class="form-control" id="email" type="email" placeholder="name@example.com"
                                   data-sb-validations="required,email"/>
                            <label for="email">Email address</label>
                            <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <!-- Phone number input-->
                        <div class="form-floating mb-3">
                            <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890"
                                   data-sb-validations="required"/>
                            <label for="phone">Phone number</label>
                            <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is
                                required.
                            </div>
                        </div>
                        <!-- Message input-->
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="message" type="text"
                                      placeholder="Enter your message here..." style="height: 10rem"
                                      data-sb-validations="required"></textarea>
                            <label for="message">Message</label>
                            <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.
                            </div>
                        </div>
                        <!-- Submit success message-->
                        <!---->
                        <!-- This is what your users will see when the form-->
                        <!-- has successfully submitted-->
                        <div class="d-none" id="submitSuccessMessage">
                            <div class="text-center mb-3">
                                <div class="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br/>
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        <!-- Submit error message-->
                        <!---->
                        <!-- This is what your users will see when there is-->
                        <!-- an error submitting the form-->
                        <div class="d-none" id="submitErrorMessage">
                            <div class="text-center text-danger mb-3">Error sending message!</div>
                        </div>
                        <!-- Submit Button-->
                        <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
<!-- Footer-->
<footer class="footer text-center">
    <div class="container">
        <div class="row">
            <!-- Footer Location-->
            <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Location</h4>
                <p class="lead mb-0">
                    2215 John Daniel Drive
                    <br/>
                    Clark, MO 65243
                </p>
            </div>
            <!-- Footer Social Icons-->
            <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Around the Web</h4>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
            </div>
            <!-- Footer About Text-->
            <div class="col-lg-4">
                <h4 class="text-uppercase mb-4">About Freelancer</h4>
                <p class="lead mb-0">
                    Freelance is a free to use, MIT licensed Bootstrap theme created by
                    <a href="http://startbootstrap.com">Start Bootstrap</a>
                    .
                </p>
            </div>
        </div>
    </div>
</footer>
<!-- Copyright Section-->
<div class="copyright py-4 text-center text-white">
    <div class="container"><small>Copyright &copy; Your Website 2023</small></div>
</div>
<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="js/scripts.js"></script>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
<!-- * *                               SB Forms JS                               * *-->
<!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
</body>`
            let productHtml = '';
            products.map(product => {
                productHtml += `
                <div class="row justify-content-center">
                <!-- Portfolio Item 1-->
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption-content text-center text-white"><i
                                    class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <p>name: ${product.name}</p>
                        <p>category: ${product.category.name}</p>
                        <img class="img-fluid" src="${product.image}" alt="..."/>
                        <p>price: ${product.price}</p>
                        <p>quantity: ${product.quantity}</p>
                      <div>
                         <button  class="btn btn-primary btn-lg" onclick="formUpdate(${product.id})">update</button>
                         <button type="button" class="btn btn-primary btn-lg" onclick="remove(${product.id})">delete</button>
                      </div>               
                        
                      </div>
                </div>
                <hr>`
            });
            html = html.replace('{toAdd}', productHtml)
            $('#body').html(html)
        }
    })
}

function formAdd() {
    let html = `
    <input type="text" id="name" placeholder="name">
    <input type="text" id="price" placeholder="price">
    <input type="text" id="quantity" placeholder="quantity">
    <input type="file" id="image" onchange="uploadImage(event)">
    <div id="imgDiv"></div>
    <input type="text" id="category" placeholder="category">
    <button onclick="create()">add</button>
  `;
    $('#body').html(html)
}

function create() {
    const name = $('#name').val()
    const price = $('#price').val()
    const quantity = $('#quantity').val()
    const category = $('#category').val()

    const file = document.getElementById('image').files[0]
    const storageRef = firebase.storage().ref(`images/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed',
        function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + percentage + '% done')
        },
        function error(err) {
            console.log('Error:', err)
        },
        function complete() {
            task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                const product = {
                    name: name,
                    price: price,
                    quantity: quantity,
                    image: downloadURL,
                    category: {
                        id: category
                    }
                }
                $.ajax({
                    type: "POST",
                    url: "http://localhost:3000/products",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(product),
                    success: () => {
                        getList()
                    }
                })
            })
        }
    )
}

function formRegister(){
    let html = `
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
            <button onclick="createUser()">Sign Up</button>

    `
    $('#body').html(html)

}

function createUser(){
    let username = $('#username').val()
    let password = $('#password').val()
    let user = {
        username: username,
        password: password
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(user),
        success: (message) => {
            getList()
        }
    })
}

function remove(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        $.ajax({
            type: "delete",
            url: `http://localhost:3000/products/${id}`,
            Headers: {
                'Content-Type': 'application/json'
            },
            success: () => {
                getList();
            }
        })
    }
}

function formUpdate(id) {
    const productRef = db.collection('products').doc(id);
    productRef.get().then((doc) => {
        if (doc.exists) {
            const product = doc.data();
            let html = `
                <input type="text" id="name" placeholder="name" value="${product.name}">
                <input type="text" id="price" placeholder="price" value="${product.price}">
                <input type="text" id="quantity" placeholder="quantity" value="${product.quantity}">
                <input type="file" id="image" onchange="uploadImage(event)">
                <div id="imgDiv"><img src="${product.image}" alt=""></div>
                <input type="text" id="category" placeholder="category" value="${product.category}">
                <button onclick="update('${id}')">update</button>
            `;
            $('#body').html(html);
        } else {
            console.log("No such product document!");
        }
    }).catch((error) => {
        console.log("Error getting product document:", error);
    });
}

function update(id) {
    const name = $('#name').val();
    const price = parseFloat($('#price').val());
    const quantity = parseInt($('#quantity').val());
    const category = $('#category').val();

    const imageFile = $('#image').prop('files')[0];

    const batch = db.batch();

    const productRef = db.collection('products').doc(id);

    batch.update(productRef, {
        name: name,
        price: price,
        quantity: quantity,
        category: category,
    });

    if (imageFile) {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`products/${imageFile.name}`);

        batch.commit().then(() => {
            // Upload image to Firebase Storage
            imageRef.put(imageFile).then((snapshot) => {
                // Get download URL of the uploaded image
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    // Update product data in Firestore with the download URL
                    batch.update(productRef, {
                        image: downloadURL,
                    });

                    batch.commit().then(() => {
                        console.log('Product updated successfully!');
                        formList();
                    }).catch((error) => {
                        console.error('Error updating product: ', error);
                    });
                });
            });
        }).catch((error) => {
            console.error('Error updating product: ', error);
        });
    } else {
        batch.commit().then(() => {
            console.log('Product updated successfully!');
            formList();
        }).catch((error) => {
            console.error('Error updating product: ', error);
        });
    }
}

function uploadImage(event) {
    const file = event.target.files[0]
    const storageRef = firebase.storage().ref(`images/${file.name}`)
    const task = storageRef.put(file)
    task.on('state_changed',
        function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + percentage + '% done')
        },
        function error(err) {
            console.log('Error:', err)
        },
        function complete() {
            task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                const img = document.createElement('img')
                img.src = downloadURL
                document.getElementById('imgDiv').appendChild(img)
            })
        }
    )
}