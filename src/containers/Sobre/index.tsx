import Titulo from '../../components/Titulo/index.tsx'
import Paragrafo from '../../components/Paragrafo/index.tsx'
import { GithubSecao } from './styles.ts'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundaria">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem
      assumenda iusto, odio pariatur neque provident dicta sequi. A provident
      dolor facilis est aspernatur sunt eveniet dolores deserunt totam cum.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=enzonagasava&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=enzonagasava&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
