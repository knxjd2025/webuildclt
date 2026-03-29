export function VideoShowcase() {
  return (
    <section className="py-20 bg-background content-lazy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            See Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            We Build in Action
          </h2>
          <p className="text-muted-foreground">
            Watch our team deliver quality construction across the Charlotte
            metro area — from commercial upfits to roof coatings and beyond.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/images/portfolio/fyzical-therapy.jpg"
                aria-label="FYZICAL Therapy commercial upfit timelapse by We Build"
              >
                <source src="/videos/fyzical-upfit.mp4" type="video/mp4" />
                <p>Your browser does not support the video element. View our FYZICAL Therapy commercial upfit project.</p>
              </video>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              FYZICAL Therapy — Commercial Upfit
            </p>
          </div>
          <div className="space-y-3">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/images/we-coat/mics-aerial-1.jpg"
                aria-label="We Coat commercial roof coating process in Charlotte NC"
              >
                <source src="/videos/we-coat-charlotte.mp4" type="video/mp4" />
                <p>Your browser does not support the video element. View our We Coat commercial roof coating project.</p>
              </video>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              We Coat — Commercial Roof Coating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
