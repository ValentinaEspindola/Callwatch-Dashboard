import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import {Routes,Route} from 'react-router-dom'
import ContentRowTotalProducts from './ContentRowTotalProducts';
import Catalogo from './Catalogo';
import Usuarios from './Usuarios';
import ProductDetail from './ProductDetail';

function ContentWrapper(){
    return (
        <React.Fragment>
        
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Routes>
                        <Route exact path="/" element={<ContentRowTop />}/>
                        {/* aca van los componente con todo el catalogo */}
                        <Route exact path="/catalogo" element={<Catalogo />}/>
                        <Route exact path="/usuarios" element={<Usuarios />}/>
                        <Route exact path="/catalogo/producto/:id" element={<ProductDetail />}/>
                     </Routes>
                   
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;