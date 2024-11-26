function Header(){
    return(
    <>
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/* <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg> */}
                    <img src="naruto-logo.png" width="40" height="32"/>
                    <span className="fs-4">Shop React</span>
                </a>

                <ul className="nav nav-pills"  data-toggle="collapse">
                    <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Produtos</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Promoções</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Sobre</a></li>
                </ul>
            </header>
        </div>    
    </>
    )
}

export default Header
