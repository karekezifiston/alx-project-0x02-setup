import Header from '@/components/layout/Header';
import Button from '../components/common/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Learn more about our platform and what makes us unique in the industry.
          </p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are dedicated to providing innovative solutions that empower users to create,
            collaborate, and succeed. Our platform combines cutting-edge technology with
            user-friendly design to deliver an exceptional experience.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            With years of experience and a commitment to excellence, we continue to push
            the boundaries of what's possible. Join thousands of satisfied users who trust
            our platform for their daily needs.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Button Component Examples
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our reusable button component with different sizes and shapes:
          </p>
          
          <div className="space-y-6">
            {/* Small Buttons */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Small Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="small" shape="rounded-sm">
                  Small Rounded SM
                </Button>
                <Button size="small" shape="rounded-md">
                  Small Rounded MD
                </Button>
                <Button size="small" shape="rounded-full">
                  Small Rounded Full
                </Button>
              </div>
            </div>

            {/* Medium Buttons */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Medium Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="medium" shape="rounded-sm">
                  Medium Rounded SM
                </Button>
                <Button size="medium" shape="rounded-md">
                  Medium Rounded MD
                </Button>
                <Button size="medium" shape="rounded-full">
                  Medium Rounded Full
                </Button>
              </div>
            </div>

            {/* Large Buttons */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Large Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="large" shape="rounded-sm">
                  Large Rounded SM
                </Button>
                <Button size="large" shape="rounded-md">
                  Large Rounded MD
                </Button>
                <Button size="large" shape="rounded-full">
                  Large Rounded Full
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;