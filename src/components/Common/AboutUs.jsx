export default function AboutUs() {
  return (
    <div className="bg-gray-100/20 mt-2 rounded-md py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-indigo-400 text-lg font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
            Helping Farmers Preserve Their Harvest
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
            Our mission is to provide farmers in India with access to modern
            storage facilities, helping them preserve their crops and maximize
            profits.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-gray-200 border border-gray-200 rounded-lg shadow-sm hover:invert transition">
              <h3 className="text-lg text-gray-900 font-semibold">
                Our Vision
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We envision a future where every farmer in India has access to
                reliable and affordable storage facilities, ensuring that their
                hard work doesn&apos;t go to waste.
              </p>
            </div>

            <div className="p-8 bg-gray-200 border border-gray-200 rounded-lg shadow-sm hover:invert transition">
              <h3 className="text-lg text-gray-900 font-semibold">
                Our Mission
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Our mission is to bridge the gap between farmers and storage
                facilities by providing an easy-to-use platform where farmers
                can find and connect with nearby storage houses.
              </p>
            </div>

            <div className="p-8 bg-gray-200 border border-gray-200 rounded-lg shadow-sm hover:invert transition">
              <h3 className="text-lg text-gray-900 font-semibold">
                Why Choose Us
              </h3>
              <p className="mt-2 text-base text-gray-500">
                With our platform, farmers can gain access to crucial
                information about storage houses and learn about the best
                practices for preserving their crops, ultimately leading to
                increased profitability and reduced food wastage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
