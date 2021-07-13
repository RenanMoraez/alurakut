import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommuns'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


function ProfileSidebar(props){
 return(
  <Box>
  <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }}/>
</Box>
 )
}


export default function Home() {

  const githubUser = 'renanmoraez';
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
    <AlurakutMenu />
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
      </div>
      <div className="profileRelationsArea" styles={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h4 className="smallTitle">Pessoas da Comunidade ({pessoasFavoritas.length})</h4>

          <ul>
            {pessoasFavoritas.map((pessoas)=>{
              return (
                <li>
                <a href={`/users/${pessoas}`} key={pessoas}>
                  <img src={`https://github.com/${pessoas}.png`}/>
                  <span>{pessoas}</span>
                </a>
                </li>
              )
            })}  
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box>Comunidades</Box>
      </div>
    </MainGrid>
    </>)
}
