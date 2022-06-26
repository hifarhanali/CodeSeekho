import React from 'react'

const Review = ({ review }) => {
    return (
        <div>
            <section className="antialiased text-text-dark p-4">
                <div>
                    <div className="max-w-2xl mx-auto h-200">
                        <div className="px-6 py-5">
                            <div className="flex items-start">

                                <img className="w-10 h-10 rounded-full mr-4" src={review.user.photo} alt="avatar" />
                                <div className="flex-grow truncate">

                                    <div className="w-full sm:flex justify-between items-center mb-3">
                                        <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">{review.user.name}</h2>
                                        <p className={`text-sm text-text-light`}>{review.user.profession}</p>
                                    </div>
                                    <div className="flex items-end justify-between whitespace-normal">
                                        <div className="max-w-md text-indigo-100">
                                            <p className="mb-2">{review.review}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Review