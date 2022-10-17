const Header = () => {
    return (
        <header>
            <h1>Título da página</h1>
            <hr/>
        </header>
    );
}

const App = () => {    
    return (
        <div>
            <Header />
            Olá, Mundo!
        </div>
    );
}

export default App;