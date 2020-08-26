import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
//props.children

function BlogpostLayout(props) {
    return (
        <div>
        <Header title="Gatsby Home" />
        <div className="container">
            <div className="row justify-content-md">
                <div>Hello this is a blogpost page</div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default BlogpostLayout
