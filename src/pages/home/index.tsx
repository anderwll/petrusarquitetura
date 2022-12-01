import React from 'react';
import About from '../../components/About';
import ButtonFloating from '../../components/ButtonFloating';
import Carrousel from '../../components/Carrousel';
import Contatos from '../../components/Contatos';
import Equipe from '../../components/Equipe';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Projetos from '../../components/Projetos';
import Servicos from '../../components/Servicos';
import { DivButton } from './styled';

const Home = () => {
    return (
        <>
          <Header /> 
          <Carrousel /> 
          <Projetos />
          <Servicos />
          <About />
          <Equipe />
          <Contatos />
          <DivButton>
            <ButtonFloating />
          </DivButton>
          <Footer />
        </>
    );
};

export default Home;