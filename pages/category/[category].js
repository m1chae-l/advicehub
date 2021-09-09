import Advices from '../../advicedata/Advices.json'
import { useRouter } from 'next/router'
import Head from 'next/dist/shared/lib/head'


const Category = () => {
    
    const router = useRouter()
    const { category } = router.query
    const adviceCat = category

    const advice = Advices

    return (
        <>
        <Head>
            <title>Category - {adviceCat} - Advice Hub Clone</title>
        </Head>
            {advice.filter((thisAdvice) => {
                    if (thisAdvice.category === adviceCat) { // Changed this so an advice would match
                        return thisAdvice;
                    }
                }).map(advice => (
                    <div className="blog-preview" key={advice.id}>
                        <p>•{advice.category}</p>


                        <div className="titlelist">
                            <h3 className="title">{advice?.title}</h3>
                        </div>

                        <p>Given By {advice.author}</p>

                        <div className="dateandtime">
                            <p>Given {advice.date} at {advice.time}</p>
                        </div>
                    </div>
                )

                )}

        </>
    );
}

export default Category;