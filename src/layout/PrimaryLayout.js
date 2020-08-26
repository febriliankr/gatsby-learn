import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
//props.children

function PrimaryLayout(props) {
    return (
        <div>
        <Header title="Gatsby Home" />
        <div className="container">
            <div className="row justify-content-md">
              <div className="col-xs-6">
                {props.children}
              </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default PrimaryLayout
