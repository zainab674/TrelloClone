





const CalculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 'N/A';  // Handle case with no reviews
    const totalRating = reviews.reduce((sum, review) => sum + review.star, 0);
    return (totalRating / reviews.length).toFixed(1);
};

export default CalculateAverageRating;