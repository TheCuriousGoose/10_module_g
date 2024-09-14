import Card from "./Card";
import SearchBar from "./SearchBar";
import restaurants from "./store";

export default function Page() {
  return (
    <main className="md:container mx-auto flex">
      <div className="flex-1">
        <h4 className="text-3xl font-bold mx-auto mt-24 text-center">
          Restaurants In Lyon
        </h4>
        <div className="mt-8">
          <SearchBar />
        </div>

        <div className="grid grid-cols-2 gap-y-4 mt-8">
          <Card
            restaurant={{
              name: "Restaurant 1",
              description: "Description 1",
              image: "https://via.placeholder.com/300",
              price: "$$",
              rating: "4.5",
            }}
          />
          {restaurants.map((restaurant, index) => (
            <Card restaurant={restaurant} key={index} />
          ))}
        </div>
      </div>
      <div className="w-1/4 ">
        <p className="sticky top-4">Map</p>
      </div>
    </main>
  );
}
