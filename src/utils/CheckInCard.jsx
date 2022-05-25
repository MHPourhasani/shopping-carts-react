export const checkInCard = (card, product) => {
    return card.find((c) => c.id === product.id);
};