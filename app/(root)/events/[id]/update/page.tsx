import EventForm from "@/components/shared/EventForm";
import { getEventByID } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const UpdateEvent = async ({params: {id}}: {params: {id: string}}) => {
    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;
    
    const event = await getEventByID(id);
  return (
    <div className="px-2">
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>

    </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Update" event={event} eventId={event._id}/>
      </div>
      </div>
  );
};

export default UpdateEvent;
