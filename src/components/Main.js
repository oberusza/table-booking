import React from "react";

import GreekSalad from "./images/greek_salad.jpg"
import Bruschetta from "./images/bruchetta.svg"
import LemonDessert from "./images/lemon_dessert.jpg"
import AboutImage1 from "./images/restaurant.jpg";
import AboutImage2 from "./images/restaurant_chef.jpg";

const Main = () => {
    return (
        <main>
            <div className="specials">
                <div className="specials-header">
                    <h1>Specials</h1>
                    <button className="button-olive">Online Menu</button>
                </div>
                <div className="cards">
                    <div className="card">
                        <img
                            src={GreekSalad}
                            alt="Greek salad"
                        />
                        <div className="card-body">
                            <div className="card-title">
                                <h2 className="foodname">Greek salad</h2>
                                <h2 className="price">$12.99</h2>
                            </div>
                            <p>
                            The famous greek salad of crispy lettuce, peppers, 
                            olives and our Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons. 
                            </p>
                            <a href="#">Order a delivery &#128757;</a>
                        </div>
                    </div>

                    <div className="card">
                        <img
                            src={Bruschetta}
                            alt="Bruschetta"
                        />
                        <div className="card-body">
                            <div className="card-title">
                                <h2 className="foodname">Bruschetta</h2>
                                <h2 className="price">$5.99</h2>
                            </div>
                            <p>
                                Our Bruschetta is made from grilled bread that 
                                has been smeared with garlic and seasoned with salt 
                                and olive oil. 
                            </p>
                            <a href="#">Order a delivery &#128757;</a>
                        </div>
                    </div>

                    <div className="card">
                        <img
                            src={LemonDessert}
                            alt="Lemon dessert"
                        />
                        <div className="card-body">
                            <div className="card-title">
                                <h2 className="foodname">Lemon Dessert</h2>
                                <h2 className="price">$5.00</h2>
                            </div>
                            <p>
                                This comes straight from grandma’s recipe book, 
                                every last ingredient has been sourced and is 
                                as authentic as can be imagined.
                            </p>
                            <a href="#">Order a delivery &#128757;</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <h1>Testimonials</h1>
                <div className="ratings">
                    <div className="rating">
                        <h2>&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
                        <h2>John</h2>
                        <p>Wow, this is my favorite mediterranean restaurant in Chicago!</p>
                    </div>
                    <div className="rating">
                        <h2>&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
                        <h2>Rebecca</h2>
                        <p>Delicious food, kind staff, well served food!</p>
                    </div>
                    <div className="rating">
                        <h2>&#9733;&#9733;&#9733;&#9733;&#9734;</h2>
                        <h2>Michael</h2>
                        <p>Everything was fine, but a little expensive restaurant.</p>
                    </div>
                    <div className="rating">
                        <h2>&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
                        <h2>Travis</h2>
                        <p>I really like the restaurant's atmosphere!</p>
                    </div>
                </div>

            </div>

            <div className="about">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                        Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and
                        were inspired to bring the flavors of their hometown in Italy to the people of chicago.
                        The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
                    </p>
                </div>
                <div className="images">
                    <img
                        className="image1"
                        src={AboutImage1}
                        alt="Chef in Little Lemon Restaurant"
                    />
                    <img
                        className="image2"
                        src={AboutImage2}
                        alt="Little Lemon Restaurant"
                    />
                </div>
            </div>
        </main>
    );
}

export default Main;