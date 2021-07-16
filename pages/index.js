import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommuns'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


function ProfileSidebar(props){
 return(
  <Box as="aside">
  <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }}/>
  <hr/>

  <p>
    <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
      @{props.githubUser}
    </a>
  </p>
  <AlurakutProfileSidebarMenuDefault />
</Box>
 )
}


export default function Home() {
  const githubUser = 'renanmoraez';
  const [comunidades, setComunidades] = React.useState([{
    id: '123123123142123125461241',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'juunegreiros',
    'peas',
    'omariosouto',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
    <AlurakutMenu  githbUser={ githubUser }/>
    <MainGrid>
      <div className="profileArea" styles={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" styles={{gridArea: 'welcomeArea'}}>
    
      <Box>
         <h1 className="title">
           Bem vindo(a)
         </h1>
         <OrkutNostalgicIconSet />
      </Box>
      
      <Box>
        <h2 className="subTitle">O que você deseja fazer ? </h2>
        <form onSubmit={function handleCriaComunidade(e){
            e.preventDefault();

            const dadosDoForm = new FormData(e.target);

            // console.log('Campo: ', dadosDoForm.get('title'));
            // console.log('Campo: ', dadosDoForm.get('image'));

            const comunidade = {
              id: new Date().toISOString(),
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get('image')
            }
            
            // comunidades.push('Alura Stars');
            const comunidadesAtualizadas = [...comunidades, comunidade];
            setComunidades(comunidadesAtualizadas)
        }}>
            <div>
                <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text" 
                />
            </div>
            <div>
                <input 
                placeholder="Coloque uma URL para usarmos de capa" 
                name="image" 
                aria-label="Coloque uma URL para usarmos de capa" 
                />
            </div>
            <button>
              Criar Comunidade
            </button>
        </form>
      </Box>
   
      </div>
      <div className="profileRelationsArea" styles={{gridArea: 'profileRelationsArea'}}>

        <ProfileRelationsBoxWrapper>
        <h4 className="smallTitle">Comunidades ({comunidades.length})</h4>
           <ul>
                {comunidades.map((pessoas)=>{
                  return (
                    <li key={pessoas.id}>
                    <a href={`/users/${pessoas.title}`}>
                      <img src={pessoas.image}/>
                      <span>{pessoas.title}</span>
                    </a>
                    </li>
                  )
                })}  
              </ul>
        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBoxWrapper>
          <h4 className="smallTitle">Pessoas da Comunidade ({pessoasFavoritas.length})</h4>

          <ul>
            {pessoasFavoritas.map((pessoas)=>{
              return (
                <li key={pessoas}>
                <a href={`/users/${pessoas}`}>
                  <img src={`https://github.com/${pessoas}.png`}/>
                  <span>{pessoas}</span>
                </a>
                </li>
              )
            })}  
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>)
}
