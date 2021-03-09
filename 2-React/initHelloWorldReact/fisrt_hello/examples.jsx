ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);


/*
Essa sintaxe engraçada de tag não é uma string nem HTML.
É chamado JSX e é uma extensão de sintaxe para JavaScript. 
Recomendamos usá-lo com o React para descrever a aparência da IU. 
JSX pode lembrá-lo de uma linguagem de modelo, mas vem com todo o poder do JavaScript.
*/
const element = <h1>Hello, world!</h1>;


// declara a variavel name e utiliza dentro do jsx envolvendo entre chaves
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

// resultado da chamada de uma função JavaScript,, formatName(user)em um <h1>elemento.

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

// Isso significa que você pode usar JSX dentro de ifinstruções 
// e forloops, atribuí-lo a variáveis, 
// aceitá-lo como argumentos e retorná-lo de funções:

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

