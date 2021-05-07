import CategoriesMenu from '../CategoriesMenu/defaultMenu/index'
import './TheHeader.scss'
import logo from '../../../assets/img/logo.svg'
import LocationSelector from '../LocationSelector/index'
import LoginButton from '../LoginButton/index'
import clsx from 'clsx'

const Header = () => {


  const openMiniCart = () => {

  }

  const toggleSearch = () => {

  }

  const search = () => {

  }

  const searchOpen = false;

  return (
    <header className="header-area">
      <div className="main-header-wrap bg-gray">
        <div className="custom-container">
          <div className="header-top pt-3 pb-10">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="header-info header-info-inc">
                  <a href="#">{"stores"}</a>
                  <a href="#">{"help"}</a>
                </div>
              </div>
              <div className="col-sm-6 d-flex justify-content-end">
                <div className="curr-lang-wrap curr-lang-inc">
                  <ul>
                  <LocationSelector
                    values={[{name: "Deutschland"}, {name: "United States"}]}
                    title="location"
                    data-test="country-selector-dropdown"
                    // v-if="showLocationChange"
                  />
                  <LocationSelector
                    values={[{name: "English"}, {name: "Deutsch"}]}
                    title="language"
                    data-test="language-selector-dropdown"
                  />
                </ul> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-header-outer">
          <div className="intelligent-header bg-white">
            <div className="header-middle">
              <div className="custom-container">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-3">
                    <div className="logo">
                      <a>
                        <img
                          src={logo}
                          alt="SUNRISE"
                          className="img-responsive sunrise-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-6 position-static">
                    <div className="main-menu menu-lh-3 main-menu-blod main-menu-center">
                      <CategoriesMenu />
                   
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3">
                    <div className="header-component-wrap">
                      <div className="header-search-2 component-same">
                        <a
                        href="#"
                        onClick={toggleSearch}
                        className="search-active"
                      >
                        <i className="dl-icon-search10"></i>
                      </a>
                      </div>
                       <LoginButton /> 
                      <div className="cart-wrap component-same ml-10">
                        <a
                        href="#"
                        onClick={openMiniCart}
                        data-test="mini-cart-open-button"
                        className="cart-active"
                      >
                        <i className="dl-icon-cart1"></i>
                        <span className="count-style">{10} </span>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-small-mobile">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="mobile-logo logo-width">
              <a href="index.html">
                <img alt="" src={logo} />
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="mobile-header-right-wrap">
              <div className="same-style cart-wrap">
                <a href="#" className="cart-active">
                  <i className="dl-icon-cart1 "></i>
                  <span className="count-style">02</span>
                </a>
              </div>
              <div className="mobile-off-canvas">
                <a className="mobile-aside-button" href="#"
                  ><i className="dl-icon-menu2"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={clsx('search-content-wrap main-search-active', {['search-visible']: searchOpen})}
    >
      <a onClick={ toggleSearch } className="search-close"
        ><i className="dl-icon-close"></i
      ></a>
      <div className="search-content">
        <form className="search-form">
          <input
            name="q"
            type="text"
            // v-model="searchText"
            placeholder="Search entire store…"
          />
          <button onClick={search} className="button-search">
            <i className="dl-icon-search10"></i>
          </button>
        </form>
      </div>
    </div>
    </header>
  );
};

export default Header;
