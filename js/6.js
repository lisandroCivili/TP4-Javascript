class Book {
  #title;
  #author;
  #pages;
  #ISBN;

  constructor(titleParam, authorParam, pagesParam) {
    this.#title = titleParam;
    this.#author = authorParam;
    this.#pages = pagesParam;
    this.#ISBN = this.isbnRandom();
  }

  get title() {
    return this.#title;
  }
  set title(titleString) {
    if (typeof titleString === "string" && titleString !== null) {
      this.#title = titleString;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  get author() {
    return this.#author;
  }
  set author(authorString) {
    if (typeof authorString === "string" && authorString !== null) {
      this.#author = authorString;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  get pages() {
    return this.#pages;
  }
  set pages(pagesInt) {
    if (typeof pagesInt === "number" && !isNaN(pagesInt) && pagesInt !== null) {
      this.#pages = pagesInt;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  get ISBN() {
    return this.#ISBN;
  }

  isbnRandom() {
    return Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1);
  }

  mostrarDatos() {
    document.write(
      `El libro <strong>${this.title}</strong> con ISBN <strong>${this.ISBN}</strong> creado por el autor <strong>${this.author}</strong> tiene páginas <strong>${this.pages}</strong><br>`
    );
  }
}

const cantPaginas = (libreria)=>{
    let libroMasPaginas = libreria[0];

    for (let i = 0; i < libreria.length; i++) {

        if (libreria[i].pages > libroMasPaginas.pages) {
          libroMasPaginas = libreria[i];
        }
    }
    return libroMasPaginas;
}

const libreria = [];

const libro = new Book();
libro.title = "Hola"
libro.pages = 300;
libro.author = "Milei";

const libro2 = new Book();
libro2.title = "Chau"
libro2.pages = 200;
libro2.author = "Massa";

libreria.push(libro, libro2);

libro.mostrarDatos();
libro2.mostrarDatos();
const libroMasPaginas = cantPaginas(libreria);
document.write(`El libro con más páginas es <strong>${libroMasPaginas.title}</strong> con ${libroMasPaginas.pages} páginas.`);
