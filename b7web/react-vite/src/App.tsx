import { Header } from './components/Header';
import { Photo } from './components/Photo';

const App = () => {    
    return (
        <div>
            <Header title="Este é um exemplo" />
            <Header title="Outro Texto" />
            <Header />
            
            Olá, Mundo!

            <Photo legend="Google">
                <img src="https://www.google.com.br/google.jpg" alt="" />
            </Photo>
        </div>
    );
}

export default App;