var minStoneSum = function(piles, k) {
    
    //建立 Priority Queue
    const maxPQ = new MaxPriorityQueue();
    piles.forEach(pile => maxPQ.enqueue(pile));

    //只能作 k 次
    while (k--) {
        const pile = maxPQ.dequeue().element;
        const newPile = pile - Math.floor(pile / 2);

        //同一個 pile 可以作很多次，所以要記得推回去
        maxPQ.enqueue(newPile);
    }

    //加總
    return maxPQ.toArray().reduce((sum, pile) => sum + pile.element, 0);
};
