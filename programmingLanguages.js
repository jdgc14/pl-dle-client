const programmingLanguages = [
    {
        name: 'Python',
        releaseYear: 1991,
        typed: ['Dynamic', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Machine Learning', 'Data Analysis', 'Web Development'],
        // 'IoT',
        // 'Software testing',
        paradigms: ['OOP', 'Functional', 'Reflective'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    },
    {
        name: 'JavaScript',
        releaseYear: 1995,
        typed: ['Dynamic', 'Weak'],
        plataform: 'Multiplataform',
        uses: ['Web Development', 'Developing Games', 'Web Servers'],
        paradigms: ['OOP', 'Functional', 'Event-Driven'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png',
    },
    {
        name: 'TypeScript',
        releaseYear: 2012,
        typed: ['Dynamic', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Web Development', 'Developing Games', 'Web Servers'],
        paradigms: ['OOP', 'Functional', 'Event-Driven'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    },
    {
        name: 'Java',
        releaseYear: 1996,
        typed: ['Static', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Machine Learning', 'Developing Games', 'IoT'],
        // 'Data Analysis'
        paradigms: ['OOP', 'Functional', 'Concurrent'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png',
    },
    {
        name: 'C',
        releaseYear: 1972,
        typed: ['Static', 'Weak'],
        plataform: 'Multiplataform',
        uses: ['Operating System', 'Embedded Systems', '3D Animations'],
        paradigms: ['Procedural', 'Structured'],
        level: 'Mid-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/564px-The_C_Programming_Language_logo.svg.png?20220802133512',
    },
    {
        name: 'C++',
        releaseYear: 1985,
        typed: ['Static', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Operating System', 'Developing Games', 'Web Browsers'],
        paradigms: ['Procedural', 'OOP', 'Functional'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    },
    {
        name: 'C#',
        releaseYear: 2000,
        typed: ['Static', 'Dynamic', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Web Development', 'Windows Applications', 'Developing Games'],
        paradigms: ['Procedural', 'OOP', 'Functional'],
        level: 'High-Level',
        img: 'https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png',
    },
    {
        name: 'Perl',
        releaseYear: 1987,
        typed: ['Dynamic', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Web Development', 'Data Analysis', 'IoT'],
        paradigms: ['Functional', 'OOP', 'Reflective'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Cebolla_Chulita.png?20161120043847',
    },
    {
        name: 'GO',
        releaseYear: 2009,
        typed: ['Static', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Web Development', 'Data Analysis', 'Machine Learning'],
        paradigms: ['Functional', 'OOP', 'Structured'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/640px-Go_Logo_Blue.svg.png',
    },
    {
        name: 'Swift',
        releaseYear: 2014,
        typed: ['Static', 'Strong'],
        plataform: 'MacOS',
        uses: ['Apple Applications', 'Web Development', 'IoT'],
        paradigms: ['Functional', 'OOP', 'Declarative'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/320px-Swift_logo.svg.png',
    },
    {
        name: 'Scala',
        releaseYear: 2004,
        typed: ['Static', 'Strong'],
        plataform: 'JVM',
        uses: ['Data Analysis', 'Software Development', 'IoT'],
        paradigms: ['Functional', 'OOP', 'Concurrent'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/512px-Scala-full-color.svg.png',
    },
    {
        name: 'Pascal',
        releaseYear: 1970,
        typed: ['Static', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Embedded Systems', 'Software Development', 'Developing Games'],
        paradigms: ['Structured', 'Procedural'],
        level: 'High-Level',
        img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/d7/24/08/d7240855-0e51-7f7e-6c2d-3bafdea5a05f/source/512x512bb.jpg',
    },
    {
        name: 'Elixir',
        releaseYear: 2012,
        typed: ['Dynamic', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Web Development', 'IoT'],
        paradigms: ['Functional', 'Concurrent', 'Process Oriented'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png',
    },
    {
        name: 'Haskell',
        releaseYear: 1990,
        typed: ['Static', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Web Development', 'Software Development'],
        paradigms: ['Functional'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg',
    },
    {
        name: 'Kotlin',
        releaseYear: 2011,
        typed: ['Static', 'Strong'],
        plataform: 'Multiplataform',
        uses: ['Web Development', 'Mobile Development', 'Data Analysis'],
        paradigms: ['Functional', 'OOP', 'Declarative'],
        level: 'High-Level',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Kotlin_logo.svg',
    },
]

export default programmingLanguages

// {
//     name: 'PHP',
// },
// {
//     name: 'Ruby',
// },
// {
//     name: 'Rust',
// },
// {
//     name: 'Sql',
// },
// {
//     name: 'HTML',
// },
