'use client';

import { useState } from 'react';

export default function OrderPage() {
    const [name, setName] = useState('');
    const [drink, setDrink] = useState('');
    const [sugar, setSugar] = useState('Normal');
    const [notes, setNotes] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-8 font-fairy">
            <h1 className="text-4xl font-extrabold text-dark-pink mb-8 select-none">
                🍵 Tea or Coffee Order Form
            </h1>

            {submitted ? (
                <div className="bg-white bg-opacity-90 rounded-3xl p-8 shadow-lg max-w-md text-center w-full">
                    <h2 className="text-lavender text-2xl font-semibold mb-3">
                        Thank you, {name || 'mystery guest'}! 💖
                    </h2>
                    <p className="text-navy-blue mb-2 text-lg">
                        You ordered a <strong>{drink}</strong> with <strong>{sugar}</strong> sugar.
                    </p>
                    {notes && (
                        <p className="italic text-baby-pink mt-2 text-md">“{notes}”</p>
                    )}
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white bg-opacity-90 rounded-3xl p-8 shadow-lg max-w-md w-full space-y-6"
                >
                    <label className="block">
                        <span className="text-lavender font-semibold mb-1 block">Your Name</span>
                        <input
                            type="text"
                            className="mt-1 w-full border border-pink-200 rounded-xl p-3 text-navy-blue placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Ela"
                        />
                    </label>

                    <label className="block">
                        <span className="text-lavender font-semibold mb-1 block">Choose your drink</span>
                        <select
                            className="mt-1 w-full border border-pink-200 rounded-xl p-3 text-navy-blue focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                            value={drink}
                            onChange={(e) => setDrink(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select one
                            </option>
                            <option>Milk Tea 🧋</option>
                            <option>Green Tea 🍃</option>
                            <option>Coffee ☕</option>
                            <option>Hot Chocolate 🍫</option>
                        </select>
                    </label>

                    <label className="block">
                        <span className="text-lavender font-semibold mb-1 block">Sugar level</span>
                        <select
                            className="mt-1 w-full border border-pink-200 rounded-xl p-3 text-navy-blue focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                            value={sugar}
                            onChange={(e) => setSugar(e.target.value)}
                        >
                            <option>None</option>
                            <option>Less</option>
                            <option>Normal</option>
                            <option>Extra</option>
                        </select>
                    </label>

                    <label className="block">
                        <span className="text-lavender font-semibold mb-1 block">Extra requests</span>
                        <textarea
                            className="mt-1 w-full border border-pink-200 rounded-xl p-3 text-navy-blue placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition resize-none"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="e.g. no ice, oat milk please 💖"
                            rows={3}
                        />
                    </label>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-3 px-8 rounded-3xl shadow-md transition duration-300 select-none"
                        >
                            Place Order
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}