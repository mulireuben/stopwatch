import './App.css';
import { Layout } from 'antd';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './Components/common/Header';
import FooterWidget from './Components/common/FooterWidget';
import FooterCopyright from './Components/common/FooterCopyright';
// import AboutUs from './Components/Pages/AboutUs';
// import Contact from './Components/Pages/Contact';
import AboutUs from './Components/Pages/AboutUs';
import Contact from './Components/Pages/Contact';
import Faq from './Components/Pages/Faq';
import AppHome from './Components/Pages/AppHome';

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div>
      <Layout>
        <Router>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<AppHome />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Faq' element={<Faq />} />
            </Routes>
          </Content>
        </Router>
        <Footer>
          <FooterWidget />
          <FooterCopyright />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
