import AboutMe from '../components/aboutme'
import { Layout } from '../components/layout'
import Masthead from '../components/masthead'

export default function Home() {
  return (
   <>
    <Layout>
      <Masthead></Masthead>
      <AboutMe></AboutMe>
    </Layout>
   </>
  )
}
