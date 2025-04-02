export const insights = [
  {
    title: "Transforming AI in Africa",
    description:
      "Discover how iCog Labs is pioneering AI solutions uniquely tailored for Africa.",
    image:
      "https://media.istockphoto.com/id/1511300770/photo/global-network-and-information-technology-with-an-overlay-city-at-night-for-connectivity-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=rf3RIbpc0TwlRwyHkn3cHi4XGXuze2q7WuFqX0ZyIfA=",
    link: "#",
    category: "News",
    date: "2025-01-20",
  },
  {
    title: "AI Ethics in Practice",
    description:
      "Explore our commitment to ethical AI and its impact on global industries.",
    image:
      "https://media.istockphoto.com/id/1812733266/photo/ai-and-ethics-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bgNUtmsw0ghQJulvbenSmt7FMmvpHyZd9xmy_qmHvCY=",
    link: "#",
    category: "Articles",
    date: "2025-01-18",
  },
  {
    title: "Innovations in Robotics",
    description:
      "Learn about our cutting-edge advancements in robotics and automation.",
    image:
      "https://media.istockphoto.com/id/1193074238/photo/technological-prosthetic-robot-arm-is-tested-by-two-professional-development-engineers-in-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=58Ug6hCI0Bm_xOlD6LdACVJYF6e8rFoQoeLbAaV2nkM=",
    link: "#",
    category: "Releases",
    date: "2025-01-15",
  },
  {
    title: "Machine Learning Applications",
    description: "Discover how machine learning is shaping the future.",
    image:
      "https://media.istockphoto.com/id/1182697690/photo/beautiful-male-computer-engineer-and-scientists-create-neural-network-at-his-workstation.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y2mYUt91zyEEUpE-_KdjiA3tglN6E32Dx7UAigrZBXk=",
    link: "#",
    category: "News",
    date: "2025-01-12",
  },
  {
    title: "Blockchain Advancements",
    description: "Explore the potential of blockchain technology.",
    image:
      "https://images.unsplash.com/photo-1590285836796-f772deafabfc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJMb2NrJTIwJTIwY2hhaW4lMjBBZHZhbmNlbWVudHN8ZW58MHx8MHx8fDA%3D",
    link: "#",
    category: "Articles",
    date: "2025-01-10",
  },
  {
    title: "AGI Research",
    description: "Pioneering advancements in Artificial General Intelligence.",
    image:
      "https://media.istockphoto.com/id/2164088070/photo/agi-artificial-general-intelligence-artificial-intelligence-concept-neural-network-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=z1DVbVP4I_GdGnnIjVZpGr7CepQHqjsev4y5IRcMvaA=",
    link: "#",
    category: "Releases",
    date: "2025-01-08",
  },
];

// Define the type for grid items
export interface GridItemType {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
}

export const gridItems: GridItemType[] = [
  { id: 1, title: "Our Mission", description: "To advance artificial general intelligence research and create cognitive systems that augment human capabilities, solve complex problems, and drive innovation across industries." },
  { id: 2, title: "Our Vision", description: "A world where intelligent systems work seamlessly with humans, enhancing our collective potential and addressing humanity's greatest challenges through advanced cognitive computing." },
  { id: 3, title: "Advancing AI Research", img: "/VR.png" }, // Large right-side item
  { id: 4, title: "Artificial Solutions (AI)", img: "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp" },
  { id: 5, title: "Blockchain Innovation", img: "https://images.unsplash.com/photo-1590285836796-f772deafabfc?w=400&auto=format&fit=crop&q=60" },
  { id: 6, title: "Machine Learning", img: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=500&auto=format&fit=crop&q=60" },
  { id: 7, title: "AGI", img: "https://media.istockphoto.com/id/2164088070/photo/agi-artificial-general-intelligence-artificial-intelligence-concept..." },
  { id: 8, title: "Robotics", img: "https://plus.unsplash.com/premium_photo-1680402879257-48ffbbc6db1d?w=500&auto=format&fit=crop&q=60" },
  { id: 9, title: "AI Ethics", img: "https://example.com/path-to-ethics-image" },
];
