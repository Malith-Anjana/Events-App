import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <section 
    className="bg-primary-50 bg-dotted bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <div className="flex flex-col jusify-center gap-8">
        <h1 className="h1-bold">
        Unite Moments, Spark Connections: Events Made Effortless!
        </h1>
        <p className="p-regular-20 md:p-regular-24">
        Bring people together with ease. Whether it’s a small meetup or a large conference, we’ve got the tools to make your event unforgettable, from start to finish.
        </p>
        <Button size="lg" asChild className="button w-full sm:w-fit">
          <Link href="#events">
          Explore Now
          </Link>
        </Button>
      </div>
      <Image
      src="/assets/images/hero.png"
      alt="hero"
      height={1000}
      width={1000}
      className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
      />
      </div>
    </section>
    <section id="event" className="wrapper my-8 flex flex-col md:gap-12">
    <h2 className="h2-bold">Trusted by <br /> Thousands of Events</h2>
   <div className="flex w-full flex-col gap-5 md:flex-row">
    Search
    Category Filter
   </div>
    </section>
   </>
  );
}
