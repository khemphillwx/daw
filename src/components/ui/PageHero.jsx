export default function PageHero({
  image,
  /**
   * Describe this page's photo. Every hero used to claim to be the same group
   * photo, which is wrong on most pages and useless on all of them.
   *
   * The image sits behind the heading at 10% opacity as texture, so where it
   * carries no information the honest markup is an empty alt — that tells a
   * screen reader to skip it rather than announce filler. Pass a real
   * description whenever the photo is actually worth describing.
   */
  imageAlt = "",
  label,
  heading,
  subheading,
  orb1Color = "bg-brand",
  orb2Color = "bg-aurora-purple",
}) {
  return (
    <section className="relative pt-36 pb-20 px-6 md:px-12 overflow-hidden">
      {/*
        Guarded because `image` is optional. Rendering <img src={undefined}>
        emits a real <img> with no src — the browser reports it as a broken
        image and it counts as a failed resource on the page.
      */}
      {image && (
        <img
          src={image}
          alt={imageAlt}
          aria-hidden={imageAlt ? undefined : "true"}
          loading="lazy"
          decoding="async"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-10"
        />
      )}
      {/* Aurora orbs */}
      <div
        className={`aurora-orb w-96 h-96 ${orb1Color} -top-24 -right-24 opacity-25`}
      />
      <div
        className={`aurora-orb w-80 h-80 ${orb2Color} -bottom-16 -left-16 opacity-20`}
      />

      <div className="relative max-w-7xl mx-auto text-center">
        {label && <p className="section-label mb-4">{label}</p>}
        <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-900 leading-tight mb-5">
          {heading}
        </h1>
        {subheading && (
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
