import { useState, useEffect, useCallback } from "react";
import PageHero from "../components/ui/PageHero";
import gallery1 from "../assets/gallery/DAW-gallery-1.jpg";
import gallery2 from "../assets/gallery/DAW-gallery-2.jpg";
import gallery3 from "../assets/gallery/DAW-gallery-3.jpg";
import gallery4 from "../assets/gallery/DAW-gallery-4.jpg";
import gallery5 from "../assets/gallery/DAW-gallery-5.jpg";
import gallery6 from "../assets/gallery/DAW-gallery-6.jpg";
import gallery7 from "../assets/gallery/DAW-gallery-7.jpg";
import gallery8 from "../assets/gallery/DAW-gallery-8.jpg";
import gallery9 from "../assets/gallery/DAW-gallery-9.jpg";
import gallery10 from "../assets/gallery/DAW-gallery-10.jpg";
import gallery11 from "../assets/gallery/DAW-gallery-11.jpg";
import gallery12 from "../assets/gallery/DAW-gallery-12.jpg";
import gallery13 from "../assets/gallery/DAW-gallery-13.jpg";
import gallery14 from "../assets/gallery/DAW-gallery-14.jpg";
import gallery15 from "../assets/gallery/DAW-gallery-15.jpg";
import gallery16 from "../assets/gallery/DAW-gallery-16.jpg";
import galleryhero from "../assets/DAW-gallery-hero.jpg";

import Seo from "../components/seo/Seo";
import { webPageSchema, breadcrumbSchema } from "../lib/seo";

const photos = [
  { id: 1, src: gallery1, alt: "Dance Academy West" },
  { id: 2, src: gallery2, alt: "Dance Academy West" },
  { id: 3, src: gallery3, alt: "Dance Academy West" },
  { id: 4, src: gallery4, alt: "Dance Academy West" },
  { id: 5, src: gallery5, alt: "Dance Academy West" },
  { id: 6, src: gallery6, alt: "Dance Academy West" },
  { id: 7, src: gallery7, alt: "Dance Academy West" },
  { id: 8, src: gallery8, alt: "Dance Academy West" },
  { id: 9, src: gallery9, alt: "Dance Academy West" },
  { id: 10, src: gallery10, alt: "Dance Academy West" },
  { id: 11, src: gallery11, alt: "Dance Academy West" },
  { id: 12, src: gallery12, alt: "Dance Academy West" },
  { id: 13, src: gallery13, alt: "Dance Academy West" },
  { id: 14, src: gallery14, alt: "Dance Academy West" },
  { id: 15, src: gallery15, alt: "Dance Academy West" },
  { id: 16, src: gallery16, alt: "Dance Academy West" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index into photos array

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i - 1 + photos.length) % photos.length),
    [],
  );
  const next = useCallback(
    () => setLightbox((i) => (i + 1) % photos.length),
    [],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  return (
    <>
      <Seo
        title="Photo Gallery | Dance Academy West, Carrollton GA"
        description="Recitals, classes, competitions and community performances — photos from 25 seasons at Dance Academy West in Carrollton, Georgia."
        path="/gallery"
        schema={[
          webPageSchema({
            name: "Photo Gallery | Dance Academy West, Carrollton GA",
            description: "Recitals, classes, competitions and community performances — photos from 25 seasons at Dance Academy West in Carrollton, Georgia.",
            path: "/gallery",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ])
        ]}
      />

      <PageHero
        image={galleryhero}
        label="Photos & Videos"
        heading="See DAW in Action"
        subheading="A glimpse into the joy, energy, and artistry happening every week at Dance Academy West."
        orb1Color="bg-aurora-cyan"
        orb2Color="bg-aurora-pink"
      />

      {/* Video highlight placeholder */}
      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-brand opacity-15 -top-20 right-0" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Brand Film</p>
            <h2 className="section-heading">Watch Our Story</h2>
          </div>

          {/* Video embed placeholder */}
          <div className="glass-card rounded-3xl overflow-hidden aspect-video max-w-4xl mx-auto mb-20 flex items-center justify-center bg-slate-100/60">
            <div className="w-full h-full">
              <iframe
                title="Dance Academy West studio video"
                width="100%"
                height="100%"
                frameBorder="0"
                loading="lazy"
                src="https://www.canva.com/design/DAHGYQ1yOiw/czrAzPfutgDe3woxuh7s-g/watch?embed"
                allowFullScreen
                allow="fullscreen"
              ></iframe>
            </div>
          </div>

          {/* Photo grid */}
          <div className="text-center mb-10">
            <p className="section-label mb-3">Studio Life</p>
            <h2 className="section-heading">Photo Gallery</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightbox(index)}
                className="aspect-square rounded-2xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {lightbox !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              onClick={close}
            >
              {/* Prev */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
                aria-label="Previous"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Image */}
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
                aria-label="Next"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {lightbox + 1} / {photos.length}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial video section */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 bottom-0 right-0" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Family Stories</p>
            <h2 className="section-heading">Testimonial Videos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="glass-card rounded-2xl aspect-video flex items-center justify-center bg-slate-100/50 hover:shadow-md transition-shadow"
              >
                <div className="text-center px-6">
                  <div className="w-14 h-14 rounded-full bg-aurora-purple/20 flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-aurora-purple ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-slate-600">
                    Testimonial {n}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
