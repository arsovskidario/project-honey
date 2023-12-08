import { useEffect, useRef } from "react";

import Banner from "../../banner/Banner";

import './AboutPage.css'
export default function AboutPage() {

    const ref = useRef(null)
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#contact") {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <main>

            <Banner
                bannerUrl={'https://i.postimg.cc/T1f6ZDGX/image.png'}
                bannerName={'About us'}
                isMainPage={false}
            />

            <section className="container mx-auto py-8">
                <div className="first-para">
                    <p className="text-lg text-gray-800">
                        At <span className="font-bold text-yellow-600">Balkan Nectar</span>, we open our hive to you, inviting you to experience the pure essence of honey in its most authentic form. Rooted in a cherished family tradition of beekeeping, our story weaves through time, capturing the artistry of honey-making passed down through generations.
                        Welcome to a realm where golden hues and rich flavors converge, reflecting our unwavering commitment to delivering the highest quality honey to our valued customers. Our journey begins with a dedication to the raw, organic, and unadulterated beauty of honey. Every jar is a testament to the meticulous care and respect we hold for the bees and the bountiful landscapes they roam.
                        As custodians of a rich beekeeping legacy, we take pride in curating a collection that goes beyond mere sweetness. It encapsulates the spirit of our family, the essence of tradition, and the untamed beauty of the Balkan landscapes that inspire our bees.
                        Join us on this sweet journey, where each drop tells a story, and every jar is a testament to the symbiotic dance between nature and tradition. <span className="font-bold text-yellow-600">Balkan Nectar</span> - More than honey, it's a tradition, a legacy, and a promise of unparalleled purity."
                    </p>
                </div>

                <div id='history' className="second-para">
                    <h2 className="header">Our History</h2>
                    <p className="text-gray-700">
                        For centuries, the tapestry of our family has been intricately woven with the delicate threads of beekeeping—a time-honored art and an enduring science. Our story unfurls through the pages of history, marked by a profound passion for the wonders of nature, an unyielding love for the industrious bees, and an unwavering commitment to the alchemy of producing honey in its purest, most unspoiled form.
                        Our journey began with a humble hive and a boundless curiosity, cultivating a deep connection with the natural world and the extraordinary creatures that populate it. Guided by reverence for the intricate dance of bees and the artistry of honey-making, we embarked on a path of discovery, dedicating ourselves to the pursuit of perfection in every drop.
                        Over the passing years, our family's commitment to beekeeping has evolved into a legacy of expertise and a rich tapestry of experiences. With each season, we've honed our craft, fine-tuning our methods, and embracing the dynamic interplay between bees, flowers, and the elements. Today, we stand as stewards of a tradition that has flourished over generations, and we proudly share the exquisite fruits of our labor with you.
                        At <span className="font-bold text-yellow-600">Balkan Nectar</span>, our commitment to purity and authenticity is not just a promise; it's a culmination of a lifelong dedication to the symbiotic relationship between mankind and the mesmerizing world of bees. Join us in savoring the sweetness of this journey—a journey that began with a love for nature, blossomed into a passion for beekeeping, and now extends to you, delivering honey in its most refined, unblemished form.
                    </p>
                </div>

                <div className="first-para">
                    <h2 className="header">Our Values</h2>
                    <p className="text-gray-700">
                        At Balkan Nectar, we hold true to traditional values. We believe in sustainable and ethical beekeeping practices
                        that respect the environment and ensure the well-being of our bees. Our commitment to quality, purity, and
                        authenticity sets us apart.
                    </p>
                </div>

                <div id='organic' className="second-para">
                    <h2 className="header">100% Pure Raw Organic Honey</h2>
                    <p className="text-gray-700">
                        Our honey is 100% pure, raw, and organic. We take pride in offering you a product that is free from additives,
                        preservatives, and any artificial substances. Each jar of Balkan Nectar honey is a testament to our dedication to
                        delivering the best nature has to offer.
                    </p>
                    <p className="text-gray-800 mt-4">
                        Thank you for choosing Balkan Nectar. We invite you to experience the goodness of our honey and join us on this
                        journey of taste, tradition, and purity.
                    </p>
                </div>
            </section>

            <section
                id="contact"
                ref={ref}
                className="container mx-auto py-8">
                <h2 className="header">Contact us</h2>
                <div className="flex flex-wrap mt-5">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <h3 className="text-lg font-semibold">Our Address</h3>
                        <p className="text-gray-700">
                            Balkan Nectar Beekeeping<br />
                            123 Honey Bee Lane<br />
                            Beeville, BH 54321<br />
                            Balkans
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-gray-700">General Inquiries: +123 456 7890</p>
                        <p className="text-gray-700">Customer Support: +123 456 7891</p>
                    </div>

                    <div className="w-full px-2 mb-4">
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-700">Email: info@balkannectar.com</p>
                    </div>
                </div>

            </section>

        </main>
    )
}