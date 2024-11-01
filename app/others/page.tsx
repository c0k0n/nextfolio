export default function OthersPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Others</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                {/* Add your contact information here */}
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
                {/* Add any other relevant information here */}
                Outside of work, I enjoy learning languages and am a big fan of
                <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Chinese_animation"> Donghua
                </a>
                .
                <p>
                    While I may come across as introverted at first, I’m approachable and always open to collaboration.
                </p>
            </section>
        </div>
    )
}