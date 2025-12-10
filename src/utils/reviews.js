// Dummy reviews data for products
export const reviews = {
  1: [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely stunning compass! The craftsmanship is incredible and it arrived in perfect condition. A true piece of history.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      comment: "Beautiful antique piece. The brass has a lovely patina and it's clearly authentic. Shipping was fast too.",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 5,
      comment: "This compass exceeded my expectations! Perfect for my collection. The seller was very knowledgeable about its history.",
      date: "2024-01-08"
    }
  ],
  2: [
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      comment: "Magnificent telescope! The optics are still clear and the brass work is exquisite. Worth every penny.",
      date: "2024-01-12"
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      rating: 4,
      comment: "Great addition to my study. The telescope is in excellent condition and looks amazing on display.",
      date: "2024-01-05"
    }
  ],
  3: [
    {
      id: 6,
      name: "Robert Miller",
      rating: 5,
      comment: "Amazing typewriter! Still works perfectly. The keys have a satisfying click and it's a joy to use.",
      date: "2024-01-14"
    },
    {
      id: 7,
      name: "Jennifer Davis",
      rating: 4,
      comment: "Beautiful piece of history. The typewriter is in great condition and adds character to my office.",
      date: "2024-01-09"
    }
  ],
  4: [
    {
      id: 8,
      name: "Thomas Anderson",
      rating: 5,
      comment: "Incredible pocket watch! The mechanism is still precise and the engraving is beautiful. Highly recommend!",
      date: "2024-01-11"
    },
    {
      id: 9,
      name: "Maria Garcia",
      rating: 5,
      comment: "Perfect gift for my husband. The watch is stunning and keeps excellent time. Amazing craftsmanship.",
      date: "2024-01-07"
    }
  ],
  5: [
    {
      id: 10,
      name: "James Wilson",
      rating: 4,
      comment: "Beautiful jewelry box with intricate carvings. My wife loves it! Great quality and fast shipping.",
      date: "2024-01-13"
    }
  ],
  6: [
    {
      id: 11,
      name: "Patricia Brown",
      rating: 5,
      comment: "Absolutely love this gramophone! The sound quality is surprisingly good and it's a real conversation starter.",
      date: "2024-01-06"
    }
  ],
  7: [
    {
      id: 12,
      name: "Christopher Lee",
      rating: 4,
      comment: "Great globe for my home office. The vintage look is perfect and it's educational too.",
      date: "2024-01-04"
    }
  ],
  8: [
    {
      id: 13,
      name: "Amanda Taylor",
      rating: 5,
      comment: "Beautiful oil lamp! The glass is pristine and the brass details are gorgeous. Perfect for my Victorian collection.",
      date: "2024-01-03"
    }
  ],
  9: [
    {
      id: 14,
      name: "Daniel Martinez",
      rating: 4,
      comment: "Excellent cutlery set! The silver is tarnish-free and each piece is beautifully crafted. Great investment.",
      date: "2024-01-02"
    }
  ],
  10: [
    {
      id: 15,
      name: "Rachel Green",
      rating: 5,
      comment: "Amazing vintage camera! Still takes beautiful photos. The condition is remarkable for its age.",
      date: "2024-01-01"
    }
  ]
};

// Function to get reviews for a specific product
export const getProductReviews = (productId) => {
  return reviews[productId] || [];
};

// Function to calculate average rating
export const getAverageRating = (productId) => {
  const productReviews = reviews[productId] || [];
  if (productReviews.length === 0) return 0;
  
  const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / productReviews.length).toFixed(1);
};