export const authorInfo = {
  name: "Eric Chifunda",
  firstName: "Eric",
  email: "eric.chifunda@yahoo.com",
  phone: "(917) 628-3767",
  bio: "Eric Chifunda is a New York-based occupational therapist who works as an independent contractor. His first book (An Endless Quest for Spiritual Truth) won the Pinnacle Book Achievement Award in the 'Spiritual' category. His second book (Selected Inspirational Quotes) also won the Pinnacle Book Achievement Award for the category 'Inspirational.'",
  bio2: "Eric is also an artist who studied art at the National Academy School of Fine Arts in New York City. He is also an actor who does acting occasionally. His most recent book, 'Potent Quotes for Soul,' is filled with uplifting quotes. The quotes that resonate with you can help bring a fresher perspective on life, inspire, open your heart to more love, instill hope, and help gradually elevate you to a higher version of yourself.",
  bio3: "What we read and internalize can shape our attitude to some extent. Thus, the more uplifting the words, the more one may experience improvement in thought processes, feelings, and perspective. Henceforth, life gets transformed for the better.",
  roles: ["Author", "Artist", "Actor", "Occupational Therapist"],
  achievements: [
    "Pinnacle Book Achievement Award - Spiritual Category",
    "Pinnacle Book Achievement Award - Inspirational Category"
  ]
}

export const book = [
  {
    id: 1,
    title: "An Endless Quest for Spiritual Truth",
    subtitle: "A Practical Guide to Everyday Spirituality",
    description: "Would you like a fresh perspective on life that can inspire you to live a more loving, joyful, and fulfilling life? This book is replete with articles on how one can gain deeper understanding of love in its higher form and spiritual truth that's an integral part of our daily life.",
    description2: "Since we all have a spiritual side and all events have an attendant spiritual aspect, sharpening of our perception of the spiritual realities can help us view life more clearly. And as we view life with greater clarity, we begin to experience more peace, purpose, and fulfillment.",
    coverImage: "/images/endless.jpg",
    status: "published",
    statusText: "Available Now",
    award: "Pinnacle Book Achievement Award",
    themes: ["Spirituality", "Self-Discovery", "Inner Peace", "Personal Growth"],
    // purchaseLinks: [
    //   { name: "Amazon", url: "#" }
    // ]
  },
  {
    id: 2,
    title: "Selected Inspirational Quotes",
    subtitle: "Wisdom for Everyday Life",
    description: "This book contains selected quotes from the book An Endless Quest for Spiritual Truth that may help one gain deeper spiritual insight into day-to-day life. One way to get the most out of this book is to randomly open one of the pages and see what is there for you.",
    description2: "How does that relate to a question you might have? Does it contain pearls of wisdom you may need to help you get through the day? Maybe words of inspiration to jump-start your day? Right words to open your heart? Encouraging words to lift your spirits and infuse in you a new sense of hope?",
    coverImage: "/images/inspirational.jpg",
    status: "published",
    statusText: "Available Now",
    award: "Pinnacle Book Achievement Award",
    themes: ["Inspiration", "Daily Wisdom", "Spiritual Growth", "Reflection"],
    // purchaseLinks: [
    //   { name: "Amazon", url: "#" }
    // ]
  },
  {
    id: 3,
    title: "Potent Quotes For Soul",
    subtitle: "Uplifting Quotes For A Fresher Perspective",
    description: "To get the most out of this book, open randomly any page, see what is there for you. If it resonates, contemplate on that quote for your own in-depth understanding and meaning.",
    description2: "While in the human state, few seemingly give attention to themselves as Soul. Perhaps this may be a result of merely surviving in this challenging world. The human focus is often fixated outwardly. As a result, we have forgotten to look within for our true identity as Soul.",
    coverImage: "/images/potent.jpg",
    status: "published",
    statusText: "Available Now",
    themes: ["Soul", "Awakening", "Inner Peace", "Transformation"],
    // purchaseLinks: [
    //   { name: "Amazon", url: "#" }
    // ]
  },
  {
    id: 4,
    title: "Potent Quotes For Soul",
    subtitle: "Uplifting Quotes For A Fresher Perspective - 2nd Edition",
    description: "To get the most out of this book, open randomly any page, see what is there for you. If it resonates, contemplate on that quote for your own in-depth understanding and meaning.",
    description2: "However, once aware, there is a gradual awakening to our higher thought processes, attitudes, feelings, and conduct. Life is transformed!",
    coverImage: "/images/potentv2.jpg",
    status: "published",
    statusText: "Available Now",
    themes: ["Soul", "Awakening", "Inner Peace", "Transformation"],
    // purchaseLinks: [
    //   { name: "Amazon", url: "#" }
    // ]
  }
]

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Books", href: "#books" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
]

export const contactInfo = {
  email: "eric.chifunda@yahoo.com",
  phone: "(917) 628-3767"
}

export const reviews = [
  {
    id: 1,
    bookTitle: "Selected Inspirational Quotes",
    bookId: 2,
    reviewer: "jan",
    rating: 5,
    date: "December 19, 2025",
    title: "Nicely Crafted Book",
    verified: true,
    review: "Simple and easy to read, with a quote on every page. Good for quick inspiration without feeling overwhelming.",
    helpful: 0
  },
  {
    id: 2,
    bookTitle: "Selected Inspirational Quotes",
    bookId: 2,
    reviewer: "It smells Peaceful, Tranquil, and Natural",
    rating: 5,
    date: "August 29, 2023",
    title: "Spiritual Awakening guidance",
    verified: true,
    review: "I'm presently reading Selected Inspirational Quotes by Eric Chifunda. The book is spiritually motivating. It's a great book to help you achieve spiritual guidance or make positive practical decisions in life. Mr. Chifunda's book will give you a road map if you're on a spiritual journey or just need help making a life decision.",
    helpful: 1
  },
  {
    id: 3,
    bookTitle: "Selected Inspirational Quotes",
    bookId: 2,
    reviewer: "Nadia",
    rating: 5,
    date: "September 3, 2025",
    title: "Great for Gifting!",
    verified: true,
    review: "This book is a 'Must have'. Ideal for gifting. Very Inspirational.",
    helpful: 0
  },
  {
    id: 4,
    bookTitle: "Selected Inspirational Quotes",
    bookId: 2,
    reviewer: "Valery Compres",
    rating: 5,
    date: "June 10, 2025",
    title: "Must buy!",
    verified: true,
    review: "Awesome book to read for you and with your relatives, I let my teen boys chose a quote randomly and discuss it after. Very nice way to share their thoughts.",
    helpful: 0
  },
  {
    id: 5,
    bookTitle: "Potent Quotes For Soul",
    bookId: 3,
    reviewer: "John",
    rating: 5,
    date: "July 23, 2022",
    title: "Simple yet profound",
    verified: true,
    review: "This book is very simple as it contains random quotes you can read easily anytime with a flip of a page. One single quote, when you ponder on it long enough, has a very powerful message that everyone of us can relate to.",
    helpful: 0
  },
  {
    id: 6,
    bookTitle: "Potent Quotes For Soul",
    bookId: 3,
    reviewer: "Wally M",
    rating: 5,
    date: "December 2, 2023",
    title: "Uplifting",
    verified: true,
    review: "This is one of my favorite books it's on point. Life is more than just your Flesh. It's important to slow down on your daily life and feed your inner soul man by spending time with God. Great read get a copy.",
    helpful: 0
  },
  {
    id: 7,
    bookTitle: "An Endless Quest for Spiritual Truth",
    bookId: 1,
    reviewer: "Sarah Postell",
    rating: 5,
    date: "July 2, 2023",
    title: "Faith is stronger in Knowing God's love",
    verified: true,
    review: "I purchased this book for my husband and me, and all that it has to offer has made my life easier and broadened my spirituality. The words are spiritually uplifting, reassuring that God is here, and give you hope with a feeling of purpose, peace, and tranquility.",
    helpful: 0
  },
  {
    id: 8,
    bookTitle: "An Endless Quest for Spiritual Truth",
    bookId: 1,
    reviewer: "Wally M",
    rating: 5,
    date: "August 6, 2022",
    title: "True Understanding Of Our Existence",
    verified: true,
    review: "Life is about healthy balance, whatever energy you put in spiritually and naturally is what you get back. God created us to love one another and this book is truly a guide. Thanks",
    helpful: 0
  },
  {
    id: 9,
    bookTitle: "An Endless Quest for Spiritual Truth",
    bookId: 1,
    reviewer: "Ed. Barquin",
    rating: 5,
    date: "July 31, 2017",
    title: "5 out of 5 starsTraveller speaks with authority. Listen to him. Learn from him.",
    verified: true,
    review: "Amazing book from Eric. Can't stop reading it. Very deep understanding of ourselves, guiding us in our daily lives, decision making. Highly recommended Ed. B.",
    helpful: 0
  }
]