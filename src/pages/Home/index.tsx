import Button from 'core/components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className='home-container'>
        <h1 className='home-title'>
            Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
        </h1>
        <p className='home-subtitle'>
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
            Favor observar as instruções passadas no capítulo sobre a <br /> 
            elaboração deste projeto. <br />
            Este design foi adaptado a partir de Ant Design System for Figma, de <br /> 
            Mateusz Wierzbicki: antforfigma@gmail.com
        </p>
        <Link to="/search">
            <Button title="Começar" />
        </Link>
    </div>
);

export default Home;