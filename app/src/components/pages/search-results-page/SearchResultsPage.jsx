import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

import ProductCard from "../../product/card/ProductCard"
import { getProductsByName } from "../../../services/productsService";
export default function SearchResultsPage() {

    const [results, setResults] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const getQueryParam = (name) => {
            const searchParams = new URLSearchParams(location.search);
            return searchParams.get(name);
        };

        const fetchResults = async (param) => {
            return await getProductsByName(param);
        };

        const nameParam = getQueryParam("name");

        const fetchData = async () => {
            if (nameParam) {
                console.log(nameParam);

                try {
                    const data = await fetchResults(nameParam);
                    console.log(data);

                    setResults(Object.values(data));
                } catch (error) {
                    console.error("Error fetching results:", error);
                }
            }
        };

        fetchData();
    }, [location.search]);



    return (
        <section className="mx-auto flex items-center flex-col">
            <h1 className="m-10 text-3xl">Search results</h1>

            {results.length === 0 && <h2 className="text-xl">No results found!</h2>}
            <div className="w-5/6 grid grid-cols-2 sm:w-3/6 sm:grid-cols-2 md:w-3/6 md:grid-cols-2 lg:w-3/6 lg:grid-cols-3 xl:w-3/6 xl:grid-cols-3 gap-4 mt-5">
                {results.map(
                    product => <ProductCard key={product._id} {...product} />
                )}

            </div>
        </section>
    )
}