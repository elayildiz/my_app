export default function OrderPage() {
    return (
        <div className="min-h-screen bg-pink-50 flex items-center justify-center p-8 font-fairy">
            <div className="bg-white rounded-3xl p-6 shadow-lg max-w-3xl w-full">
                <h1 className="text-4xl font-extrabold text-dark-pink mb-6 text-center select-none">
                    🍵 Tea or Coffee Order Form
                </h1>

                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfFyoR-nWvKenAdVm6y9U69An07QQ4IJtRDZ7v5P2QPcmteEw/viewform?usp=header"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-2xl"
                    loading="lazy"
                    allowFullScreen
                >
                    Loading…
                </iframe>
            </div>
        </div>
    )
}