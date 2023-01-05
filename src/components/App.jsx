import { Header } from "./Header"
import { Help } from "./Help"
import { ContainerForForm } from './ContainerForForm'

export default function App() {


    //   const [page, setPage] = useState('form')
    //   let pageContent = '';
    //   if (page == 'form') {
    //     pageContent = <ContainerForForm />
    //   }
    //   if (page == 'about') {
    //     pageContent = <AboutPage />
    //   }
    //   if (page == 'contacts') {
    //     pageContent = <ContactsPage />
    //   }
    //   return (
    //     <div>
    //       <Header />
    //       <Help onClick={() => { setPage('about') }} />
    //       {pageContent}
    //     </div>
    //   )
    // }




    return (
        <div>
            <Header />
            <Help />
            <ContainerForForm />
        </div>
    )
}