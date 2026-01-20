import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "5 Easy Pasta Recipes",
    description:
      "Learn how to make delicious pasta dishes in under 30 minutes.",
    image:
      "https://images.unsplash.com/photo-1603133872873-8fd12a1ff6f3?auto=format&fit=crop&w=800&q=80",
    link: "https://brethrencarevillage.org/10-smoothies-to-jumpstart-your-healthy-day/?gad_source=1&gad_campaignid=22181797612&gbraid=0AAAAAo5q3TV1g0m13Ca2Uf1aDq4fS9HVX&gclid=CjwKCAiA7LzLBhAgEiwAjMWzCDAJtGIsQCJ5KUiIps2qqL_-OYPwA7swgign-CGfI7Mu2u-jwHUzDhoCxI4QAvD_BwE",
  },
  {
    id: 2,
    title: "Secrets to Perfect Pizza",
    description:
      "Tips from our chefs to get a crispy crust and melty cheese every time.",
    image:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80",
    link: "https://brethrencarevillage.org/10-smoothies-to-jumpstart-your-healthy-day/?gad_source=1&gad_campaignid=22181797612&gbraid=0AAAAAo5q3TV1g0m13Ca2Uf1aDq4fS9HVX&gclid=CjwKCAiA7LzLBhAgEiwAjMWzCDAJtGIsQCJ5KUiIps2qqL_-OYPwA7swgign-CGfI7Mu2u-jwHUzDhoCxI4QAvD_BwE",
  },
  {
    id: 3,
    title: "Healthy Smoothie Ideas",
    description: "Boost your mornings with fresh and tasty smoothie recipes.",
    image:
      "https://images.unsplash.com/photo-1572441710614-0c0e7453a35b?auto=format&fit=crop&w=800&q=80",
    link: "https://brethrencarevillage.org/10-smoothies-to-jumpstart-your-healthy-day/?gad_source=1&gad_campaignid=22181797612&gbraid=0AAAAAo5q3TV1g0m13Ca2Uf1aDq4fS9HVX&gclid=CjwKCAiA7LzLBhAgEiwAjMWzCDAJtGIsQCJ5KUiIps2qqL_-OYPwA7swgign-CGfI7Mu2u-jwHUzDhoCxI4QAvD_BwE",
  },
  {
    id: 4,
    title: "Grilling Tips for Steak Lovers",
    description:
      "Master the art of grilling with these chef-approved techniques.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    link: "https://barbecuebible.com/2021/08/13/how-to-grill-steak/",
  },
];

export default function BlogRecipes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Food Tips & Recipes
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our latest blog posts and recipes to cook delicious meals at
          home.
        </p>

        {/* Blog Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <Image
                  height={300}
                  width={300}
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{post.description}</p>
                <a
                  href={post.link}
                  className="mt-4 inline-block text-orange-500 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
