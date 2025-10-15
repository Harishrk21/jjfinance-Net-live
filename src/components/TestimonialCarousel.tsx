const TestimonialCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building trust through transparent and professional service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              We are a new startup committed to providing exceptional financial services. 
              Contact us to become one of our valued customers and experience transparent, 
              professional loan services tailored to your needs.
            </p>
            <div className="text-center">
              <p className="font-bold text-foreground text-lg">Start Your Journey With Us</p>
              <p className="text-sm text-muted-foreground mt-2">
                Be among our first customers • Chennai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
