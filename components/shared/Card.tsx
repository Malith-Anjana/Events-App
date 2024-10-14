import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {DeleteConfirmation} from "./DeleteConfirmation";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
    const {sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;
    const organizerId = event.organizer._id.toString()
    const isEventCreated = userId === organizerId;
  return (
    <div className="group relative flex min-h-[380] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
       <Link href={`/events/${event._id}`} className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500">
    <Image 
      src={event.imageUrl} 
      alt={event.title}
      layout="responsive"
      height={450}
      width={800} 
      objectFit="contain"
    />
  </Link>
      {/* IS EVENT CREATOR */}

        {isEventCreated && !hidePrice && (
            <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm translate-all">
                <Link href={`/events/${event._id}/update}`}>
                <Image
                src='/assets/icons/edit.svg'
                alt="edit"
                width={20}
                height={20}
                />
                </Link>
                <DeleteConfirmation eventId={event._id} userId={userId}/>
            </div>
        )}

      <Link
        href={`/events/${event._id}`}
        className="flex min-h-[240px] flex-col gap-3 p-5 md:gap-4"
      >
        {!hidePrice && <div className="flex gap-2">
          <span className="p-semibold-14 w-min text-nowrap rounded-full bg-green-100 px-4 py-1 text-green-600">
            {event.isFree ? "FREE" : `$${event.price}`}
          </span>
          <p className="p-semibold-14 text-nowrap w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
            {event.category.name}
          </p>
        </div>}
        <p className="p-medium-16 md:p-medium-18 text-grey-500">
            {formatDateTime(event.startDateTime).dateTime}
        </p>
        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
        <div className="flex-between w-full">
            <p className="p-medium-14 p-medium-16 text-grey-600">
                {event.organizer.firstName} {event.organizer.lastName}
            </p>
            {hasOrderLink && (
                <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
                    <p className="text-primary-500">Order Details</p>
                    <Image
                    src='/assets/icons/arrow.svg'
                    alt="search"
                    width={10}
                    height={10}
                    />
                </Link>
            )}
        </div>
      </Link>
    </div>
  );
};

export default Card;