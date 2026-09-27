import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Testimonials.css";
/* |-------------------------------------------------------------------------- | TESTIMONIAL DATA |-------------------------------------------------------------------------- | Add / remove testimonials here. | | You can also pass a different array through the `testimonials` prop | when using the component. |-------------------------------------------------------------------------- */ const testimonialData =
  [
    {
      name: "Lulu Jane",
      image: "",
      text: "Take your bike here when you want her in the safest of hands. The team are solid they went above and beyond -restored a classic back into perfect working order in just a couple days, the level of bike experience, detail and care that took to do, is just amazing! Price was super fair, professionalism and updates on the work were awesome also. Great work guys! Big thanks again :)",
    },
    {
      name: "Mohit Samant",
      image: "",
      text: "I had a great experience with Michela! She was extremely polite, professional, and helpful. I didn’t even have an appointment, but she still took the time to help me sort out my headlight issue promptly. Really appreciate her excellent customer service and willingness to go the extra mile. Highly recommended!",
    },
    {
      name: "Crashun Muscles",
      image: "",
      text: "Best bikes best service on island.. I brought one I had to go back an get another 2, first time I’ve ever done something like this but it was worth it 💪🏾💯 bless Kenny 👊🏾",
    },
    {
      name: "Niels van der Velden",
      image: "",
      text: "Brought my bike in for a service and they did excellent work. Fixed all the issues and it runs like new again!",
    },
    {
      name: "Ed'Demiko Harris",
      image: "",
      text: "Great service and communication.",
    },
    {
      name: "tekla smith",
      image: "",
      text: "Great Service and very Friendly customer Service Rep. 1000% recommend",
    },
    {
      name: "Troy Fox",
      image: "",
      text: "The commutation very professional.. they give u a call and update u on what’s happening with your bike. The best ever in my opinion … been there twice will be going back soon",
    },
    {
      name: "Ashley Botelho",
      image: "",
      text: "Great customer service! Friendly staff. Quick service and accommodating! Would recommend to everyone!",
    },
    {
      name: "Olli Lloyd",
      image: "",
      text: "Real tight and organised garage. Helped me out a bunch when my bike was stolen, were consitent in communication and knew exactly what they were talking about. I'd recommend to anybody. Professionals from front desk to mechanics.",
    },
    {
      name: "King Sports One",
      image: "",
      text: "Took my Yamaha in for a service. This place is the most efficient, knowledgeable and professional service I have ever seen. I don’t know much about motorcycles but they teach you as to what actually occurred while my cycle was in their care. Very informative. My Yamaha GT came out running like it was brand new. Old parts given back to me and a run down of what has been done. Custom Mechanics has my vote. Small establishment that will take Bermuda over in the motorcycle industry soon enough!",
    },
    {
      name: "Jahbarri Wilson",
      image: "",
      text: "Came in for a basic serves at 4:25pm and they had me out before 5pm",
    },
    {
      name: "Matthew Fullerton",
      image: "",
      text: "First time customer and I was impressed with the Quick, efficient and quality service. I greatly appreciated the lady calling me to explain what was found and if I would like the suggested changes to be made before they went ahead and did them. Top quality customer service!",
    },
    {
      name: "Raymon Glasford",
      image: "",
      text: "Dropped my bike off for a full service in the morning and and got a call before lunch saying it was ready. When I arrived my bike looked like brand new and she is running great! Staff was friendly and gave me the full run down of everything they did. I will definitely be returning to Custom Mechanics for my next next service.",
    },
    {
      name: "Jermiko Dillas",
      image: "",
      text: "My daughter’s bike broke down and we chose Custom Mechanics to help us fix it . They were fast and efficient and the customer service was outstanding. My daughter said her bike feels like it’s brand new. Overall we are extremely pleased and would highly recommend Custom Mechanics to anyone in need of motorcycle repairs.",
    },
    {
      name: "Nyhrobi Carmichael",
      image: "",
      text: "great customer service. very quick and reliable. also saved my old bike from breaking down",
    },
    {
      name: "Sam Zhou",
      image: "",
      text: "Custom Mechanics fixed my Yamaha R125. Communication was prompt and kept me updated throughout the day. It was a smooth process from scheduling an appointment to picking up the bike. Highly recommended",
    },
    {
      name: "Ben Murphy",
      image: "",
      text: "Very impressed. Had my bike serviced today. Riding out of the parking lot and up the road, I was really surprised to notice how well it was firing.... And when I stopped, man the breaks were a lot sharper. Great and friendly customer service. Thoroughly recommend!",
    },
    {
      name: "David Augustus",
      image: "",
      text: "I want to give a huge shout-out to Custom Mechanics for their outstanding work on my Vespa scooter. Their expertise in diagnostics and their deep understanding of the computerized options on the Vespa are truly untouchable. The exceptional customer service they provided made the entire experience fantastic. My wife and I will definitely be returning in the future. Highly recommended!",
    },
    {
      name: "Tamara S",
      image: "",
      text: "Kenny provides excellent service. My bike runs beautifully every time I leave. They will even take it to be passed at TCD. If a part is not available, Kenny says he'll inform you when it becomes available and he actually calls back to schedule the repair. I highly recommend Custom Mechanics.",
    },
    {
      name: "Lothar Crofton",
      image: "",
      text: "Custom Mechanics did a great job tuning my son's motorbike and improving the performance and power. They also found other issues that needed to be fixed. Kenny was always friendly and informative. They provided quick and efficient service. I will continue to take our motorbikes to Custom Mechanics in the future.",
    },
    {
      name: "kenton swan",
      image: "",
      text: "Great service! Quick and quality.",
    },
    {
      name: "Kigh",
      image: "",
      text: "Has good customer service and communicates well. Quality repair!",
    },
    {
      name: "Hole Shot Performance Center",
      image: "",
      text: "I know Kenny he is a good person to work with. He quality workmen ship on all his jobs",
    },
    {
      name: "Mike H",
      image: "",
      text: "When you want the repair done correctly with accuracy, your in the right place !!",
    },
    {
      name: "Quincy Arorash",
      image: "",
      text: "Been using this service for over 4 years now. One of the best on the island. Very clean work environment.",
    },
    {
      name: "Shaki Swan",
      image: "",
      text: "I've been using the services of Custom Mechanics for many years. Would recommend many people to go there for all their bike needs. Great customer service, very detailed and quick work guaranteed.",
    },
    {
      name: "Septembers VO",
      image: "",
      text: "Service is fast and professional! Best customer experience I've ever had. He is extremely knowledgeable and thorough.",
    },
  ];
/* |-------------------------------------------------------------------------- | TESTIMONIAL CARD |-------------------------------------------------------------------------- */ function TestimonialCard({
  item,
  duplicate = false,
  index,
}) {
  return (
    <article
      className="testimonial-card"
      key={`${duplicate ? "duplicate" : "original"}-${index}`}
    >
      {" "}
      <p className="testimonial-text">{item.text}</p>{" "}
      <div className="testimonial-user">
        {" "}
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="testimonial-avatar"
            loading="lazy"
          />
        ) : (
          <div className="testimonial-avatar testimonial-avatar-placeholder">
            {" "}
            {item.name?.charAt(0)?.toUpperCase()}{" "}
          </div>
        )}{" "}
        <div className="testimonial-user-info">
          {" "}
          <span className="testimonial-name">{item.name}</span>{" "}
          <div className="testimonial-stars" aria-label="5 out of 5 stars">
            {" "}
            ★★★★★{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </article>
  );
}
/* |-------------------------------------------------------------------------- | TESTIMONIALS COMPONENT |-------------------------------------------------------------------------- | | Usage: | | <Testimonials /> | | OR: | | <Testimonials | title="WHAT OUR CUSTOMERS SAY" | speed={45} | /> | | OR with your own testimonials: | | <Testimonials | title="CLIENT REVIEWS" | speed={30} | testimonials={myTestimonials} | /> |-------------------------------------------------------------------------- */ export default function Testimonials({
  testimonials = testimonialData,
  title = "OVER 100+ PEOPLE TRUST US",
  speed = 35,
}) {
  const sectionRef = useRef(null);
  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);
  const topTween = useRef(null);
  const bottomTween = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* * TOP ROW * Moves LEFT → RIGHT */ topTween.current = gsap.fromTo(
        topTrackRef.current,
        { xPercent: -50 },
        { xPercent: 0, duration: speed, ease: "none", repeat: -1 },
      );
      /* * BOTTOM ROW * Moves RIGHT → LEFT */ bottomTween.current = gsap.fromTo(
        bottomTrackRef.current,
        { xPercent: 0 },
        { xPercent: -50, duration: speed, ease: "none", repeat: -1 },
      );
    }, sectionRef);
    return () => {
      topTween.current = null;
      bottomTween.current = null;
      ctx.revert();
    };
  }, [speed]);
  const pauseAnimations = () => {
    topTween.current?.pause();
    bottomTween.current?.pause();
  };
  const resumeAnimations = () => {
    topTween.current?.resume();
    bottomTween.current?.resume();
  };
  const renderCards = (duplicate = false) =>
    testimonials.map((item, index) => (
      <TestimonialCard
        key={`${duplicate ? "duplicate" : "original"}-${index}`}
        item={item}
        duplicate={duplicate}
        index={index}
      />
    ));
  return (
    <section className="testimonials" ref={sectionRef}>
      {" "}
      <h2 className="testimonials-heading">{title}</h2> {/* TOP ROW */}{" "}
      <div
        className="testimonial-row"
        onMouseEnter={pauseAnimations}
        onMouseLeave={resumeAnimations}
        onFocus={pauseAnimations}
        onBlur={resumeAnimations}
      >
        {" "}
        <div className="testimonial-track" ref={topTrackRef}>
          {" "}
          <div className="testimonial-group"> {renderCards(false)} </div>{" "}
          <div className="testimonial-group" aria-hidden="true">
            {" "}
            {renderCards(true)}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* BOTTOM ROW */}{" "}
      <div
        className="testimonial-row"
        onMouseEnter={pauseAnimations}
        onMouseLeave={resumeAnimations}
        onFocus={pauseAnimations}
        onBlur={resumeAnimations}
      >
        {" "}
        <div className="testimonial-track" ref={bottomTrackRef}>
          {" "}
          <div className="testimonial-group"> {renderCards(false)} </div>{" "}
          <div className="testimonial-group" aria-hidden="true">
            {" "}
            {renderCards(true)}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
