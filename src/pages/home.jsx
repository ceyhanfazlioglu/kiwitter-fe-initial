import PageLayout from "../layouts/PageLayout";


export default function Home() {
    return(
        <PageLayout>
            <div className="p-4">
                <Link to="/"><h1 className="text-2xl font-bold">kiwitter</h1></Link>
                <p>Burada twitler listelenecek...</p>
            </div>
        </PageLayout>
    )
}