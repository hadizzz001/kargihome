import Image from "next/image";
import Header from './component/Header'
import Carousel from './component/Carousel'
import Footer from './component/Footer'

export default function Home() {
  return (
    <>

      <div id="wrapper">
        <Header />
        <div className="content">
         
            <Carousel />
            <div className="action-box ">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 center">
                    <h2 />
                    <p>
                      <span style={{ color: "orange", fontSize: 24 }}>
                        This is a great opportunity for students, visitors and others to choose the option of home stay accommodation by living together with
                        the local Georgian families and learn about unique Georgian food, culture and language. If it suits your personality and lifestyle.
                        <br /><br />
                        Please contact us Today !!!!!
                        <br />
                        <br /><br />
                        <h1 style={{ color: "orange", fontSize: 30 }}>Invest and Migrate </h1>


                        If you want to move to Georgia together with your family by real estate investment please contact us Today !!!

                      </span>
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="col-sm-12 ">
                {/*Start of Tawk.to Script*/}
                {/*End of Tawk.to Script*/}
              </div>
            </div>
          
        </div>

        <Footer />
      </div>

    </>

  );
}
