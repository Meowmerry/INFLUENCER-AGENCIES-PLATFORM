import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "../../components/footer/Footer";
import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();
  return (
    <div className="main-container headerBG">
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>
                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>
                  <p>the page you are looking for not avaible!</p>
                  <Link href="/">
                    <a href="" className="link_404">
                      Go to Home
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
